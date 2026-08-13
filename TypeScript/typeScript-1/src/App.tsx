import axios from 'axios'
import ProductCard from './ProductCard'

import React, { useEffect, useState } from 'react'
import type { ProductType } from './types'

type Props = {}

const App = (props: Props) => {
  const [productsData, setProductsData] = useState<ProductType[]>([])
  let getData = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    setProductsData(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default App