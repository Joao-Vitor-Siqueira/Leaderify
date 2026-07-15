import { NavLink } from 'react-router-dom'

export default function NavItem({ text, path, onClick }) {
  return (
    <li className="w-full border-b border-mauve-300">
      <NavLink
        onClick={onClick} 
        to={path} 
        className= {({isActive}) => 
           isActive ? 
           "block w-full py-2 px-3 text-2xl bg-mauve-300 transition-colors" : 
           "block w-full py-2 px-3 text-2xl hover:bg-mauve-300 transition-colors" 
        }
      >
        {text}
      </NavLink>
    </li>
  );
}