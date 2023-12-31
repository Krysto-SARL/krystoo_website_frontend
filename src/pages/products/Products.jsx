import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProductCategories } from '../../features/productCategory/productCategorySlice'
import ProductCards from '../../components/products/ProductCards'
import Spinner from '../../components/shared/spinner/Spinner'

function Products() {
  const { productCategories, isLoading } = useSelector(
    (state) => state.productCategory,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductCategories())
  }, [dispatch])

  if (isLoading || !productCategories.data) {
    return (
        <main className="main">
          <Spinner />
        </main>
      )
  }

  return (
    <>
      <main className="container">
        <h1>Nos produits</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          odio. Ab, autem iusto. Aliquid consequatur nesciunt corporis eum
          minima debitis officiis tenetur itaque quidem est exercitationem
          repellat porro magnam mollitia quae enim ut dolorum, a maiores sint
          distinctio ab! Optio?
        </p>
        <section className="product-cards_container">
          {productCategories.data.map((product) => (
            <ProductCards product={product} link={`/produit/${product.id}`} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Products
