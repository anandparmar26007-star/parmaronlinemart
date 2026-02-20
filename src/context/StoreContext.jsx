/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()

const initialState = {
  cart: [],
  wishlist: []
}

function reducer(state, action){
  switch(action.type){
    case 'ADD_TO_CART': {
      const exists = state.cart.find(i => i.id === action.payload.id)
      if(exists) {
        return {
          ...state,
          cart: state.cart.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i)
        }
      }
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) }
    case 'ADD_TO_WISHLIST':
      if(state.wishlist.find(i => i.id === action.payload.id)) return state
      return { ...state, wishlist: [...state.wishlist, action.payload] }
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlist: state.wishlist.filter(i => i.id !== action.payload) }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    default:
      return state
  }
}

export function StoreProvider({ children }){
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore(){
  return useContext(StoreContext)
}
