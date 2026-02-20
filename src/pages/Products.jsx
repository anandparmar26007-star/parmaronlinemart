import React, { useState } from 'react';
import ProductGrid from '../Component/ProductGrid';
import { products } from '../data/products';

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <main style={{ minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1>Our Products</h1>
        
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: selectedCategory === category ? '#667eea' : '#ddd',
                color: selectedCategory === category ? 'white' : '#333',
                fontWeight: 'bold',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
}
