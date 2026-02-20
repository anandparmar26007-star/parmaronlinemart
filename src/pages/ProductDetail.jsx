import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useStore();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Product not found</h1>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <img
            src={product.image || 'https://via.placeholder.com/400'}
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p style={{ color: '#666' }}>{product.category}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{product.description}</p>
          <h2 style={{ color: '#f39c12' }}>₹{product.price}</h2>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
