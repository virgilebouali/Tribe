import React from 'react'

const Features = () => {
  return (
<section className="p-4 lg:p-8 dark:bg-white-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-green">
			<img src="./public/commu.jpg" alt="" className="h-80 dark:bg-white-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-white-800">
				<span className="text-xl  font-bold uppercase dark:text-black mb-6">Rejoignez notre communauté</span>
				<h3 className="text-4xl font-bold text-white">Un réseau dédié a l'écologie et à l'entraide</h3>
				<p className="my-6 text-md dark:text-white">Découvrez, partagez et grandissez avec des astuces et conseils sur l'environnement au sein d'une communauté dédiée à l'écologie. Ensemble, construisons un réseau engagé où l'échange d'idées et d'expériences favorise une prise de conscience collective et contribue à la préservation de notre planète.</p>
                <button type="button" className="px-8 py-3 w-fit font-semibold rounded-full dark:bg-white dark:text-gray-800 hover:bg-yellow hover:text-white">S'inscrire</button>		
                	</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-white">
			<img src="./public/troc.jpg" alt="" className="h-80 dark:bg-white-800 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-white-800">
				<span className="text-xl  font-bold uppercase dark:text-black mb-6">Priviliger l'échange</span>
				<h3 className="text-4xl font-bold text-green">Explorez l'univers du troc</h3>
				<p className="my-6 dark:text-gray-900">Echanger des biens, partager des compétences et créer des connexions authentiques.<br></br> Participez à cette expérience collaborative, donnez une seconde vie à vos objets, et contribuez à la construction d'une communauté engagée dans la réduction de l'impact environnemental tout en créant des relations basées sur le partage et l'entraide.</p>
                <button type="button" className="px-8 py-3 w-fit font-semibold rounded-full dark:bg-green dark:text-white hover:bg-yellow hover:text-white">Troquer</button>			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="./public/article.jpg" alt="" className="h-80 dark:bg-white-800 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-green">
				<span className="text-xl font-bold uppercase dark:text-black mb-6">Partageons nos connaissances</span>
				<h3 className="text-4xl font-bold text-white">Découvrez les articles de la communauté</h3>
				<p className="my-6 dark:text-white">Explorez une diversité d'articles inspirants : astuces éco-friendly, idées pratiques, et récits captivants. <br></br>Plongez dans une source d'informations enrichissantes pour nourrir votre intérêt pour l'écologie et élargir nos échanges ensemble.</p>
                <button type="button" className="px-8 py-3 font-semibold w-fit rounded-full dark:bg-white dark:text-gray-800 hover:bg-yellow hover:text-white"> Découvrir</button>			</div>
		</div>
	</div>
</section>  )
}

export default Features