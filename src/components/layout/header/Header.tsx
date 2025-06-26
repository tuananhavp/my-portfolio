"use client";
import MenuIcon from "@/components/tiptap-icons/MenuIcon";
import { Header_Navigation } from "@/constants";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const calculateActiveSection = () => {
      const sections = Header_Navigation.map((item) => document.getElementById(item.href)).filter(Boolean);
      if (sections.length === 0) return 0;
      const headerHeight = 120;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight + 80 && rect.bottom > headerHeight) {
          return i;
        }
      }
      if (latest < 50) return 0;

      const lastSection = sections.length > 0 ? sections[sections.length - 1] : null;

      if (lastSection && lastSection.getBoundingClientRect().top < headerHeight) {
        return sections.length - 1;
      }

      return activeSection;
    };
    const newActiveSection = calculateActiveSection();
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    e.preventDefault();
    setActiveSection(index);
    setIsSidebarOpen(false);

    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="bg-[#1A0B2E] text-white font-[family-name:var(--font-plus-jakarta-sans)] sticky -top-1 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-lg font-bold">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-dark.svg"
                alt="Personal Logo for NTA"
                height={40}
                width={40}
                className="inline-block mr-2"
              />
            </Link>
          </div>
          <nav className="w-1/2">
            <ul className="justify-around items-center md:flex hidden">
              {Header_Navigation.map((item, index) => (
                <li key={`nav-${index}`} className="text-md">
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href, index)}
                    className={`hover:opacity-75 transition duration-300 before:content-[''] before:absolute before:inset-x-0 
                    before:-bottom-1.5 before:w-0 before:h-1 before:bg-white before:duration-500 hover:before:w-full relative ${
                      activeSection === index ? "before:w-full" : "before:w-0"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="md:hidden flex items-center justify-end cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MenuIcon className="w-8 h-8 text-white" />
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#1A0B2E] z-50 shadow-xl md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="text-white hover:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ul className="py-4">
                {Header_Navigation.map((item, index) => (
                  <motion.li
                    key={`mobile-nav-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-3"
                  >
                    <a
                      href={`#${item.href}`}
                      onClick={(e) => handleNavClick(e, item.href, index)}
                      className={`block w-full text-lg ${
                        activeSection === index ? "text-white font-medium" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-1 h-6 rounded-r mr-3 transition-colors duration-300 ${
                            activeSection === index ? "bg-white" : "bg-transparent"
                          }`}
                        />
                        {item.name}
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="absolute bottom-8 left-0 right-0 px-4">
                <div className="border-t border-gray-700 pt-4 flex justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/tuananhavp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/tuananhavp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
