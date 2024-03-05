"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hidden md:block">
          <Link href="/">Discord Bot Name</Link>
        </h1>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-4 md:items-center w-full md:w-auto`}
        >
          <li>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <Button variant="ghost">Features</Button>
            </Link>
          </li>
          <li>
            <Link href="/invite">
              <Button variant="invite">Invite</Button>
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 text-gray-500 flex justify-center items-center z-50"
          onClick={closeMenu}
        >
          <button
            className="absolute top-4 left-4 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-col justify-center items-center">
              <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link href="/">Home</Link>
              </li>
              <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link href="/features">Features</Link>
              </li>
              <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link href="/invite">Invite</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
