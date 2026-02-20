import React, { useState } from 'react';
import './Admin.css';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', category: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (formData.name && formData.price && formData.category) {
      setProducts([...products, { ...formData, id: Date.now() }]);
      setFormData({ name: '', price: '', category: '' });
    }
  };

  return (
    <main style={{ minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Admin Dashboard</h1>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Add New Product</h2>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add Product
          </button>
        </form>
      </div>

      <h2>Products List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Name</th>
            <th style={{ textAlign: 'right', padding: '1rem' }}>Price</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem' }}>{product.name}</td>
              <td style={{ textAlign: 'right', padding: '1rem' }}>₹{product.price}</td>
              <td style={{ padding: '1rem' }}>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
