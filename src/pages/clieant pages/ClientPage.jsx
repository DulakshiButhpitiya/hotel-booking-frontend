import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header.jsx";
import HomePage from "./HomePage.jsx";
import ClientCategories from "./ClientCategories.jsx";
import ClientGallery from "./clientGallery/ClientGallery.jsx";
import ClientRooms from "./clientRooms/ClientRooms.jsx";
import ContactUs from "./contactUs/ContactUs.jsx";


export default function ClientPage() {
	return (
		<>
			<Header />
            <div style={
                {
                    backgroundImage: "url(vite.jpg)",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    height: "100vh"
                }
            }>
                 <Routes path="/">
                    <Route path="/" element={<HomePage />} />
                    <Route path="category" element={<ClientCategories />} />
                    <Route path="gallery" element={<ClientGallery/>} />
                    <Route path="clientrooms" element={<ClientRooms/>} />
                    <Route path="contactus" element={<ContactUs/>} />
                    <Route path="gallery" element={<ClientGallery/>} />
                    <Route path="gallery" element={<ClientGallery/>} />
                </Routes> 
            </div>
		</>
	);
}