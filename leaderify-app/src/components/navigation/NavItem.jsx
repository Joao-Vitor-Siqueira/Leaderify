import { NavLink } from 'react-router-dom'
import Icon from '../utils/Icon';


export default function NavItem({ text, path, onClick }) {
  return (
    <li className="w-full cursor-pointer border-b border-mauve-300 text-xl lg:text-base flex gap-2 items-center py-2 px-2 hover:bg-mauve-300 transition-colors">
      <Icon name={text[0].toLowerCase() + text.slice(1)} className={" w-6 h-6"} strokeWidth={1}></Icon>
      <NavLink
        onClick={onClick} 
        to={path} 
        className= {({isActive}) => 
           isActive ? 
           "w-full h-full text-mauve-500" : 
           "w-full h-full" 
        }
      >
        {text}
      </NavLink>
    </li>
  );
}