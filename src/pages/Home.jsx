import React from 'react';
import Hero from '../Component/Hero';
import ProductGrid from '../Component/ProductGrid';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <Hero />
      <section style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Products</h2>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </main>
  );
}
