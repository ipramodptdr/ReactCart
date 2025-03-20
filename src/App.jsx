import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import Footer from './Components/Layout/Footer'
import Navbar from './Components/Layout/Navbar'
import Cart from './Components/Pages/Cart'
import Home from './Components/Pages/Home'
import Products from './Components/Pages/Products'

const App = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {!isAuthPage && <Navbar />}
        <main className={`${!isAuthPage ? 'container mx-auto px-2 py-2' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </main>
        {!isAuthPage && <Footer />}
      </div>
    </>
  )
}

export default App