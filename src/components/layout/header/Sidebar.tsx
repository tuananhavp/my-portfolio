"use client";
import { Header_Navigation, Icon_Navigation } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import IconNavigation from "@/components/IconNavigation";
import { IoMdClose } from "react-icons/io";

interface SidebarProps {
  activeSection: number;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => void;
}

const Sidebar = ({ activeSection, isSidebarOpen, setIsSidebarOpen, handleNavClick }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
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
              <div className="flex items-center">
                <Image
                  src="/logo-dark.svg"
                  alt="Personal Logo for NTA"
                  height={40}
                  width={40}
                  className="inline-block mr-2"
                />
                <h2 className="text-xl font-bold text-white">Menu</h2>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="text-white hover:text-gray-300">
                <IoMdClose className="text-2xl" />
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
              <div className="border-t border-gray-700 pt-4 flex justify-center space-x-4">
                {Icon_Navigation.map((item) => (
                  <IconNavigation
                    key={item.name}
                    item={item}
                    iconClassName="md:text-2xl text-base"
                    showLabels={false}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Sidebar;
