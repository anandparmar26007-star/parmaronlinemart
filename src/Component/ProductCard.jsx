import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || 'https://via.placeholder.com/200'} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <div className="product-footer">
          <span className="price">₹{product.price}</span>
          <div className="product-actions">
            <button
              className="btn-wishlist"
              onClick={() => addToWishlist(product)}
              title="Add to wishlist"
            >
              ❤️
            </button>
            <button
              className={`btn-cart ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? '✓ Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
