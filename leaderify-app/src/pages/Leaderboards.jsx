import { NavLink } from 'react-router-dom'
import SearchBar from '../components/SearchBar';
import ListView from '../components/tables/ListView';

export default function LeaderBoards(){
    return (
        <>
        <div className='w-full h-full flex flex-col items-center pt-8 [@media(max-height:700px)]:pt-4 
            gap-4 [@media(max-height:700px)]:gap-2'>
            <SearchBar/>
            <ListView/>
        </div>
        </>
    );
}