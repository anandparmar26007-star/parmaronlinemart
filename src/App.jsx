import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx'
import ProductGrid from './Component/ProductGrid.jsx'
import Footer from './Footer.jsx'
import ProductsPage from './pages/Products.jsx'
import CartPage from './pages/Cart.jsx'
import WishlistPage from './pages/Wishlist.jsx'
import OrdersPage from './pages/Orders.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path="/orders" element={<OrdersPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App;