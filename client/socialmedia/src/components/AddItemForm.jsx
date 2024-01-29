import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import mongoose from 'mongoose';
import { toast } from 'react-hot-toast';

const AddItemForm = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;
  const navigate = useNavigate();

  console.log('user :', userId);

  const [formData, setFormData] = useState({
    title: '',
    city: '',
    postalcode: '',
    category: '',
    description: '',
    need: '',
    owner: userId,
    image: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCategoryChange = (category) => {
    setFormData({
      ...formData,
      category,
    });
    console.log(category);
  };

  const handleFileChange = (files) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      const fileObject = new File([selectedFile], selectedFile.name, {
        type: selectedFile.type,
      });

      setFormData({
        ...formData,
        image: fileObject,
      });

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi du formulaire
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };

      const newItem = { ...formData, owner: userId, _id: new mongoose.Types.ObjectId() };

      const response = await axios.post('http://localhost:3000/additem', newItem, { headers });
      console.log(response.data);

      // Envoi de l'image
      const formDataImage = new FormData();
      formDataImage.append('image', formData.image);

      // Réinitialisation du formulaire
      setFormData({
        title: '',
        city: '',
        postalcode: '',
        category: '',
        description: '',
        need: '',
        owner: userId,
        image: '',
      });
      // Réinitialisation de la prévisualisation de l'image
      setImagePreview(null);
      toast.success('Annonce envoyée !')
      navigate('/trade');

    } catch (error) {
      console.error('Error creating item:', error);
      toast.error('Oups ! Vérifiez le formulaire.');
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 shadow-lg">
          <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-6">
              <p className="max-w-xl text-lg mb-16  mt-14">
                Optimisez votre annonce en fournissant des détails complets pour permettre aux utilisateurs de mieux
                comprendre votre offre et d'atteindre un public plus large.{' '}
              </p>

              <div className="flex flex-col m-8 rounded w-full sm:w-80 h-96">
  <div className="h-96 rounded-t dark:bg-white-200"></div>

  <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-white-200">
  {imagePreview ? (
  <img
    src={imagePreview}
    alt="Image Preview"
    className="w-full object-cover h-96 rounded shadow-lg"
  />
) : (
  <div className="w-full h-96 bg-gray-200 rounded shadow-lg">
    <p className="justify-center text-center "></p>
  </div>
)}
  </div>
</div>

              <p className="max-w-xl text-md mb-16 italic mt-24">
                Votre annonce sera vérifiée par un administrateur avant d'être publiée, cela peut prendre entre 10 et 15
                minutes.{' '}
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h2 className="mb-6  font-bold">Commençons par l'essentiel !</h2>
              <form action="" className="space-y-4" onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div>
                  <label className="sr-only border-gray-500" htmlFor="name">
                    Titre
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-500 p-3 text-sm border"
                    placeholder="Titre"
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex gap-16">
                <div>
                  <label className="sr-only border-gray-500" htmlFor="name">
                    Ville
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-500 p-3 text-sm border"
                    placeholder="Ville"
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                  <div>
                    <label className="sr-only border-gray-500" htmlFor="name">
                      Code postal
                    </label>
                    <input
                      className="w-56 rounded-lg border-gray-500 p-3 text-sm border"
                      placeholder="Code Postal"
                      type="number"
                      id="postalcode"
                      value={formData.postalcode}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      required
                    />

                    <label
                      htmlFor="option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white"
                      tabIndex="0"
                      onClick={() => handleCategoryChange('Loisirs')}
                    >
                      <span className="text-sm"> Loisirs </span>
                    </label>
                  </div>

                  <div>
                    <input className="peer sr-only" id="option2" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border-gray-200  cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white border"
                      tabIndex="1"
                      onClick={() => handleCategoryChange('Métiers')}
                    >
                      <span className="text-sm"> Métiers </span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="option3" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option3"
                      className="block w-full rounded-lg border-gray-200  cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white border"
                      tabIndex="2"
                      onClick={() => handleCategoryChange('Mode')}
                    >
                      <span className="text-sm"> Mode </span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="option4" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option4"
                      className="block w-full rounded-lg border-gray-200  cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white border"
                      tabIndex="3"
                      onClick={() => handleCategoryChange('Electronique')}
                    >
                      <span className="text-sm"> Electronique </span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="option5" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option5"
                      className="block w-full rounded-lg border-gray-200  cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white border"
                      tabIndex="4"
                      onClick={() => handleCategoryChange('Divers')}
                    >
                      <span className="text-sm"> Divers </span>
                    </label>
                  </div>

                  <div>
                    <input className="peer sr-only" id="option6" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option6"
                      className="block w-full rounded-lg border border-gray-200 cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white"
                      tabIndex="5"
                      onClick={() => handleCategoryChange('Sport')}
                    >
                      <span className="text-sm"> Sport </span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="option7" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option7"
                      className="block w-full rounded-lg border border-gray-200 cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white"
                      tabIndex="6"
                      onClick={() => handleCategoryChange('Services')}
                    >
                      <span className="text-sm"> Services </span>
                    </label>
                  </div>
                  <div>
                    <input className="peer sr-only" id="option8" type="radio" tabIndex="-1" name="option" />

                    <label
                      htmlFor="option8"
                      className="block w-full rounded-lg border border-gray-200 cursor-pointer p-3 text-gray-600 hover:border-black peer-checked:border-green peer-checked:bg-green peer-checked:text-white"
                      tabIndex="7"
                      onClick={() => handleCategoryChange('Loisirs')}
                    >
                      <span className="text-sm"> Loisirs </span>
                    </label>
                  </div>
                </div>

                {/* ... Autres champs du formulaire ici */}
                <div>
    <label className="sr-only" htmlFor="image">
      Image
    </label>
    <input
      type="file"
      id="image"
      name="image"
      onChange={(e) => handleFileChange(e.target.files)}
    />
  </div>

                <div>
                  <label className="sr-only" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-400 p-3 text-sm border"
                    placeholder="Description"
                    rows="4"
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label className="sr-only" htmlFor="need">
                    Echange
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-400 p-3 text-sm border"
                    placeholder="Ce que vous désirez en échange"
                    rows="4"
                    id="need"
                    value={formData.need}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-green px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Publier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddItemForm;
