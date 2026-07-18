import ProfileButton from "../buttons/ProfileButton";
import Divider from "../Divider"
import NavItem from "./NavItem";
import IconButton from "../buttons/IconButton";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(prev => !prev)}

  return (
    <nav
      className={`shrink-0 z-50 flex flex-col fixed bottom-0 left-0 w-screen bg-mauve-100 border-t border-mauve-200 font-sans text-mauve-800 
        transition-all duration-300 ease-in-out ${isOpen ? "min-h-48" : "min-h-12"} 
        ${isOpen ? "h-4/12" : "h-1/12"} 
        `}
    >
      <div className = {`flex justify-between w-full items-center pr-2 ${isOpen ? "h-1/4" : "h-full"} min-h-1/4`}>
        <IconButton onClick={toggle} iconName={"hamburguer"} className={"h-full w-12"}/>
        <ProfileButton className={"w-10 aspect-square"}/>
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
