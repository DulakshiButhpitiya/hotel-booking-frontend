import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateCategory = () => {
    const location=useLocation(); 
    
    if (location.state == null) {
    window.location.href="/src/pages/admin/categories/AdminCategories.jsx"
}
const [name, setName] = useState(location.state?.name || "");
const [price, setPrice] = useState(location.state?.price || "");
const [features, setFeatures] = useState(
    Array.isArray(location.state?.features) ? location.state.features.join(", ") : ""
);
const [description, setDescription] = useState(location.state?.description || "");
    // const [image, setImage] = useState(null);
    const [isloading, setIsLoading] = useState(false);


  
  
    const token =localStorage.getItem("token");
  
    if (token == null) {
      window.location.href = "/login";
    }
    // const handleImageChange = (e) => {
    //   setImage(e.target.files[0]);
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      
  console.log("Form Data Submitted:"
      );
      const featuresArray = features.split(",");
      console.log(featuresArray)
    
    
      const categoryInfo ={
        
        price,
        feature:featuresArray,
          description
      }

      try {
        const res = axios.put(`http://localhost:5000/api/category/${name}`, categoryInfo, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Success:", res.data);
        toast.success("Category updated successfully");
        navigate("/src/pages/admin/categories/AdminCategories.jsx")
    } catch (err) {
        console.error("Error updating category:", err);
    
    } finally {
        setIsLoading(false);
    }
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
              disabled
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
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded  hover:bg-blue-600 flex justify-center"
          >{
            isloading ? <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
            :
            <span>Update category</span>
          }
            
          </button>
        </form>
      </div>
    );
  };
export default UpdateCategory