// import React from 'react'
"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
// import {} from 'react-icons'
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const menuList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-4 text-center items-center ">
          <Link href="/">
            <h1 className="text-2xl font-semibold">
              Umar <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex gap-4 flex-col justify-end items-center">
          {menuList.map((ele, index) => {
            return (
              <Link href={ele.path} key={index} className={`${ele.path=== pathname && 'text-accent' } capitalize `}>
                {ele.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
