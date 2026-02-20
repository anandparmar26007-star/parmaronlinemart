import React, { useState } from 'react'
import './QuickView.css'
import { useStore } from '../context/StoreContext'

export default function QuickView({ product, onClose }){
  const [index, setIndex] = useState(0)
  const { dispatch } = useStore()
  const imgs = product.images && product.images.length ? product.images : [product.image]

  function prev(e){ e.stopPropagation(); setIndex(i => (i - 1 + imgs.length) % imgs.length) }
  function next(e){ e.stopPropagation(); setIndex(i => (i + 1) % imgs.length) }

  return (
    <div className="qv-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="qv-card" onClick={e=>e.stopPropagation()}>
        <button className="qv-close" onClick={onClose} aria-label="Close">×</button>

        <div className="qv-media">
          <img src={imgs[index]} alt={product.name} onError={(e)=>{e.target.src='/src/assets/Images/placeholder.svg'}} loading="lazy" />
          {imgs.length > 1 && (
            <>
              <button className="qv-nav qv-prev" onClick={prev} aria-label="Previous">‹</button>
              <button className="qv-nav qv-next" onClick={next} aria-label="Next">›</button>
            </>
          )}
        </div>

        <div className="qv-body">
          <h4 className="mb-1">{product.name}</h4>
          <div className="text-muted small mb-2">{product.category}</div>
          <div className="mb-2">{product.description}</div>
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="fs-4 fw-bold">${product.price.toFixed(2)}</div>
            <div className="text-muted small">Rating: {product.rating}</div>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={()=>{dispatch({type:'ADD_TO_CART', payload: product}); onClose()}}>Add to cart</button>
            <button className="btn btn-outline-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
