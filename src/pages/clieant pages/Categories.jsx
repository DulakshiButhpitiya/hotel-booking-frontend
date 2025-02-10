import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  // Sample Category Data
 const [categories, setCategories] = useState([]);
 const [categorieslistLoaded, setCategorieslistLoaded] = useState(false);

 useEffect(() => {

  if(!categorieslistLoaded){
    axios
      .get("http://localhost:5000/api/category")
      .then((res) => {
        setCategories(res.data.categories);
        setCategorieslistLoaded(true);

      })}},
      [categorieslistLoaded]
    );

  function deleteItem(name) {

    axios
      .delete("http://localhost:5000/api/category/"+name)
      .then((res) => {
        setCategorieslistLoaded(false);
      })
    }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Available Categories</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price (Rs)</th>
              <th className="p-3 border">Features</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="text-center hover:bg-gray-100">
                <td className="border p-2">
                  <img src={category.img} alt={category.name} className="w-16 h-16 rounded-md" />
                </td>
                <td className="border p-3">{category.name}</td>
                <td className="border p-3">{category.price}</td>
                <td className="border p-3">{category.features}</td>
                <td className="border p-3">{category.description}</td>
                <td className="border p-3">
                 
                  <button onClick={
                    ()=>(
                      deleteItem(category.name)
                    )}className="bg-green-400 text-white px-4 py-1 rounded-md ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
