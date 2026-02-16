"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Menu, X } from "lucide-react";
import { myCustomFont } from "@/app/layout";

const Nav = () => {
  // const { t, i18n } = useTranslation();
  // const currentLang = i18n.language; // get current locale
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    {
      name: "HOME",
      link: "home",
    },
    {
      name: "ABOUT US",
      link: "about",
    },

    {
      name: "OUR FLAVOURS",
      link: "flavour",
    },

    { name: "CONTACT US", link: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  function handleRedirectClick(navUrl) {
    const element = document.getElementById(navUrl);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      router.push(`#${navUrl}`);
    }
  }

  return (
    <div>
      <div className="bg-white rounded-[3px]">
        <Menu size={30} className="text-black " onClick={toggleMobileMenu} />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full z-20 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.773)" }}
      >
        <div className="flex justify-between items-center px-8 py-8">
          <div className="flex-shrink-0"></div>
          <X
            size={28}
            className="text-white cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="flex flex-col items-center gap-4 pt-1">
          {navLinks.map((navItem, index) => (
            <div
              key={`navLink-m-${index}`}
              className={`${myCustomFont.className} text-2xl text-white leading-8 hover:text-[red]`}
              onClick={() => handleRedirectClick(navItem.link)}
            >
              {navItem.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
