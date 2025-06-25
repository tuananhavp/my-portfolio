import { Footer_Navigation } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A0B2E] text-white font-[family-name:var(--font-preahvihear)]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col">
            <h2 className="md:text-2xl text-base font-bold mb-4">Connect with Me</h2>
            <p className="md:text-base text-xs mb-4">
              I&apos;m seeking to join a cross-functional team passionate about improving lives through <br />{" "}
              accessible, thoughtful design. Have a project in mind? Let&apos;s connect <br /> <br />
              Feel free to reach out via email or connect with me on social media. <br /> <br /> tuananhavp@gmail.com
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-6">
            {Footer_Navigation.map((item) => {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300 flex items-center space-x-2"
                >
                  <span className="md:text-2xl text-base">{item.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="md:text-sm text-[10px]">&copy; {new Date().getFullYear()} Tuan Anh. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
