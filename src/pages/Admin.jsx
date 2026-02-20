import React, { useEffect, useState } from 'react'
import productsData from '../data/products'
import './Admin.css'

export default function Admin(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({name:'', category:'', price:'', image:'', description:''})

  useEffect(()=>{
    // try backend first
    fetch('http://localhost:4000/products')
      .then(r=> r.ok ? r.json() : Promise.reject())
      .then(data=>{ setProducts(data); setLoading(false) })
      .catch(()=>{
        // fallback to bundled data
        setProducts(productsData)
        setLoading(false)
      })
  },[])

  function openNew(){ setEditing(null); setForm({name:'', category:'', price:'', image:'', description:''}) }

  async function save(){
    const payload = { ...form, price: parseFloat(form.price) || 0 }
    try{
      // try POST to backend
      const res = await fetch('http://localhost:4000/products', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if(res.ok){ const item = await res.json(); setProducts(p=>[item, ...p]); return }
    }catch(e){}
    // fallback: add to local state and localStorage
    const id = Math.max(0, ...products.map(p=>p.id))+1
    const item = { id, ...payload }
    setProducts(p=>[item, ...p])
    localStorage.setItem('admin-products', JSON.stringify([item, ...products]))
  }

  async function remove(id){
    try{ await fetch(`http://localhost:4000/products/${id}`, { method: 'DELETE' }) }catch(e){}
    setProducts(p=>p.filter(x=>x.id!==id))
  }

  return (
    <div className="admin container py-4">
      <h2>Admin — Products</h2>
      <div className="mb-3">
        <button className="btn btn-sm btn-primary me-2" onClick={openNew}>New product</button>
      </div>

      <div className="admin-grid">
        <div className="admin-list">
          {loading ? <div>Loading…</div> : (
            products.map(p=> (
              <div key={p.id} className="admin-item d-flex align-items-center gap-3">
                <img src={p.image} alt={p.name} onError={(e)=>e.target.src='/src/assets/Images/placeholder.svg'} />
                <div className="flex-grow-1">
                  <div className="fw-bold">{p.name}</div>
                  <div className="small text-muted">{p.category} — ${p.price}</div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={()=>{ setEditing(p); setForm({name:p.name, category:p.category, price:p.price, image:p.image, description:p.description}) }}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={()=>remove(p.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="admin-form">
          <h5>{editing ? 'Edit product' : 'Add product'}</h5>
          <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} />
          <input className="form-control mb-2" placeholder="Category" value={form.category} onChange={e=>setForm(f=>({...f, category:e.target.value}))} />
          <input className="form-control mb-2" placeholder="Price" value={form.price} onChange={e=>setForm(f=>({...f, price:e.target.value}))} />
          <input className="form-control mb-2" placeholder="Image URL" value={form.image} onChange={e=>setForm(f=>({...f, image:e.target.value}))} />
          <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={e=>setForm(f=>({...f, description:e.target.value}))} />
          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={save}>Save</button>
            <button className="btn btn-outline-secondary" onClick={()=>{ setEditing(null); setForm({name:'', category:'', price:'', image:'', description:''}) }}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
