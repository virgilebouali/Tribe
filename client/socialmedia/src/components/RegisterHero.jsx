import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";

const RegisterHero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("username", e.target.username.value);
      formData.append("email", e.target.email.value);
      formData.append("password", e.target.password.value);
      formData.append("image", e.target.image.files[0]);
  
      const response = await axios.post("http://localhost:3000/register", formData);
      console.log(response.data);
      console.log(formData)
      // Réinitialisation de la prévisualisation de l'image
      toast.success("Inscription réussie !");
      navigate("/profile");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      toast.error("Oups ! Vérifiez le formulaire.");
    }
  };
  return (
    <section className="p-4 dark:bg-white-800 flex items-center justify-center mb-12 xl:ml-36">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 -ml-4 xl:-ml-12">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-white-900">
          <h1 className="text-5xl font-bold dark:text-yellow mb-6 text-left">
            Inscription
          </h1>
          <span className="block font-bold dark:text-black text-2xl text-left mb-12">
            Rejoignez la plus grande communauté{" "}
            <span className="text-green">éco-responsable</span> gratuitement.
          </span>

          <form
            className="bg-white shadow-md container flex flex-col mx-auto space-y-6 text-black"
            action="http://localhost:3000/register"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <input
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 border border-black"
              {...register("username", { required: true, max: 12, min: 5 })}
              type="text"
              placeholder="Nom d'utilisateur"
            />
            <input
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 border border-black"
              {...register("email", {
                required: true,
                max: 30,
                min: 5,
                pattern: /^\S+@\S+$/i,
              })}
              type="text"
              placeholder="Email"
            />
            <input
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 border border-black"
              {...register("password", { required: true, max: 12, min: 8 })}
              type="password"
              placeholder="Mot de Passe"
            />
            <div className="mb-3">
              <label
                name="image"
                className="mb-2 inline-block text-black"
              >
                Choisissez une photo de profil
              </label>
              <input
  className="relative m-0 block w-full *:h-fit min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-900 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-900 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-400 dark:file:bg-neutral-700 dark:file:text-neutral-400 dark:focus:border-primary"
  type="file"
  id="formFile"
  name="image"  // Assurez-vous que le nom du champ est "image"
  encType="multipart/form-data"
/>
            </div>

            <input
              className="bg-green shadow-md rounded px-8 pt-6 pb-8 mb-4 cursor-pointer font-bold text-white spacing"
              type="submit"
              value="S'inscrire"
            />

            <div className="flex flex-col items-center gap-4">
              <Button
                size="xl"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3 p-6 shadow-md"
              >
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                Se connecter avec Google
              </Button>
              <Button
                size="lg"
                variant="gradient"
                color="light-blue"
                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
              >
                Sign in with Twitter
                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                  <img
                    src="https://docs.material-tailwind.com/icons/twitter.svg"
                    alt="metamask"
                    className="h-6 w-6"
                  />
                </span>
              </Button>
            </div>
          </form>
        </div>
        {/* Condition pour afficher l'image seulement sur les écrans larges */}
        <div className="hidden xl:flex">
          <img
            src="../public/register.jpg"
            alt=""
            className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12"
          />
          <img
            src="../public/register2.jpg"
            alt=""
            className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12"
          />

          <img
            src="../public/register3.jpg"
            alt=""
            className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12"
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterHero;
