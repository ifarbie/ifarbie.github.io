import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="z-[99] px-10 py-4 fixed bottom-0 left-0 right-0 backdrop-blur-md backdrop-opacity-90 border border-[#383838] rounded-t-3xl bg-[#121212] bg-opacity-80 md:hidden">
      <Navigation />
    </footer>
  );
};

export default Footer;
