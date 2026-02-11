import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-black dark:bg-zinc-950 text-white py-12 border-t border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © 2025 Sydney Berman. All rights reserved.
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <Link 
              to="/resume"
              className="hover:text-white transition-colors font-medium"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}