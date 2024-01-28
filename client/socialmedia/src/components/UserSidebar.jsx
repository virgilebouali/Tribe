import { useNavigate, useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import { toast } from 'react-hot-toast';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { IoMdPaper } from "react-icons/io";


import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
const userSidebar = () => {

  const [data, setData] = useState([]);

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


  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  const handleProfilClick = () => {
    navigate('/profile');
  };
  const handleTradeClick = () => {
    navigate('/trade');
  };
  const handleFriendsClick = () => {
    navigate('/friends');
  };
  const handleSettingsClick = () => {
    navigate('/settings');
  };
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    toast.success('Déconnexion réussie');
    navigate('/');
  };
  const handleInboxClick = () => {
    navigate('/inbox');
  };



  return (
<Card className="h-screen w-full max-w-[20rem] p-4  mx-12 mt-6 border-r border-solid border-gray-300 fixed">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
        <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2 -ml-12" onClick={handleHomeClick}>
          <img src="../public/logos.png" className="w-auto h-56 -m-16" alt="Logo" />
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-green">Tribe</h1>
        </Link>
        </Typography>
      </div>
      <List className=" p-4">
        <ListItem className="p-8 hover:shadow-md hover:text-green text-xl font-semibold first-letter:uppercase text-yellow" onClick={handleProfilClick}>
          <ListItemPrefix className="first-letter:uppercase">
            <PresentationChartBarIcon className="h-5 w-5 mr-4 first-letter:uppercase" />
          </ListItemPrefix>
         <div className="first-letter:uppercase">{data.username}</div> 
        </ListItem>
        <ListItem className="p-8 hover:shadow-md hover:text-green" onClick={handleTradeClick}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5 mr-4" />
          </ListItemPrefix>
          Troc
        </ListItem>
        <ListItem className="p-8 hover:shadow-md hover:text-green" onClick={handleTradeClick}>
          <ListItemPrefix>
            <IoMdPaper 
 className="h-5 w-5 mr-4" />
          </ListItemPrefix>
          Communauté
        </ListItem>
        <ListItem className="p-8 hover:shadow-md hover:text-green"onClick={handleInboxClick}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 mr-4" />
          </ListItemPrefix>
          Messages
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full ml-4" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="p-8 hover:shadow-md hover:text-green" onClick={handleFriendsClick}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 mr-4" />
          </ListItemPrefix>
          Amis
        </ListItem>
        <ListItem className="p-8 hover:shadow-md hover:text-green" onClick={handleSettingsClick}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5 mr-4" />
          </ListItemPrefix>
          Paramètres
        </ListItem>
        <ListItem className="p-8 hover:shadow-md hover:text-yellow" onClick={handleLogoutClick}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 mr-4  " />
          </ListItemPrefix>
Déconnexion        </ListItem>
      </List>
    </Card>  )
}

export default userSidebar