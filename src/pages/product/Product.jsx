import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProductCategory } from '../../features/productCategory/productCategorySlice'
import { Link, useParams } from 'react-router-dom'

function Product() {
  const { productCategory } = useSelector((state) => state.productCategory)

  const dispatch = useDispatch()
  const params = useParams()
  console.log(params.id)
  useEffect(() => {
    dispatch(getProductCategory(params.id))
  }, [dispatch])
 
  if (!productCategory.data) {
    return <h1>Chargement...</h1>
  }

  return (
    <main className="container">
      <h1>{productCategory.data.name}</h1>
    </main>
  )
}

export default Product
