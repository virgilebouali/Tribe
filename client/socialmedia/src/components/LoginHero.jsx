import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Button } from "@material-tailwind/react";

const LoginHero = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegisterClick = () => {
    navigate('/register');
  }

  const onSubmitLogin = async (data) => {
    console.log("Form data:", data);

    try {
      const response = await axios.post('http://localhost:3000/login', data);

      if (response.data.success) {
        toast.success('Connexion réussie');
        localStorage.setItem('token', response.data.token);
        navigate('/profile')
        console.log('Connexion réussie:', response.data.user);
        // Rediriger ou effectuer d'autres actions côté client
      } else {
        toast.error("Email ou Mot de passe incorrect");
        console.error('Erreur de connexion:', response.data.error);
      }
    } catch (error) {
      toast.error("Email ou mot de passe incorrect");
      console.error('Erreur lors de la connexion:', error);
    }

    
  };


  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
        navigate('/profile') ;
        console.log('Token présent:', token);
    }
}, []);

  return (
    <section className="p-4 dark:bg-white-800 dark:text-gray-100 xl:ml-6 flex items-center justify-center mb-12 xl:mt-12 xl:ml-36">
      <div className="container flex gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 -ml-4 xl:-ml-12">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-white-900">
          <h1 className="text-5xl font-bold dark:text-yellow mb-6 text-center">Vous nous aviez manqué.</h1>
          <p className="block dark:text-black text-xl text-left mb-12 xl:ml-16">
            Ne manquez pas les dernières actualités et propositions de troc faites par nos membres ! <br></br> Identifiez-vous pour rester au courant de ce qui se passe dans la communauté.
          </p>
          <form novalidate="" onSubmit={handleSubmit(onSubmitLogin)} className="self-stretch space-y-3 w-auto text-black">
            <div>
              <label htmlFor="name" className="text-sm sr-only">E-mail</label>
              <input {...register("email")} id="name" type="text" placeholder="     Johndoe@mail.com" className="xl:w-96 rounded-md border border-gray-700 h-16 text-black text-center" />
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm sr-only text-black">Mot de passe</label>
              <input {...register("password")} id="lastname" type="password" placeholder="      *******" className="xl:w-96 rounded-md border border-gray-700 h-16 text-black text-center" />
            </div>

            <button type="submit" className="w-32 py-2 font-semibold rounded dark:bg-green dark:text-white hover:bg-yellow">S'identifier</button>
            <div className="flex flex-col items-center gap-4">
      <Button
        size="xl"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 p-6 shadow-md"
      >
        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
Se connecter avec Google      </Button>
      <Button
        size="lg"
        variant="gradient"
        color="light-blue"
        className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
      >
        Sign in with Twitter
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
          <img src="https://docs.material-tailwind.com/icons/twitter.svg" alt="metamask" className="h-6 w-6" />
        </span>
      </Button>
    </div>
            <p className="font-semibold dark:text-black">Vous êtes nouveau ?<a onClick={handleRegisterClick} className="hover:text-yellow text-green cursor-pointer">  S'inscrire</a></p>
          </form>
        </div>

        {/* Condition pour afficher l'image seulement sur les écrans larges */}
        <div className="hidden xl:flex w-1/2">
          <img src="../public/register.jpg" alt="" className="object-cover w-full h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
