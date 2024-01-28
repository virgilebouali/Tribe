import React from 'react'
import { IoBuild } from "react-icons/io5";
import { MdCleaningServices, MdOutlineSportsTennis } from "react-icons/md";
import { FaHome, FaTshirt, FaQuestionCircle, FaGamepad } from "react-icons/fa";

const TradeCategory = () => {
  return (
<div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-green"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <MdCleaningServices />

              </div>
              <p className="mb-2 font-bold text-black">Services</p>
              <p className="text-sm leading-5 text-gray-900">
                Proposez et demandez des services comme de l'aide a la personne, des cours de piano ou des cours de yoga etc..
              
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <FaHome />

              </div>
              <p className="mb-2 font-bold text-black">Maison & Jardin</p>
              <p className="text-sm leading-5 text-gray-900">
                Vous avez du mobilier dont vous ne vous servez plus mais vous cherchez quelque chose de votre côté ?
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <FaTshirt />

              </div>
              <p className="mb-2 font-bold text-black">Mode</p>
              <p className="text-sm leading-5 text-gray-900">
                On à tous des vetements que nous ne portons plus, pourquoi pas les échanger ?
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="mb-2 font-bold text-black">Electronique</p>
              <p className="text-sm leading-5 text-gray-900">
                Donnez une seconde vie à cette machine en l'échangeant à  un autre utilisateur.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <MdOutlineSportsTennis />

              </div>
              <p className="mb-2 font-bold text-black">Sports</p>
              <p className="text-sm leading-5 text-gray-900">
                Vous êtes un super prof de sport ? Coach sportif ? Pourquoi pas échanger vos services avec quelqu'un d'autre.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <FaQuestionCircle />

              </div>
              <p className="mb-2 font-bold text-black">Divers</p>
              <p className="text-sm leading-5 text-gray-900">
                La caverne d'Alibaba, on y trouve tout et n'importe quoi. Un bilboquet en forme de perroquet ?
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <IoBuild />
              </div>
              <p className="mb-2 font-bold text-black">Métiers</p>
              <p className="text-sm leading-5 text-gray-900">
                Pourquoi pas échanger vos talents en coiffure contre un service de plomberie. Gagnant-Gagnant ! 
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <FaGamepad />

              </div>
              <p className="mb-2 font-bold text-black">Loisirs</p>
              <p className="text-sm leading-5 text-gray-900">
                Vous possédez des activités à partager dans votre jardin ? Partagez les avec notre communauté vous pourriez vous faire des amis ! 
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100 " />
          </div>
        </div>
      </div>
    </div>  )
}

export default TradeCategory