import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash,FaPlus } from "react-icons/fa"; 
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminCategories = () => {

  const token=localStorage.getItem("token");

  if(token === null){ 
    window.location.href="/login";
  }

 

  const [categories, setCategories] = useState([]);
  const [categorieslistLoaded, setCategorieslistLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!categorieslistLoaded) {
      axios
        .get("http://localhost:5000/api/category")
        .then((res) => {
          console.log(res.data.categories);
          setCategories(res.data.categories);
          setCategorieslistLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categorieslistLoaded],);

  function handleDelete(name) {
  
    axios.delete("http://localhost:5000/api/category/"+name,
    {headers: {
      Authorization: `Bearer ${token}`, // FIX: Use backticks instead of single quotes
    }
    }).then((res) => {

      setCategorieslistLoaded(false);
      toast.success("Category Deleted Successfully");
    })
  }

  function handlePlusClick() {
   navigate("/admin/addCategory");
  }

  return (
    <div className="p-5">
    <h1 className="text-3xl font-bold text-center mb-6">Admin Categories</h1>
    <div className="overflow-x-auto">
      <button className="bg-red-900 w-[60px] h-[60px] border rounded-full text-2xl text-center flex justify-center items-center fixed bottom-10 right-10" 
      onClick={()=>{
        handlePlusClick();
      }}
      >
        <FaPlus color="white"/>
        </button>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Price (Rs)</th>
            <th className="p-3 border">Features</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr key={index} className="text-center hover:bg-gray-100">
                <td className="border p-2">
                  <img
                    src={category.img || "https://via.placeholder.com/100"}
                    alt={category.name}
                    className="w-16 h-16 rounded-md"
                  />
                </td>
                <td className="border p-3">{category.name}</td>
                <td className="border p-3">{category.price}</td>
                <td className="border p-3">{category.features || "N/A"}</td>
                <td className="border p-3">{category.description}</td>
                <td className="border p-3 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleEdit(category._id)}
                  >
                    <FaEdit size={20} />
                  </button>

                  <button
                   onClick={()=>handleDelete(category.name)}
                    className="text-red-600 hover:text-red-800"
                    // onClick={() => handleDelete(category._id)}

                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 p-5">
                No Categories Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default AdminCategories;
