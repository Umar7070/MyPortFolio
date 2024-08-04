"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const list = [
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
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-6">
      {list.map((curele, index) => {
        return (
          <Link
            key={index}
            href={curele.path}
            className={`${
              curele.path === pathname && "text-accent border-b-2 border-accent "
            } capitalize transition-all duration-100ms`}
          >
            {curele.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
