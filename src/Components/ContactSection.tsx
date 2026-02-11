import { motion } from "motion/react";
import { Mail, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a333552c/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || "Failed to send message";
        const details = data.details ? ` Details: ${JSON.stringify(data.details)}` : "";
        console.error("Contact form error:", data);
        throw new Error(errorMessage + details);
      }

      setSubmitStatus({
        type: "success",
        message: data.message || "Your message has been sent successfully!",
      });

      // Clear form
      setFormData({ name: "", contact: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900 transition-colors duration-500 overflow-hidden">
      {/* Ambient glow for dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl tracking-tighter mb-12">
            Let's work together
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
            Have a project in mind? I'd love to hear about it.
          </p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                minLength={2}
                className="w-full px-6 py-4 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 focus:border-pink-500/50 dark:focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Email or Phone Input */}
            <div>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-6 py-4 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 focus:border-pink-500/50 dark:focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                minLength={10}
                rows={6}
                className="w-full px-6 py-4 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 focus:border-pink-500/50 dark:focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="group relative w-full px-12 py-4 bg-gradient-to-r from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 text-white hover:from-pink-600 hover:to-pink-700 dark:hover:from-pink-500 dark:hover:to-pink-600 transition-all rounded-full shadow-lg dark:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:dark:shadow-[0_0_40px_rgba(236,72,153,0.5)] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </span>
            </motion.button>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl ${
                  submitStatus.type === "success"
                    ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800"
                    : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.form>

          {/* OR Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 flex items-center justify-center"
          >
            <span className="text-gray-400 dark:text-gray-500">OR</span>
          </motion.div>

          {/* LinkedIn Link */}
          <div className="mb-16">
            <motion.a
              href="https://www.linkedin.com/in/sydney-berman-494686268/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: '#0077B5' }}
              className="group inline-flex items-center justify-center gap-4 py-4 px-8 backdrop-blur-xl rounded-2xl border border-[#0077B5] hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-all duration-500 shadow-lg hover:shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:dark:shadow-[0_8px_40px_rgba(236,72,153,0.4)] relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 dark:from-pink-500/30 dark:to-purple-500/30" />
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
              
              <Linkedin size={20} className="text-white relative z-10" />
              <span className="text-lg relative z-10 text-white">Connect on LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}