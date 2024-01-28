import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    // Mettre à jour l'état de connexion en fonction du token dans le local storage
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location.pathname]);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');

  };
  const handleProfile = () => {
    navigate('/profile');

  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Déconnexion réussie');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="p-4 bg-white-800 text-black-900">
      <div className="container flex justify-between h-16 mx-auto">
        <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2 " onClick={handleHomeClick}>
          <img src="../public/logos.png" className="w-auto h-56 -m-16" alt="Logo" />
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-green">Tribe</h1>
        </Link>
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
              <button className="self-center px-8 py-3 rounded hover:bg-gray-100 mr-6" onClick={handleLoginClick}>
                S'identifier
              </button>
              <button className="self-center px-8 py-3 font-semibold rounded dark:bg-green dark:text-white hover:bg-yellow" onClick={handleRegisterClick}>
                S'inscrire
              </button>
            </>
          )}
          {isLoggedIn && (
             <>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-green dark:text-white hover:bg-yellow mr-6" onClick={handleProfile}>
Profil            </button>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-yellow dark:text-white hover:bg-green" onClick={handleLogout}>
              Se déconnecter
            </button>
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

export default Header;
