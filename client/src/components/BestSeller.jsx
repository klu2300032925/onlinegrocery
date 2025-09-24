import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const { products } = useAppContext()

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {products
          ?.filter((product) => product.inStock)   // ✅ only in-stock
          .slice(0, 5)                            // ✅ only first 5
          .map((product, index) => (
            <ProductCard key={index} products={product} /> 
          ))}
      </div>
    </div>
  )
}

export default BestSeller
