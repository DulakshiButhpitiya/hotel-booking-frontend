import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FaBookmark, FaList, FaBed, FaUser, FaComment, FaImages } from "react-icons/fa";
import AdminBooking from '../admin/bookings/AdminBooking';
import AdminCategories from '../admin/categories/AdminCategories';
import AdminRooms from '../admin/rooms/AdminRooms';
import AdminUsers from '../admin/users/AdminUsers';
import AdminFeedback from '../admin/feedback/AdminFeedback';
import GalleryItems from '../admin/galleryItems/GalleryItems';
import AddCategory from '../admin/addCategory/AddCategory';


const AdminPage = () => {
  return (
    <div className='w-full max-h-[100vh]   flex'>
      {/* Sidebar */}
      <div className='w-[20%] bg-blue-200 h-[100vh] flex flex-col'>
        <div className='text-white text-[24px] font-bold flex justify-start items-center px-4 py-3'>
          <Link to="/admin/bookings" className='flex items-center gap-3'>
            <FaBookmark />
            Bookings
          </Link>
        </div>
        <div className='text-white text-[24px] font-bold flex justify-start items-center px-4 py-3'>
          <Link to="/admin/categories" className='flex items-center gap-3'>
            <FaList />
            Categories
          </Link>
        </div>
        
        <div className='text-white text-[24px] font-bold flex justify-start items-center px-4 py-3'>
          <Link to="/admin/rooms" className='flex items-center gap-3'>
            <FaBed />
            Rooms
          </Link>
        </div>
        <div className='text-white text-[24px] font-bold flex justify-start items-center px-4 py-3'>
          <Link to="/admin/users" className='flex items-center gap-3'>
            <FaUser />
            Users
          </Link>
        </div>
        <div className='text-white text-[24px] font-bold flex justify-start items-center px-4 py-3'>
          <Link to="/admin/feedback" className='flex items-center gap-3'>
            <FaComment />
            Feedback
          </Link>
        </div>
        <div className='text-white text-[24px] font-bold flex justify-start items-center px-4 py-3'>
          <Link to="/admin/galleryItems" className='flex items-center gap-3'>
            <FaImages />
            Gallery Items
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='w-[80%] bg-blue-900 max-h-[100vh] p-6 overflow-y-scroll text-white'>
        <Routes>
          <Route path="bookings" element={<AdminBooking/>} />
          <Route path="categories" element={<AdminCategories/>} />
          <Route path="addCategory" element={<AddCategory/>} />
          <Route path="rooms" element={<AdminRooms/>} />
          <Route path="users" element={<AdminUsers/>} />
          <Route path="feedback" element={<AdminFeedback/>} />
          <Route path="galleryItems" element={<GalleryItems/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
