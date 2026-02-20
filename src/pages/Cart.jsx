import React from 'react'
import { useStore } from '../context/StoreContext'

const CartPage = () => {
  const { state, dispatch } = useStore()
  const total = state.cart.reduce((s,i)=> s + i.price * i.qty, 0)
  return (
    <div className="container py-4">
      <h3>Your cart</h3>
      {state.cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          <div className="list-group mb-3">
            {state.cart.map(i => (
              <div key={i.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3 align-items-center">
                  <img src={i.image} alt={i.name} style={{width:64, height:64, objectFit:'cover'}} onError={(e)=>{e.target.src='/src/assets/Images/placeholder.svg'}}/>
                  <div>
                    <div className="fw-bold">{i.name}</div>
                    <div className="small text-muted">{i.category}</div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <button className="btn btn-sm btn-outline-secondary" onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload: i.id})}>Remove</button>
                    <div className="ms-2">Qty: {i.qty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Total: ${total.toFixed(2)}</div>
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={()=> dispatch({type:'CLEAR_CART'})}>Clear</button>
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage