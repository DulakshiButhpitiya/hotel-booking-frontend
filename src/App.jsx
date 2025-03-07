import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/clieant pages/HomePage"
import AdminPage from "./pages/admin pages/AdminPage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
import Categories from "./pages/clieant pages/Categories"
import TestComponent from "./test/TestComponent"
import { Toaster } from 'react-hot-toast'
import { CustomerPage } from "./pages/clieant pages/ClientPage"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Toaster position="top-right"
    reverseOrder={false} />
    <Routes path="/*">
    <Route path="/admin/*" element={<AdminPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="/categories" element={<Categories/>} />
    <Route path="/test" element={<TestComponent/>} /> 
    <Route path="/*" element={<CustomerPage/>} />     
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
