import React, { useState, useRef, useEffect } from 'react'
import Logo from '../assets/Images/logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useStore()
  const cartCount = state.cart.reduce((s,i)=> s + i.qty, 0)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [query, setQuery] = useState('')

  const searchRef = useRef(null)

  // close popups on outside click
  useEffect(()=>{
    function handler(e){
      if(searchRef.current && !searchRef.current.contains(e.target)){
        setSearchOpen(false)
      }
    }
    window.addEventListener('click', handler)
    return ()=> window.removeEventListener('click', handler)
  },[])

  function onSearch(e){
    e.preventDefault()
    setMobileOpen(false)
    setSearchOpen(false)
    navigate(`/products?q=${encodeURIComponent(query)}`)
  }

  return (
    <header className='site-header sticky-top'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center gap-2'>
          <button className='hamburger d-md-none btn' aria-label='Open menu' onClick={()=>setMobileOpen(s=>!s)}>
            <svg width='22' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 6h18M3 12h18M3 18h18' stroke='#1f6f4d' strokeWidth='1.6' strokeLinecap='round'/></svg>
          </button>

          <Link to='/' className='d-flex align-items-center'><img src={Logo} alt='Parmar Brother Foods' className='left-corner' /></Link>

          <div className='flex-grow-1 d-none d-md-block'>
            <form onSubmit={onSearch} ref={searchRef} className='d-flex w-100'>
              <div className='input-group'>
                <select className='form-select form-select-sm' style={{ maxWidth: 160 }}>
                  <option>All Categories</option>
                  <option>Milks and Dairies</option>
                  <option>Wines & Alcohol</option>
                  <option>Clothing & Beauty</option>
                </select>
                <input className='form-control form-control-sm' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search for items...' aria-label='Search' />
                <button className='btn btn-sm btn-outline-secondary' aria-label='Search' type='submit'>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21 21l-4.35-4.35' stroke='#374151' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/><circle cx='11' cy='11' r='6' stroke='#374151' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/></svg>
                </button>
              </div>
            </form>
          </div>

          <div className='actions d-flex align-items-center ms-auto'>
            <button className='btn btn-sm icon-btn d-md-none' aria-label='Search' onClick={()=>setSearchOpen(s=>!s)}>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21 21l-4.35-4.35' stroke='#6b7280' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/><circle cx='11' cy='11' r='6' stroke='#6b7280' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/></svg>
            </button>

            <NavLink to='/wishlist' className='btn btn-sm icon-btn' title='Wishlist'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20.8 7.6c0 5.2-8.8 10.4-8.8 10.4S3.2 12.8 3.2 7.6C3.2 5 5 3.2 7.6 3.2c1.6 0 3.2.8 4.4 2 1.2-1.2 2.8-2 4.4-2 2.6 0 4.4 1.8 4.4 4.4z' stroke='#e63946' strokeWidth='1.2' fill='#ffd6db' strokeLinecap='round' strokeLinejoin='round'/></svg>
            </NavLink>

            <div className='position-relative'>
              <button className='btn btn-sm btn-success position-relative icon-btn' aria-label='Open cart' onClick={()=>setCartOpen(s=>!s)}>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6 6h15l-1.5 8h-11L6 6z' stroke='#fff' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round'/><circle cx='9' cy='19' r='1' fill='#fff'/><circle cx='18' cy='19' r='1' fill='#fff'/></svg>
                <span className='badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill'>{cartCount}</span>
              </button>

              {cartOpen && (
                <div className='cart-dropdown card p-2 shadow-sm'>
                  {state.cart.length === 0 ? (
                    <div className='small text-muted p-2'>Your cart is empty.</div>
                  ) : (
                    <div style={{minWidth:260}}>
                      {state.cart.map(i=> (
                        <div key={i.id} className='d-flex gap-2 align-items-center mb-2'>
                          <img src={i.image} alt={i.name} style={{width:48, height:48, objectFit:'cover'}} onError={(e)=>{e.target.src='/src/assets/Images/placeholder.svg'}}/>
                          <div className='flex-grow-1'>
                            <div className='small fw-bold'>{i.name}</div>
                            <div className='small text-muted'>Qty: {i.qty}</div>
                          </div>
                          <button className='btn btn-sm btn-outline-secondary' onClick={()=>dispatch({type:'REMOVE_FROM_CART', payload:i.id})}>Remove</button>
                        </div>
                      ))}
                      <div className='d-flex justify-content-between align-items-center mt-2'>
                        <button className='btn btn-sm btn-secondary' onClick={()=>navigate('/cart')}>View cart</button>
                        <button className='btn btn-sm btn-success' onClick={()=>{navigate('/cart'); setCartOpen(false)}}>Checkout</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile menu overlay */}
        {mobileOpen && (
          <div className='mobile-menu d-md-none'>
            <div className='p-3'>
              <NavLink to='/products' className='d-block py-2'>Products</NavLink>
              <NavLink to='/products' className='d-block py-2'>Sweets</NavLink>
              <NavLink to='/orders' className='d-block py-2'>Orders</NavLink>
              <NavLink to='/wishlist' className='d-block py-2'>Wishlist</NavLink>
              <hr />
              <form onSubmit={onSearch} className='d-flex gap-2'>
                <input className='form-control form-control-sm' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search products...' />
                <button className='btn btn-sm btn-success' type='submit'>Search</button>
              </form>
            </div>
          </div>
        )}

        {/* mobile search inline */}
        {searchOpen && (
          <div className='search-overlay d-md-none'>
            <div className='p-3'>
              <form onSubmit={onSearch} className='d-flex gap-2'>
                <input autoFocus className='form-control' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search for items...' />
                <button className='btn btn-success' type='submit'>Search</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;