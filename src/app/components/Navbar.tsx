import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center padding-container max-container">
      <Link href="/">
        <img src="/hilink-logo.svg" alt="logo" />
      </Link>

      <ul className="hidden gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="cursor-pointer hover:font-bold transition-all text-[16px] text-gray-500"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Button type="button" title="Login" icon="/user.svg" />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={30}
        height={30}
        className="lg:hidden cursor-pointer inline-block"
      />
    </div>
  );
};

export default Navbar;
