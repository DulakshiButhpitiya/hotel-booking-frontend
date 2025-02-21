// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const AddGalleryItem = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
// //   const [image, setImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   if (!token) {
//     window.location.href = "/login";
//   }

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     console.log("Form Data Submitted:");

//     const galleryinfo ={
//         name:name,
//         description:description
//         // image:image
//     }
    

//    axios.post("http://localhost:5000/api/gallery",galleryinfo,
//    {headers: {
//     Authorization: `Bearer ${token}`, // FIX: Use backticks instead of single quotes
//   }
//   }
//    ).then((res) => {
//     console.log(res);
//     setIsLoading(false);
//     toast.success("Gallery Item Added Successfully");
//     navigate("/src/pages/admin/galleryItems/GalleryItems.jsx");
//     }).catch((err) => {
//         console.log(err);
//         }
//     )
//     };

//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-semibold mb-4 text-center">Add Gallery Item</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded mt-1 text-black"
//             placeholder="Enter item name"
//             required
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
//             required
//           />
//         </div> */}

// <button
//           type="submit"
//           className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded  hover:bg-blue-600 flex justify-center"
//         >{
//           isLoading ? <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
//           :
//           <span>Add Gallery Item</span>
//         }
          
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddGalleryItem;

// import { useState } from "react";
// // import uploadMedia from "../../../utils/mediaUpload.js";
// // import { getDownloadURL } from "firebase/storage";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import e from "cors";

// export default function AddGalleryItemForm() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
// //   const [image, setImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   if (token == null) {
//     window.location.href = "/login";
//   }

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);

//     // uploadMedia(image)
//     //   .then((snapshot) => {
//     //     getDownloadURL(snapshot.ref).then((url) => {
//           const galleryItemInfo = {
//             name: name,
//             description: description,
//             // image: url,
//           };

//           axios
//             .post(
//               "http://localhost:5000/api/gallery",
//               galleryItemInfo,
//               {
//                 headers: {
//                   Authorization: "Bearer " + token,
//                 },
//               }
//             )
//             .then((res) => {
//               console.log(res);
//               setIsLoading(false);
//               navigate("/admin/gallery-items"); // Redirect to gallery page after adding item
//             })
//             .catch((err) => {
//               console.error(err);
//             });
//           // });
//         // })
//         // .catch((err) => {
//         //   console.error(err);
//         // });
//   }
//   return (
//     <div className="w-full h-[100vh] flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-lg"
//       >
//         <div>
//           <label className="block text-gray-700">Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-4 py-2 mt-1 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-4 py-2 mt-1 border rounded"
//             required
//           />
//         </div>

//         {/* <div>
//           <label className="block text-gray-700">Image:</label>
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="w-full px-4 py-2 mt-1"
//             required
//           />
//         </div> */}

//         <button
//           type="submit"
//           className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 flex justify-center"
//         >
//           {isLoading ? (
//             <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
//           ) : (
//             <span>Add Gallery Item</span>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddGalleryItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (token == null) {
    window.location.href = "/login";
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const galleryItemInfo = {
      name: name,
      description: description,
    };

    axios
      .post("http://localhost:5000/api/gallery", galleryItemInfo, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("Response:", res);
        setIsLoading(false);
        navigate("/admin/gallery-items"); // Redirect to gallery page after adding item
      })
      .catch((err) => {
        console.error("Error:", err);
        setIsLoading(false);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.error("Request:", err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", err.message);
        }
      });
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-lg"
      >
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 flex justify-center"
        >
          {isLoading ? (
            <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
          ) : (
            <span>Add Gallery Item</span>
          )}
        </button>
      </form>
    </div>
  );
} 