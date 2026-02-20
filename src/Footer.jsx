import React, { useState } from 'react'
import './Component/Footer.css'

export default function Footer(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  function subscribe(e){
    e.preventDefault()
    if(!email) return setStatus('Please enter an email')
    setStatus('Subscribed — thanks!')
    setEmail('')
    setTimeout(()=>setStatus(''), 3000)
  }

  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <img src="/src/assets/Images/logo.svg" alt="Parmar Brother Foods" className="footer-logo" />
            <p className="mt-3 text-muted">Fresh groceries, delivered to your door. High quality and best prices every day.</p>
            <div className="socials d-flex gap-2 mt-3">
              <a href="#" aria-label="facebook" className="social btn btn-light btn-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H7.898v-2.889h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.874h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="#1f6f4d"/></svg>
              </a>
              <a href="#" aria-label="twitter" className="social btn btn-light btn-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.11 1.53-1.92-.67.4-1.42.7-2.21.86A3.49 3.49 0 0016.15 4c-1.93 0-3.49 1.59-3.49 3.55 0 .28.03.55.09.81-2.9-.15-5.47-1.56-7.19-3.73-.3.52-.47 1.12-.47 1.76 0 1.21.61 2.28 1.54 2.91-.57-.02-1.11-.17-1.58-.43v.04c0 1.7 1.25 3.12 2.91 3.44-.3.09-.63.14-.96.14-.23 0-.45-.02-.67-.06.46 1.47 1.8 2.54 3.38 2.57A6.98 6.98 0 012 19.54c1.96 1.26 4.29 2 6.79 2 8.14 0 12.59-6.76 12.59-12.62v-.58c.86-.62 1.6-1.38 2.19-2.25-.8.37-1.66.61-2.56.72z" fill="#1f6f4d"/></svg>
              </a>
              <a href="#" aria-label="instagram" className="social btn btn-light btn-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.88a3.12 3.12 0 100 6.24 3.12 3.12 0 000-6.24zM18.5 6.5h.01" stroke="#1f6f4d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Shop</h6>
            <ul className="list-unstyled">
              <li><a href="/products">All Products</a></li>
              <li><a href="/products?cat=Fruits">Fruits</a></li>
              <li><a href="/products?cat=Vegetables">Vegetables</a></li>
              <li><a href="/products?cat=Sweets">Sweets</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Customer</h6>
            <ul className="list-unstyled">
              <li><a href="/orders">Orders</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#help">Help Center</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="fw-bold">Newsletter</h6>
            <p className="text-muted small">Get weekly updates on new products and offers.</p>
            <form onSubmit={subscribe} className="d-flex gap-2">
              <input type="email" className="form-control form-control-sm" placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)} />
              <button className="btn btn-success btn-sm">Subscribe</button>
            </form>
            {status && <div className="mt-2 small text-success">{status}</div>}

            <div className="payments d-flex gap-2 mt-3">
              <div className="pay">Visa</div>
              <div className="pay">Master</div>
              <div className="pay">UPI</div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-muted small">© {new Date().getFullYear()} Parmar Brother Foods — All rights reserved.</div>
          <div className="col-md-6 text-end small text-muted">Made with ❤️ — Delivering freshness</div>
        </div>
      </div>
    </footer>
  )
}
