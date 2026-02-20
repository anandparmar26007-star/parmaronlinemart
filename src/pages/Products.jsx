import React, { useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../Component/ProductCard'

const ProductsPage = () => {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))]

  const filtered = productsData.filter(p => (
    (category === 'All' || p.category === category) &&
    (q === '' || p.name.toLowerCase().includes(q.toLowerCase()))
  ))

  return (
    <div className="container py-4">
      <div className="d-flex gap-2 mb-3">
        <select className="form-select w-auto" value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input className="form-control" placeholder="Search products..." value={q} onChange={e => setQ(e.target.value)} />
      </div>
      <div className="row g-3">
        {filtered.map(p => (
          <div className="col-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage