import React from 'react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import './Cart.jsx.css';

export default function Cart() {
  const { cart, removeFromCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Your cart is empty</h1>
          <Link to="/products" style={{ color: '#667eea', textDecoration: 'none' }}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Shopping Cart</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Product</th>
            <th style={{ textAlign: 'right', padding: '1rem' }}>Price</th>
            <th style={{ textAlign: 'center', padding: '1rem' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem' }}>{item.name}</td>
              <td style={{ textAlign: 'right', padding: '1rem' }}>₹{item.price}</td>
              <td style={{ textAlign: 'center', padding: '1rem' }}>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '2rem', textAlign: 'right' }}>
        <h2>Total: ₹{total}</h2>
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: '#27ae60',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginTop: '1rem',
        }}>
          Checkout
        </button>
      </div>
    </main>
  );
}
