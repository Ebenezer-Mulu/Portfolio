import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ebenezer M<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*dsktop Nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
      </div>

      {/* mobile nav */}

      <div className="xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
