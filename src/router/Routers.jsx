import React from 'react'
import AdminLayout from '../components/layout/AdminLayout'
import ClientLayout from '../components/layout/ClientLayout'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/register/RegisterPage'
import Categories from '../pages/clieant pages/Categories'
import TestComponent from '../test/TestComponent'
import ClientCategories from '../pages/clieant pages/ClientCategories'
import ClientGallery from '../pages/clieant pages/clientGallery/ClientGallery'
import AdminBooking from '../pages/admin/bookings/AdminBooking'
import AdminCategories from '../pages/admin/categories/AdminCategories'
import AdminRooms from '../pages/admin/rooms/AdminRooms'
import AdminUsers from '../pages/admin/users/AdminUsers'
import AdminFeedback from '../pages/admin/feedback/AdminFeedback'
import GalleryItems from '../pages/admin/galleryItems/GalleryItems'
import AddCategory from '../pages/admin/addCategory/AddCategory'
import UpdateCategory from '../pages/admin/updateCtegoryForm/UpdateCategory'
import AddGalleryItem from '../pages/admin/addGalleryItem/AddGalleryItem'
import AddRoomForm from '../pages/admin/addRoomsForm/AddRoomForm'
import UpdateRoomForm from '../pages/admin/updateRoomForm/UpdateRoomForm'
import AdminPage from '../pages/admin pages/AdminPage'
import ClientRooms from '../pages/clieant pages/clientRooms/ClientRooms'
import ContactUs from '../pages/clieant pages/contactUs/ContactUs'



const Routers = () => {
  return (

    <Routes>
    <Route path="/admin/" element={<AdminLayout />} >
    <Route path="/admin/" element={<Navigate to="/admin/"/>} />
    <Route path="bookings" element={<AdminBooking/>} />
          <Route path="categories" element={<AdminCategories/>} />
          <Route path="addCategory" element={<AddCategory/>} />
          <Route path="updateCategory" element={<UpdateCategory/>} />
          <Route path="addGalleryItem" element={<AddGalleryItem/>} />
          <Route path="addrooms" element={<AddRoomForm/>} />
          <Route path="updateRoom" element={<UpdateRoomForm/>} />
          <Route path="rooms" element={<AdminRooms/>} />
          <Route path="users" element={<AdminUsers/>} />
          <Route path="feedback" element={<AdminFeedback/>} />
          <Route path="galleryItems" element={<GalleryItems/>} />
         
 
 
</Route>


    <Route path="/" element={<ClientLayout/>} >
    <Route path="/" element={<Navigate to="/"/>} />
    <Route path="category" element={<ClientCategories />} />
    <Route path="gallery" element={<ClientGallery/>} />
    <Route path="clientrooms" element={<ClientRooms/>} />
    <Route path="contactus" element={<ContactUs/>} />
    </Route>  
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />

    </Routes>
    


      

     
    
  )
}

export default Routers