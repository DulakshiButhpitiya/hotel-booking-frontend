import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientRooms = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesListLoaded, setCategoriesListLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!categoriesListLoaded) {
      axios
        .get("http://localhost:5000/api/category")
        .then((res) => {
          console.log(res.data.categories);
          setCategories(res.data.categories);
          setCategoriesListLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoriesListLoaded]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center space-y-10 bg-black bg-opacity-50 py-10">
      <div className="min-h-screen p- mt-20 ">
        <h1
          className="text-center text-4xl font-semibold text-purple-700 tracking-wide mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          CLIENT ROOMS
        </h1>

        {categories.length === 0 ? (
          <p className="text-center text-gray-600">No rooms available.</p>
        ) : (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 p-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer"
                onClick={() => navigate(`/category/${category._id}`)}
              >
                {category.img ? (
                  <img
                    src={`http://localhost:5000/api/gallery/uploads/${category.img}`}
                    alt="Room"
                    className="w-full h-48 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-md">
                    <span className="text-gray-600">No Image Available</span>
                  </div>
                )}

                <h2 className="text-xl font-semibold mt-2">{category.name}</h2>
                <p className="text-gray-600 font-semibold">Rs. {category.price}</p>
                <p className="text-gray-500 text-sm mt-1">{category.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientRooms;
