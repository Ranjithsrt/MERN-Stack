import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   const [query, setQuery] = useState('');
   const navigate = useNavigate();

   const handleSearch = async(e) => {
      e.preventDefault()
      if(!query.trim() === '') return ;
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
   };

  return (
    <header className='bg-emerald-900 text-white p-4 shadow'>
      <nav className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 '>
         <div className='flex flex-col md:flex-row gap-4 items-center
         justify-center'>
            <Link to="/" className='text-3xl font-bold'> MealDB</Link>
            <Link to="/" className='text-1xl '> Categories</Link>
            <Link to="/favorites" className='text-1xl '> Favorites</Link>
            <Link ></Link>
         </div>
         <form  className='flex gap-2' onSubmit={handleSearch}>
            <input type="text" placeholder="Search for meals"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='px-4 py-2 rounded bg-white outline-none text-gray-900 w-48 sm-w-64 md:w-auto' 
             />
            <button type="submit" className='px-4 mx-3 py-2 rounded bg-white text-gray-900 hover:bg-gray-100'>Search</button>
         </form>
      </nav>
     </header>
  )
}

export default Header