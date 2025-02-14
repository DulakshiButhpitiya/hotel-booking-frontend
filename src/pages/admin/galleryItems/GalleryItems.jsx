import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const GalleryItems = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }

  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryListLoaded, setGalleryListLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!galleryListLoaded) {
      axios
        .get("http://localhost:5000/api/gallery", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("API Response:", res.data); // Debugging log
          setGalleryItems(res.data.list ?? []); // ✅ Fix: Use 'list' instead of 'galleryItems'
          setGalleryListLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching gallery items:", err);
          setGalleryItems([]); // Prevent errors on failure
          toast.error("Failed to load gallery items");
        });
    }
  }, [galleryListLoaded, token]);

  function handleDelete(id) {
    axios
      .delete("http://localhost:5000/api/gallery/"+id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setGalleryListLoaded(false);
        toast.success("Gallery Item Deleted Successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to Delete Item");
      });
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Gallery</h1>
      <div className="overflow-x-auto">
        <button
          className="bg-red-900 w-[60px] h-[60px] border rounded-full text-2xl text-center flex justify-center items-center fixed bottom-10 right-10"
          onClick={() => navigate("/admin/AddGalleryItem")}
        >
          <FaPlus color="white" />
        </button>
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryItems.length > 0 ? (
              galleryItems.map((item, index) => (
                <tr key={index} className="text-center ">
                  <td className="border p-2">
                    <img
                      src={item.img || "https://via.placeholder.com/100"}
                      alt={item.name}
                      className="w-16 h-16 rounded-md"
                    />
                  </td>
                  <td className="border p-3">{item.name}</td>
                  <td className="border p-3">{item.description}</td>
                  <td className="border p-3 flex justify-center gap-3">
                    <Link
                      className="text-blue-600 hover:text-blue-800"
                      to={"/admin/updateGalleryItem"}
                      state={item}
                    >
                      <FaEdit size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 p-5">
                  No Gallery Items Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GalleryItems;
