import React from 'react'
import { useNavigate } from 'react-router-dom'
const TradeHero = () => {
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate('/additem');
  };
  return (
    <div><div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg">
    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none text-yellow">
               Explorez les dernières annonces de la communauté.
            <br className="hidden md:block my-6" />
            {' '}
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400 mt-12" />
              <span className="relative inline-block text-deep-purple-accent-400 mt-6">
              </span>
            </span>
          </h2>

        </div>
        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 cursor-pointer hover:shadow-lg hover:shadow-green">
            <div className="h-full p-5 border border-l-0 rounded-r "  onClick={handleAddItem}>
              <h6 className="mb-2 font-semibold leading-5">
Créer une annonce               </h6>
              <p className="text-sm text-gray-900">
                Définissez la catégorie, le type et la contrepartie que vous souhaiteriez recevoir.
              </p>
            </div>
          </div>
          <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 cursor-pointer hover:shadow-lg hover:shadow-green">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
Mettre en avant vos annonces              </h6>
              <p className="text-sm text-gray-900">
                Découvrez nos options payantes pour mettre en avant vos annonces auprès des autres utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
          src="../public/register.jpg"
          alt=""
        />
      </div>
    </div>
  </div></div>
  )
}

export default TradeHero