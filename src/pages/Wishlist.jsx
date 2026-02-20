import React from 'react'
import { useStore } from '../context/StoreContext'

const WishlistPage = () => {
  const { state, dispatch } = useStore()
  return (
    <div className="container py-4">
      <h3>Your wishlist</h3>
      {state.wishlist.length === 0 ? <p>Your wishlist is empty.</p> : (
        <div className="row g-3">
          {state.wishlist.map(i => (
            <div key={i.id} className="col-6 col-md-3">
              <div className="card">
                <img src={i.image} alt={i.name} className="card-img-top" style={{height:140, objectFit:'cover'}} onError={(e)=>{e.target.src='/src/assets/Images/placeholder.svg'}} />
                <div className="card-body p-2">
                  <div className="small fw-bold">{i.name}</div>
                  <div className="small text-muted">${i.price.toFixed(2)}</div>
                  <div className="mt-2 d-flex gap-2">
                    <button className="btn btn-sm btn-primary" onClick={()=>dispatch({type:'ADD_TO_CART', payload:i})}>Add</button>
                    <button className="btn btn-sm btn-outline-secondary" onClick={()=>dispatch({type:'REMOVE_FROM_WISHLIST', payload:i.id})}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistPage