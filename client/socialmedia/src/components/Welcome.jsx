import React from 'react';

const Welcome = () => {
  return (
    <section className="p-4 dark:bg-white-800 dark:text-gray-100 xl:ml-36  ">
      <div className="container grid gap-6 mx-auto text-left lg:grid-cols-2 xl:grid-cols-5 -ml-4">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-white-900">
          <h1 className="text-5xl font-bold dark:text-black mb-6 text-left">Le réseau communautaire <span className="text-green">écologique</span> et responsable dédié au <span className="text-green">troc</span></h1>
          <span className="block mb-2 font-bold dark:text-yellow text-2xl text-left">Rejoignez nous dès maintenant et faites partie du changement</span>

          <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl text-left text-black">
            Découvrez des pratiques durables, partagez des astuces respectueuses de l'environnement, et contribuez à la création d'une planète plus saine et plus verte en proposant du troc entre particulier !
          </p>
          <form novalidate="" action="" className="self-stretch space-y-3">
            <div>
              <label htmlFor="name" className="text-sm sr-only">E-mail</label>
              <input id="name" type="text" placeholder="      Johndoe@mail.com" className="w-full rounded-md border border-gray-700 h-16" />
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm sr-only text-black">Mot de passe</label>
              <input id="lastname" type="text" placeholder="      ********" className="w-full rounded-md border border-gray-700 h-16" />
            </div>
            <button type="button" className="w-full py-2 font-semibold rounded dark:bg-green dark:text-white hover:bg-yellow">S'identifier</button>
          </form>
        </div>
        {/* Condition pour afficher l'image seulement sur les écrans larges */}
        <div className="hidden xl:flex">
          <img src="../public/planete.jpg" alt="" className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />
		  <img src="../public/partage.jpg" alt="" className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />
          <img src="../public/epicerie.jpg" alt="" className="object-cover w-auto h-5/6 rounded-md dark:bg-gray-500 mt-12 ml-12" />

        </div>
      </div>
    </section>
  );
};

export default Welcome;
