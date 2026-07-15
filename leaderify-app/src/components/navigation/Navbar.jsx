import ProfileButton from "../buttons/ProfileButton";
import Divider from "../Divider"
import NavItem from "./NavItem";
import HamburgerButton from "../buttons/HamburgerButton";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(prev => !prev)}

  return (
    <nav
      className={`flex flex-col fixed bottom-0 left-0 w-screen bg-mauve-100 border-t border-mauve-200 p-4 font-sans text-mauve-800 
        transition-all duration-300 ease-in-out
        ${isOpen ? "h-1/3" : "h-1/12"} 
        `}
    >
      <div className = {`flex justify-between w-full  ${isOpen ? "" : "items-center h-full"}`}>
        <HamburgerButton onClick={toggle} />
        <ProfileButton/>
      </div>

      <div className= {`${isOpen ? "" : "hidden"}`}><Divider/></div>  

      <ul className= {`${isOpen ? "grow flex flex-col overflow-y-auto" : "hidden"}`}>
        <NavItem text={"Home"} path={"/"} onClick={toggle}/>
        <NavItem text={"Login"} path={"/login"} onClick={toggle}/> 
        <NavItem text={"Leaderboards"} path={"/leaderboards"} onClick={toggle}/>   
      </ul>
      
    </nav>
  );
}
