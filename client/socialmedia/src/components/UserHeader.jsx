import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UserHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    // Mettre à jour l'état de connexion en fonction du token dans le local storage
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location.pathname]);


 


  return (
    <header className="p-4 bg-white-800 text-black-900">
      <div className="container flex justify-between h-16 mx-auto xl:ml-56">
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link to="/community" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-green dark:border-green hover:text-gray-600 hover:border-gray-300">
              Communauté
            </Link>
          </li>
          <li className="flex">
            <Link to="/exchanges" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-gray-600 hover:border-gray-300">
              Trocs
            </Link>
          </li>
          <li className="flex">
            <Link to="/articles" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-gray-600 hover:border-gray-300">
              Articles
            </Link>
          </li>
          <li className="flex">
            <Link to="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-gray-600 hover:border-gray-300">
              Qui sommes-nous
            </Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {!isLoggedIn && (
            <>
             
            </>
          )}
          {isLoggedIn && (
             <>
     
            </>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default UserHeader;
