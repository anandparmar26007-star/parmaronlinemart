import React from 'react';
import { useStore } from '../context/StoreContext';

export default function Orders() {
  const { orders } = useStore();

  if (orders.length === 0) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>No orders yet</h1>
          <p>Start shopping to place your first order!</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Orders</h1>
      
      <div>
        {orders.map((order, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <h3>Order #{index + 1}</h3>
            <p>Status: <strong>{order.status || 'Processing'}</strong></p>
            <p>Date: {order.date || new Date().toLocaleDateString()}</p>
            <p>Total: ₹{order.total}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
