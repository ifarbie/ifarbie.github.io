import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";

const Header = () => {
  return (
    <header className="z-[9999999] relative backdrop-blur-md bg-opacity-80 bg-[#121212] md:fixed md:top-0 md:left-0 md:right-0">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-7 px-5 w-full md:px-7">
        <HeaderLogo />
        <HeaderNav />
        <HeaderGithub />
      </div>
    </header>
  );
};

const HeaderLogo = () => {
  return (
    <div className="text-lg animate-fadeInFromUp opacity-0" style={{ animationDelay: "1000ms" }}>
      <Link href="/" className="text-[#7BC9FF] hover:text-sky-200">
        farizRifkyBerliano();
      </Link>
    </div>
  );
};

const HeaderNav = () => {
  return (
    <nav className="hidden md:flex md:items-center">
      <Navigation gap={"2.5rem"} />
    </nav>
  );
};

const HeaderGithub = () => {
  return (
    <div className="animate-fadeInFromUp opacity-0" style={{ animationDelay: "1000ms" }}>
      <Link href={"https://github.com/ifarbie"}>
        <Image className="rounded-full w-[40px]" src={`https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png`} alt="GitHub" width={2000} height={2000} />
      </Link>
    </div>
  );
};

export default Header;
