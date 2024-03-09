import Image from "next/image";
import { useTheme } from "next-themes";
// images
import photo from "@/public/images/my_photo.jpg";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  const handleMailBtn = () => open(`mailto:m.ramadan181199@gmail.com`);
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src={photo}
        alt="Mahmoud Ramadan"
        priority
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-green">Mahmoud</span> Ramadan
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
        Front End Developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex justify-center items-center"
        href="/Mahmoud Cv.pdf"
        download="Mahmoud Frontend CV"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around items-center my-5 text-green w-9/12 md:w-full mx-auto">
        <a href="https://github.com/mramadan18" target="__blank">
          <AiFillGithub className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/m-ramadan18/" target="__blank">
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01a83429ffcd10495b"
          target="__blank"
        >
          <BiLogoUpwork className="w-6 h-6 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 mx-[-1rem]">
        <div className="flex justify-center items-center space-x-2">
          <GoLocation />
          <span>Cairo, Egypt</span>
        </div>
        <a href="mailto:m.ramadan181199@gmail.com" target="__blank" className="my-2 block hover:underline">m.ramadan181199@gmail.com</a>
        <a href="https://wa.me/201100594017" target="__blank" className="hover:underline block">Message me on WhatsApp</a>
        <div className="my-2">
          <a href="tel:+201100594017" target="__blank" className="hover:underline">+201100594017</a>
          <span> / </span>
          <a href="tel:+201551887408" target="__blank" className="hover:underline">+201551887408</a>
        </div>
      </div>
      {/* Email Button  */}
      <button
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={handleMailBtn}
      >
        Email me
      </button>
      <button
        onClick={handleChangeTheme}
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
      >
        Light UI
      </button>
    </div>
  );
};

export default Sidebar;
