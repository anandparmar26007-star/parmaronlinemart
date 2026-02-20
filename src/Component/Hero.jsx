import React from 'react'
import './Hero.css'

const Hero = () => (
  <section className="hero bg-light">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h1 className="display-5">Don't miss amazing grocery deals</h1>
          <p className="lead">Sign up for the daily newsletter</p>
          <div className="input-group mt-3" style={{ maxWidth: '420px' }}>
            <input className="form-control form-control-lg" placeholder="Your email address" />
            <button className="btn btn-success">Subscribe</button>
          </div>
        </div>
        <div className="col-md-5 d-none d-md-block text-end">
          <img src="/src/assets/Images/p1.svg" alt="hero" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
