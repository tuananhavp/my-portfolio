"use client";
import MenuIcon from "@/components/tiptap-icons/MenuIcon";
import { Header_Navigation } from "@/constants";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <header className="bg-[#1A0B2E] text-white font-[family-name:var(--font-plus-jakarta-sans)] sticky top-0 z-50">
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

      <Sidebar
        activeSection={activeSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleNavClick={handleNavClick}
      />
    </>
  );
};

export default Header;
