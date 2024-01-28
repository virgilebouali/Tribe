import React from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@material-tailwind/react";

import { toast } from "react-hot-toast";
const RegisterHero = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    try {
      const response = await axios.post('http://localhost:3000/register', data);

      if (response.data.success) {
        toast.success('Inscription réussie')
        console.log('Inscription réussie:', response.data.user);
        // Rediriger ou effectuer d'autres actions côté client
      } else {
        toast.error("Nom d'utilisateur ou e-mail déjà utilisé")
        console.error('Erreur d\'inscription:', response.data.error);
      }
    } catch (error) {
      toast.error("Email ou mot de passe incorrect");
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  return (
    <section className="p-4 dark:bg-white-800 flex items-center justify-center mb-12 xl:ml-36">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 -ml-4 xl:-ml-12">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-white-900">
          <h1 className="text-5xl font-bold dark:text-yellow mb-6 text-left">Inscription</h1>
          <span className="block font-bold dark:text-black text-2xl text-left mb-12">
            Rejoignez la plus grande communauté <span className="text-green">éco-responsable</span> gratuitement.
          </span>


          <form className="bg-white shadow-md container flex flex-col mx-auto space-y-6" action="http://localhost:3000/register" method="POST "onSubmit={handleSubmit(onSubmit)}>
  <input className="bg-white shadow-md rounded px-8 pt-6 pb-8  border border-black" type="text" placeholder="Nom d'utilisateur"  {...register("username", { required: true, max: 12, min: 5 })} />
  <input className="bg-white shadow-md rounded px-8 pt-6 pb-8  border border-black" type="text" placeholder="Email" {...register("email", { required: true, max: 30, min: 5, pattern: /^\S+@\S+$/i })} />
  <input className="bg-white shadow-md rounded px-8 pt-6 pb-8  border border-black" type="password" placeholder="Mot de Passe" {...register("password", { required: true, max: 12, min: 8 })} />
  <input className="bg-green shadow-md rounded px-8 pt-6 pb-8 mb-4 cursor-pointer font-bold text-white spacin" type="submit" value="S'inscrire" />
 
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

</form>



        </div>
        {/* Condition pour afficher l'image seulement sur les écrans larges */}
        <div className="hidden xl:flex">
        <img src="../public/register.jpg" alt="" className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />
        <img src="../public/register2.jpg" alt="" className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />

        <img src="../public/register3.jpg" alt="" className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />


        </div>
      </div>
    </section>
  );
};

export default RegisterHero;
