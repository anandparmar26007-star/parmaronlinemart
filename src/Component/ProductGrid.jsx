import React, { useEffect, useState } from 'react'
import fallbackProducts from '../data/products'
import ProductCard from './ProductCard'
import './ProductGrid.css'

const ProductGrid = () => {
  const [products, setProducts] = useState(fallbackProducts)

  useEffect(()=>{
    fetch('http://localhost:4000/products')
      .then(r=> r.ok ? r.json() : Promise.reject())
      .then(data=> setProducts(data))
      .catch(()=> setProducts(fallbackProducts))
  },[])

  return (
    <section className="products py-4">
      <div className="container">
        <div className="row g-3">
          {products.map(p => (
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
