import React, { useState} from 'react'

const TradePlace = () => {

  const [categoryFilterType, setCategoryFilterType] = useState(''); // Add more state variables if needed
  const handleFilterType = (event) => {
    setCategoryFilterType(event.target.value); // Update state based on the selected value
    // Add similar handlers for other filters if needed
  };

  const handleFilterChange = (event) => {
    setCategoryFilter(event.target.value); // Update state based on the selected value
    // Add similar handlers for other filters if needed
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
  <div className="my-6">FILTRES </div>
  <div className="flex justify-between">
  <div className="flex flex-wrap justify-center mb-2 space-x-2">
          {/* Dropdown for category filter */}
          <select
            className="py-2 px-4 border border-gray-300 rounded-md"
            value={handleFilterType}
            onChange={handleFilterChange}
          >
            <option value="">Toutes les catégories</option>
            <option value="category1">Mode</option>
            <option value="category2">Loisirs</option>
            <option value="category2">Électronique</option>
            <option value="category2">Services</option>
            <option value="category2">Mobilier</option>
            <option value="category2">Maison et Jardin</option>
            <option value="category2">Divers</option>
            {/* Add more options based on your categories */}
          </select>
          {/* Add more dropdowns for other filters if needed */}
        </div>
        <div className="flex flex-wrap justify-center mb-2 space-x-2">
          {/* Dropdown for category filter */}
          <select
            className="py-2 px-4 border border-gray-300 rounded-md"
            value={handleFilterType}
            onChange={handleFilterChange}
          >
            <option value="">Toutes les catégories</option>
            <option value="category1">Catégorie 1</option>
            <option value="category2">Catégorie 2</option>
            {/* Add more options based on your categories */}
          </select>
          {/* Add more dropdowns for other filters if needed */}
        </div>
        <div className="flex flex-wrap justify-center mb-2 space-x-2">
          {/* Dropdown for category filter */}
          <select
            className="py-2 px-4 border border-gray-300 rounded-md"
            value={handleFilterType}
            onChange={handleFilterChange}
          >
            <option value="">Toutes les catégories</option>
            <option value="category1">Catégorie 1</option>
            <option value="category2">Catégorie 2</option>
            {/* Add more options based on your categories */}
          </select>
          {/* Add more dropdowns for other filters if needed */}
        </div>
        </div>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  The doctor said
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                <p className="text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Baseball ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny
                  Bike epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  The doctor said
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                <p className="text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Baseball ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny
                  Bike epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
          </div>
        </a>
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