import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Button } from "@material-tailwind/react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { Textarea } from "@material-tailwind/react";

const ProfileHero = () => {
  const [data, setData] = useState([]);
  const [showTextarea, setShowTextarea] = useState(false); // Nouvel état pour montrer/cacher le textarea
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUserData = async () => {
      if (token) {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const response = await axios.get(`http://localhost:3000/user/${userId}`, config);
          setData(response.data);  // Mise à jour de l'état avec la nouvelle valeur

          // Vous pouvez maintenant accéder à la nouvelle valeur de data ici
          console.log(data);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des données de l'utilisateur :",
            error
          );
        }
      }
    };

    getUserData();
  }, [token]);

  return (
	<>
    <div className=" p-8 sm:flex sm:space-x-6 bg-white dark:text-gray-900 my-12 shadow-md w-auto mr-12 border justify-stretch">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src="https://source.unsplash.com/500x500/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
		<Button variant="outfilled" className="rounded-full text-black text-sm">
		<FaCamera  className="text-black hover:text-yellow"/>
      </Button>
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold first-letter:uppercase">{data.username}</h2>
			<span className=" dark:text-gray-800 text-xl">Points de troc : {data.points}</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="dark:text-gray-900">{data.email}</span>
			</span>
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="dark:text-gray-900">+25 381 77 983</span>
			</span>
		</div>
		<div className="max-w-2xl mx-auto">
{/* Utilisation de la condition ternaire pour montrer ou cacher le textarea */}
{showTextarea ? (
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 text-sm w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Je suis..."
            ></textarea>
          ) : null}

<Button
              variant="outfilled"
              className="rounded-full text-black text-sm flex mr-4 hover:text-green"
              onClick={() => setShowTextarea(!showTextarea)}
            >
				Modifier
              <FaPencilAlt className="text-black ml-4 hover:text-green" />
            </Button>
	
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
	</div>
	
</div>

<div className="flex">
	<div className="max-w-xs rounded-md shadow-xl bg-white text-black ">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracki text-yellow">Donec lectus leo</h2>
			<p className="text-black">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md border-solid border-2 dark:bg-white shadow-2xl dark:text-gray-900">Modifier</button>
	</div>
</div>
	</div>
</>
  );
};

export default ProfileHero;
