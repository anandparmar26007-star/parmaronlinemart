import React from 'react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Your wishlist is empty</h1>
          <Link to="/products" style={{ color: '#667eea', textDecoration: 'none' }}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Wishlist</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {wishlist.map(item => (
          <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button
              onClick={() => removeFromWishlist(item.id)}
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
          </div>
        ))}
      </div>
    </main>
  );
}
