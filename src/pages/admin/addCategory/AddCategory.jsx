// import axios from "axios";
// import React, { useState } from "react";

// const AddCategory = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [features, setFeatures] = useState("");
//   const [description, setDescription] = useState("");
//   // const [image, setImage] = useState(null);
//   const [isloading, setIsLoading] = useState(false);

//   const token =localStorage.getItem("token");

//   if (token === null) {
//     window.location.href = "/login";
//   }
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
// console.log("Form Data Submitted:"
//     );
//     const featuresArray = features.split(",");
//     console.log(featuresArray)

//     const categoryInfo ={
//       name:name,
//       price:price,
//       feature:featuresArray,
//         description:description
//     }
//     axios.post("http://localhost:5000/api/category",categoryInfo,
//     {headers: {
//       Authorization: `Bearer ${token}`, // FIX: Use backticks instead of single quotes
//     }
//     }
//     ).then((res) => {
//       console.log(res);
//       setIsLoading(false);
//     }).catch((err) => {
      
//     })
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       <form
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-center">Add Category</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded mt-1 text-black"
//             placeholder="Enter category name"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Price (Rs)</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full p-2 border rounded mt-1 text-black"
//             placeholder="Enter price"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Features</label>
//           <input
//             type="text"
//             value={features}
//             onChange={(e) => setFeatures(e.target.value)}
//             className="w-full p-2 border rounded mt-1 text-black"
//             placeholder="Enter features"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 border rounded mt-1 text-black"
//             placeholder="Enter description"
//             rows="3"
//             required
//           ></textarea>
//         </div>

//         {/* <div className="mb-4">
//           <label className="block text-gray-700">Image</label>
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="w-full p-2 border rounded mt-1"
//             accept="image/*"
//           />
//         </div> */}

//         <button
//           type="submit"
//           className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded  hover:bg-blue-600 flex justify-center"
//         >{
//           isloading ? <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
//           :
//           <span>Add category</span>
//         }
          
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCategory;


import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // State for image
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  if (token === null) {
    window.location.href = "/login";
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const featuresArray = features.split(",");

    // Create FormData to handle image upload
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("features", featuresArray);
    formData.append("description", description);
    if (image) {
      formData.append("img", image); // Append image file
    }

    axios
      .post("http://localhost:5000/api/category", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
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
            placeholder="Enter features (comma separated)"
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

        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded mt-1"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 flex justify-center"
        >
          {isLoading ? (
            <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
          ) : (
            <span>Add Category</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
