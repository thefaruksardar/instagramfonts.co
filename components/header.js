"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isNav, setisNav] = useState(false);
  return (
    <header className="">
      <nav className="bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <div className="px-3 flex gap-1 items-center md:max-w-lg mx-auto lg:max-w-4xl">
              <Image
                src="/Instagramfonts.png"
                alt="Instagramfonts Logo"
                width={150}
                height={80}
                className="h-7 w-full not-img"
              />
              {/* <p className="text-2xl not-p text-gray-200 font-semibold">
                TEXTREPEAT
              </p> */}
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={(e) => setisNav(!isNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class={`${isNav ? "" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="not-ul font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 !text-gray-200">
              <li>
                <a
                  href="/"
                  className="!text-gray-200 block py-2 pl-3 pr-4  rounded md:bg-transparent md:hover:!text-gray-500 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://repeattext.com/"
                  target="_blank"
                  className="block !text-gray-200 py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:!text-gray-500 md:p-0 "
                >
                  Repeattext.Com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
