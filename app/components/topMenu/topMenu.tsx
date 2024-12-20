"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopMenu() {
  const topMenuLinks = [
    { name: "About us", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Schedule", href: "/schedule" },

  ];

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">

          <span className="font-semibold text-xl tracking-tight">
            YOUR YOGA APP
          </span>
        </div>
{/*         <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          {topMenuLinks .map((link) => {
              return (
                <Link
                  className="block mt-4 lg:inline-block lg:mt-0 lg:px-5 text-teal-200 hover:text-white mr-4"
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>
          <div>
            <Link
              href="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              LOGIN
            </Link>
            <a
              href="/logout"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              LOG OUT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
