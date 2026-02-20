import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products'
import { useStore } from '../context/StoreContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const p = products.find(x => String(x.id) === String(id))
  const { dispatch } = useStore()
  if(!p) return <div className="container py-4">Product not found</div>

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-5">
          <img src={p.image} alt={p.name} className="img-fluid" style={{ borderRadius:8 }} onError={(e)=>{e.target.src='/src/assets/Images/placeholder.svg'}} />
        </div>
        <div className="col-md-7">
          <h2>{p.name}</h2>
          <p className="text-muted">{p.category}</p>
          <p>{p.description}</p>
          <h4 className="text-success">${p.price.toFixed(2)}</h4>
          <div className="d-flex gap-3 mt-3 align-items-center">
            <button className="btn btn-success d-flex align-items-center" onClick={()=>{dispatch({type:'ADD_TO_CART', payload:p}); navigate('/cart')}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2"><path d="M6 6h15l-1.5 8h-11L6 6z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="19" r="1" fill="#fff"/><circle cx="18" cy="19" r="1" fill="#fff"/></svg>
              Add to cart
            </button>

            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={()=>dispatch({type:'ADD_TO_WISHLIST', payload:p})}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2"><path d="M20.8 7.6c0 5.2-8.8 10.4-8.8 10.4S3.2 12.8 3.2 7.6C3.2 5 5 3.2 7.6 3.2c1.6 0 3.2.8 4.4 2 1.2-1.2 2.8-2 4.4-2 2.6 0 4.4 1.8 4.4 4.4z" stroke="#e63946" strokeWidth="1.2" fill="#ffd6db" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Add to wishlist
            </button>

            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={()=>navigator.clipboard?.writeText(window.location.href)} title="Copy link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Share
            </button>

            <div className="ms-auto small text-muted">Rating: <strong>{p.rating}</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail