import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './Header.css';

export default function Header() {
  const { cart, wishlist } = useStore();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Parmar Brother Foodstep
          </Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/admin">Admin</Link>
          </nav>
          <div className="header-icons">
            <Link to="/wishlist" className="icon-link">
              ❤️ Wishlist ({wishlist.length})
            </Link>
            <Link to="/cart" className="icon-link">
              🛒 Cart ({cart.length})
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
