import React from 'react';
import { useStore } from '../context/StoreContext';
import './QuickView.css';

export default function QuickView({ product, onClose }) {
  const { addToCart } = useStore();

  if (!product) return null;

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="quick-view-content">
          <div className="qv-image">
            <img src={product.image || 'https://via.placeholder.com/300'} alt={product.name} />
          </div>
          <div className="qv-info">
            <h2>{product.name}</h2>
            <p className="qv-category">{product.category}</p>
            <p className="qv-description">{product.description}</p>
            <p className="qv-price">₹{product.price}</p>
            <button className="qv-btn" onClick={() => {
              addToCart(product);
              onClose();
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
