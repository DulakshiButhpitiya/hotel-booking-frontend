import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/clieant pages/HomePage"
import AdminPage from "./pages/admin pages/AdminPage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">
    <Route path="/admin/*" element={<AdminPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />

    <Route path="/*" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
