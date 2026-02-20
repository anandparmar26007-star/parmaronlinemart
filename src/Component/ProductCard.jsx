import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import QuickView from './QuickView'

function Stars({ value = 0 }){
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = []
  for(let i=0;i<5;i++){
    if(i<full) stars.push('★')
    else if(i===full && half) stars.push('☆')
    else stars.push('☆')
  }
  return <span style={{color:'#f2b01e'}}>{stars.join('')}</span>
}

const ProductCard = ({ product }) => {
  const [quickOpen, setQuickOpen] = useState(false)
  const [wish, setWish] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useStore()
  return (
    <div className="card h-100">
      <div className="card-media" style={{cursor:'pointer'}} onClick={()=>navigate(`/products/${product.id}`)}>
        <img src={product.image} loading="lazy" className="card-img-top product-image" alt={product.name} onError={(e)=>{e.target.src='/src/assets/Images/placeholder.svg'}} />
        <div className="card-overlay">
          <button className="btn btn-sm btn-light me-2" onClick={(e)=>{e.stopPropagation(); setQuickOpen(true)}} aria-label="Quick view">Quick View</button>
          <button className={`btn btn-sm ${wish? 'btn-danger':'btn-outline-light'}`} onClick={(e)=>{e.stopPropagation(); setWish(s=>!s); dispatch({type:'TOGGLE_WISHLIST', payload: product})}} aria-label="Wishlist">❤</button>
        </div>
      </div>
      <div className="product-tags mt-2 d-flex flex-wrap">
        {product.tags && product.tags.map(tag => (
          <span key={tag} className="badge bg-light text-dark me-1 small tag-badge" aria-label={`tag-${tag}`}>{tag}</span>
        ))}
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title" style={{cursor:'pointer'}} onClick={()=>navigate(`/products/${product.id}`)}>{product.name}</h6>
        <p className="text-muted small mb-1">{product.category}</p>
        <p className="small text-truncate" title={product.description}>{product.description}</p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <span className="fw-bold">${product.price.toFixed(2)}</span>
            <div className="small text-muted"> <Stars value={product.rating} /> <span className="ms-1">{product.rating}</span></div>
          </div>
          <button className="btn btn-sm btn-outline-primary" onClick={()=>dispatch({type:'ADD_TO_CART', payload:product})}>Add</button>
        </div>
      </div>
      {quickOpen && <QuickView product={product} onClose={()=>setQuickOpen(false)} />}
    </div>
  )
}

export default ProductCard
