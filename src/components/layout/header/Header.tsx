import MenuIcon from "@/components/tiptap-icons/MenuIcon";
import { Header_Navigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className=" bg-[#1A0B2E] text-white  font-[family-name:var(--font-plus-jakarta-sans)] sticky -top-1 z-50">
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
          <nav className="w-1/2 ">
            <ul className="justify-around items-center md:flex hidden">
              {Header_Navigation.map((item, index) => (
                <li key={`${index} ${index}`} className="text-md">
                  <a
                    href={`#${item.href}`}
                    className="hover:opacity-75 transition duration-300 before:content-[''] before:absolute before:inset-x-0 
                    before:-bottom-1.5 before:w-0 before:h-1 before:bg-white before:duration-500 hover:before:w-full relative"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="md:hidden flex items-center justify-end cursor-pointer">
              <MenuIcon className="w-8 h-8 text-white" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
