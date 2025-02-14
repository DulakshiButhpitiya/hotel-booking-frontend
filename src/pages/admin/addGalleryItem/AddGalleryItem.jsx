import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddGalleryItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("http://localhost:5000/api/gallery", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Gallery item added successfully");
      navigate("/admin/gallery");
    } catch (err) {
      console.error("Error adding gallery item:", err);
      toast.error("Failed to add gallery item");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Gallery Item</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-black"
            placeholder="Enter item name"
            required
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
};

export default AddGalleryItem;
