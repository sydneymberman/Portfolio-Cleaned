import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a333552c/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-a333552c/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, contact, message } = body;

    // Basic validation
    if (!name || !contact || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Spam filtering checks
    // 1. Check for minimum length
    if (name.length < 2 || message.length < 10) {
      return c.json({ error: "Invalid input length" }, 400);
    }

    // 2. Check for suspicious patterns (excessive links)
    const linkPattern = /(https?:\/\/|www\.)/gi;
    const linkCount = (message.match(linkPattern) || []).length;
    if (linkCount > 2) {
      console.log(`Spam detected: Too many links in message from ${name}`);
      return c.json({ error: "Message contains too many links" }, 400);
    }

    // 3. Rate limiting - check if same contact submitted recently (within 5 minutes)
    const rateLimitKey = `contact_rate_limit:${contact}`;
    const lastSubmission = await kv.get(rateLimitKey);
    
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
      if (timeSinceLastSubmission < 5 * 60 * 1000) { // 5 minutes
        console.log(`Rate limit exceeded for contact: ${contact}`);
        return c.json({ error: "Please wait a few minutes before submitting again" }, 429);
      }
    }

    // 4. Check for common spam keywords
    const spamKeywords = ['cialis', 'viagra', 'casino', 'lottery', 'prize', 'bitcoin', 'crypto investment'];
    const lowerMessage = message.toLowerCase();
    const hasSpamKeyword = spamKeywords.some(keyword => lowerMessage.includes(keyword));
    
    if (hasSpamKeyword) {
      console.log(`Spam detected: Spam keyword found in message from ${name}`);
      return c.json({ error: "Message flagged as spam" }, 400);
    }

    // Set rate limit
    await kv.set(rateLimitKey, Date.now().toString());

    // Send email using Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY not configured");
      return c.json({ error: "Email service not configured" }, 500);
    }

    console.log(`Attempting to send email for submission from ${name}`);

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: 'sydneymberman@gmail.com',
        subject: `New Portfolio Contact from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
        `,
      }),
    });

    const emailData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.log(`Email sending failed with status ${emailResponse.status}: ${JSON.stringify(emailData)}`);
      return c.json({ 
        error: "Failed to send email", 
        details: emailData 
      }, 500);
    }

    console.log(`Email sent successfully to sydneymberman@gmail.com from ${name}. Email ID: ${emailData.id}`);

    // Store submission in database for backup
    const submissionKey = `contact_submission:${Date.now()}`;
    await kv.set(submissionKey, JSON.stringify({
      name,
      contact,
      message,
      timestamp: new Date().toISOString(),
    }));

    return c.json({ 
      success: true, 
      message: "Your message has been sent successfully!" 
    });

  } catch (error) {
    console.log(`Error processing contact form submission: ${error}`);
    return c.json({ error: "An error occurred while processing your request" }, 500);
  }
});

Deno.serve(app.fetch);