import ProfileButton from "../buttons/ProfileButton";
import Divider from "../Divider";
import NavItem from "./NavItem";
import IconButton from "../buttons/IconButton";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const navDesktop = `lg:border-r lg:border-t-0 lg:px-0 lg:flex-row lg:h-full lg:relative ${isOpen ? "lg:w-[21%]" : "lg:w-[3%] lg:min-w-10"}`;
  const hambContainerDesktop = `lg:flex-col lg:h-full lg:order-2 lg:min-w-10 ${isOpen ? "lg:w-[15%]" : "lg:w-full"} lg:pr-0 lg:border-l lg:border-mauve-300`;

  return (
    <nav
      className={`px-2 shrink-0 z-50 flex flex-col fixed bottom-0 left-0 w-screen bg-mauve-100 border-t border-mauve-200 font-sans text-mauve-800 
        transition-all duration-300 ease-in-out ${isOpen ? "min-h-48" : "min-h-12"} ${isOpen ? "h-4/12" : "h-1/12"} ${navDesktop}`}
    >
      {/* Hamburguer button and Profile container */}
      <div
        className={`flex justify-between w-full items-center pr-2 ${isOpen ? "h-1/4" : "h-full"} min-h-1/4 ${hambContainerDesktop}`}
      >
        <IconButton
          onClick={toggle}
          iconName={"hamburguer"}
          sizing={`h-full lg:h-16 w-11 lg:w-full`}
        />
        <ProfileButton className={"w-10 aspect-square lg:hidden"} />
        <IconButton
          onClick={() => {}}
          tooltip={"Settings"}
          iconName={"settings"}
          sizing={`hidden h-16 w-full lg:inline-block fixed bottom-0 border-t border-mauve-300`}
          fill={true}
          iconColor={"text-mauve-600"}
        />
      </div>

      {/* Open navbar */}

      <div className={`${isOpen ? "" : "hidden"} lg:hidden`}>
        <Divider />
      </div>

      <ul
        className={`${isOpen ? "grow flex flex-col overflow-y-auto" : "hidden"} lg:order-1`}
      >
        <div
          className={`text-lg text-center p-4 bg-mauve-400 hidden lg:block h-16`}
        >
          Leaderify
        </div>

        <NavItem text={"Home"} path={"/"} onClick={toggle} />
        <NavItem
          text={"Leaderboards"}
          path={"/leaderboards"}
          onClick={toggle}
        />

        {/* Desktop profile section */}
        <div className="hidden lg:flex items-center justify-between max-[1600px]:justify-start max-[1350px]:gap-1 gap-2 absolute bottom-0 pl-2 w-full max-w-[85%] h-16 border-t border-mauve-300">
          <div className="flex gap-3 items-center">
            <ProfileButton className={"w-10 max-[1350px]:w-8 aspect-square"} />
            <p className="text-lg max-[1350px]:text-base max-[1250px]:hidden">
              Username
            </p>
          </div>
          <IconButton
            onClick={() => {}}
            tooltip={"Friends"}
            iconName={"friends"}
            sizing={`hidden h-16 w-11 lg:inline-block`}
            fill={true}
            iconColor={"text-mauve-600"}
          />
        </div>
      </ul>
    </nav>
  );
}
