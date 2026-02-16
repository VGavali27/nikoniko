"use client";
import React, { useEffect, useState } from "react";
import { myCustomFont, poppins } from "@/app/layout";
import Nav from ".";
import Link from "next/link";

const headerLinks = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About Us",
  },
  {
    id: "flavour",
    name: "Our Flavours",
  },
  {
    id: "contact",
    name: "Contact Us",
  },
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex justify-between h-18 px-4 py-2"
      style={{ backgroundColor: `${scrolled ? "rgba(0, 0, 0, 0.73)" : ""}` }}
    >
      <div>
        <Link href={"/"}>
          <img
            src="https://nikoniko.in/assets/img/Niko-Niko-logo.png"
            alt=""
            className="h-full"
          />{" "}
        </Link>
      </div>
      <div className="hidden sm:flex text-white">
        {headerLinks.map((item, idx) => {
          return (
            <Link href={`#${item.id}`} key={`${item.id}-${idx}`}>
              <div
                className={`${myCustomFont.className} text-[#5F3D2A] mx-2 my-3 bg-white px-2 py-1`}
              >
                {item.name.toUpperCase()}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center sm:hidden">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
