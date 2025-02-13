import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState(null);

  const token =localStorage.getItem("token");

  if (token === null) {
    window.location.href = "/login";
  }
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    console.log("Form Data Submitted:"
    );
    const featuresArray = features.split(",");
    console.log(featuresArray)

    const categoryInfo ={
      name:name,
      price:price,
      feature:featuresArray,
        description:description
    }
    axios.post("http://localhost:5000/api/category",categoryInfo,
    {headers: {
      Authorization: `Bearer ${token}`, // FIX: Use backticks instead of single quotes
    }
    }
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      
    })
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Category</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-black"
            placeholder="Enter category name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price (Rs)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-black"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Features</label>
          <input
            type="text"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-black"
            placeholder="Enter features"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-black"
            placeholder="Enter description"
            rows="3"
            required
          ></textarea>
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded mt-1"
            accept="image/*"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
