import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Moon, Sun, Search } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useNavigate, useLocation } from "react-router";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Hash link - scroll to section
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const navHeight = 100;
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 100;
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    } else {
      // Regular route
      navigate(href);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const projectItems = [
    { label: "Highlighted Work", href: "#work" },
    { label: "All Projects", href: "/projects" },
  ];

  const navItems = [
    { label: "Projects", href: "#work", dropdown: projectItems },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-white/20 dark:border-white/10" 
          : "bg-white/40 dark:bg-black/40 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 rounded-[240px]">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
          >
            Sydney Berman
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/30 dark:bg-zinc-900/50 backdrop-blur-2xl px-6 py-3 rounded-full shadow-[0_8px_32px_0_rgba(255,182,193,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/20 dark:border-white/10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !item.dropdown && handleNavClick(item.href)}
                  className="text-sm px-4 py-2 hover:bg-pink-100/50 dark:hover:bg-white/10 rounded-full transition-all flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} />}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/60 dark:bg-zinc-900/90 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(255,182,193,0.2)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 z-50"
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            onClick={() => handleNavClick(dropdownItem.href)}
                            className="block px-6 py-3 text-sm hover:bg-pink-100 dark:hover:bg-white/10 transition-colors cursor-pointer w-full text-left"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-white/60 dark:hover:bg-white/10 rounded-full transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-white/60 dark:hover:bg-white/10 rounded-full transition-all"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg rounded-b-2xl border-t border-white/20 dark:border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="text-sm tracking-wide hover:opacity-50 transition-opacity flex items-center justify-between w-full"
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${
                            mobileDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <button
                                key={dropdownItem.label}
                                onClick={() => handleNavClick(dropdownItem.href)}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:opacity-50 transition-opacity block w-full text-left"
                              >
                                {dropdownItem.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-sm tracking-wide hover:opacity-50 transition-opacity block w-full text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mt-24 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/70 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 border border-white/40 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <Search size={24} className="text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="flex-1 text-lg bg-transparent border-none outline-none text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}