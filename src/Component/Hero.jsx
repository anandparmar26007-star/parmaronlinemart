import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Parmar Brother Foodstep</h1>
        <p>Authentic Indian Cuisine at Your Doorstep</p>
        <Link to="/products" className="cta-button">
          Browse Menu
        </Link>
      </div>
    </section>
  );
}
