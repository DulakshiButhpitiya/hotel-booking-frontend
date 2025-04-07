import ClientCategories from "../pages/clieant pages/ClientCategories";
import UserTag from "./UserTag";
import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full absolute top-0 left-0 z-50  flex items-center justify-between px-6 py-4 shadow-md">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Leonine Villa Logo"
            className="h-12 w-24 cursor-pointer object-cover rounded-md"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/gallery"
            className="text-white hover:text-gray-200 transition font-semibold"
          >
            Gallery
          </a>
          <a
            href="#reviews"
            className="text-white hover:text-gray-200 transition font-semibold"
          >
            Reviews
          </a>
          <a
            href="#special offers"
            className="text-white hover:text-gray-200 transition font-semibold"
          >
            Special Offer
          </a>
          <a href="/clientrooms"
            className="text-white hover:text-gray-200 transition font-semibold"
          >
            Rooms
          </a>
          <Link to="/category"
            className="text-white hover:text-gray-200 transition font-semibold"
          >
            Categories
          </Link>
          <a href="/contactus"
            className="text-white hover:text-gray-200 transition font-semibold"
          >
            Contact Us
          </a>
        </nav>

        {/* User Info */}
        <UserTag
          imageLink="https://th.bing.com/th/id/OIP.ySiQ61-170um7jHn2cv15QAAAA?rs=1&pid=ImgDetMain"
          name="Malith Dilshan"
        />
      </header>
      
    </>
  );
}

export default Header;