import React, { useState, useEffect } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";

const TradePlace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const allItems = await axios.get(`http://localhost:3000/items`);
        setItems(allItems.data);
        console.log('items:', allItems);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    getItems(); // Appel de la fonction getItems ici
  }, []);

  const deleteItem = async (itemId, event) => {
    try {
      const response = await axios.delete(`http://localhost:3000/items/${itemId}`);
      console.log(response.data.message);
    
      // Mettez à jour la liste des éléments après la suppression
      const updatedItems = items.filter(item => item._id !== itemId);
      setItems(updatedItems);
      event.preventDefault();

    } catch (error) {
      console.error("Erreur lors de la suppression de l'élément :", error);
    }
  };



  return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Les dernieres annonces
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Explorer</span>

          </span>{' '}
          et découvrer.
  </h2>


      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
  
      {items.map((item) => (
          <a
            key={item._id} // Assurez-vous d'utiliser une clé unique pour chaque élément
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
        src={`public/${item.image}`}

        className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    {item.title} {/* Utilisez la propriété de l'élément pour définir le titre */}
                  </h6>
                  <p className="text-sm text-gray-900 italic">{item.description}</p>
                  <div className="flex justify-between">
                  <p className="text-lg mt-2 text-yellow font-bold bg">{item.category}</p> {/* Utilisez la propriété de l'élément pour définir la description */}

                  <p className="text-lg mt-2 text-green font-bold bg first-letter:uppercase"><span className="font-normal text-black">Par </span>{item.owner.username}</p> 
                  </div>{/* Utilisez la propriété de l'élément pour définir la description */}
                </div>
              </div>
              <button className="" onClick={() => deleteItem(item._id)}>DELETE</button>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-green transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
Voir plus
        </a>
      </div>
    </div>  )
}

export default TradePlace