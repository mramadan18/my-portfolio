import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const NavItem: React.FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span onClick={() => setActiveItem(name)} className="hover:text-green">
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("About");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between items-center py-3 px-5 my-3">
      <span className="font-bold text-xl border-b-4 border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-5">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
