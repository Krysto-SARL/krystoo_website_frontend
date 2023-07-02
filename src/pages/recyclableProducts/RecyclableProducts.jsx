import { useDispatch, useSelector } from 'react-redux'
import './recyclableProduct.css'
import { useEffect } from 'react'
import Spinner from '../../components/shared/spinner/Spinner'
import { getRecyclableProducts } from '../../features/recyclableProduct/recyclableProductSlice'
import RecyclableProductsCard from '../../components/recyclableProducts/RecyclableProductsCard'

function RecyclableProducts() {
  const { recyclableProducts, isLoading } = useSelector(
    (state) => state.recyclableProduct,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecyclableProducts())
  }, [dispatch])

  console.log(recyclableProducts)

  if (isLoading || !recyclableProducts.data) {
    return (
      <main className="main">
        <Spinner />
      </main>
    )
  }

  return (
    <main className="container">
      <h1>reyclage et santé</h1>
      <section className="recyclableProduct-cards_container">
        {recyclableProducts.data.map((product) => (
         <RecyclableProductsCard product={product} link={`/produit-recyclable/${product._id}`} key={product._id}/>
        ))}
      </section>
    </main>
  )
}

export default RecyclableProducts
