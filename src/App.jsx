import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/clieant pages/HomePage"
import AdminPage from "./pages/admin pages/AdminPage"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">
    <Route path="/admin/*" element={<AdminPage/>} />

    <Route path="/*" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
