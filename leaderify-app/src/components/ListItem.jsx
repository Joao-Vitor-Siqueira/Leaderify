import { NavLink } from 'react-router-dom'

export default function ListItem({bgColor}){
    return (
        <>
            <NavLink to= "/leaderboardDetails">
                <li className={`text-white p-2 w-full text-center border border-mauve-500 
                    ${bgColor ? bgColor : ""} hover:bg-mauve-500`}>
                    Details
                </li>
            </NavLink>
        </>
    );
}