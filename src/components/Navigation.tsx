"use client";
import navData from "@/datas/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ gap = "0" }: { gap?: string }) => {
  const pathname = usePathname();
  return (
    <ul className="flex justify-around items-center font-semibold text-xs md:text-sm " style={{ gap }}>
      {navData.map((data, i) => (
        <li key={data.path} className={`animate-fadeInFromUp opacity-0`} style={{ animationDelay: `${(i + 5) * 2}00ms` }}>
          <Link href={data.path} className={`text-gray-400 hover:text-gray-100 transition duration-300 ${pathname === data.path ? "nav-active" : ""}`}>
            {data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
