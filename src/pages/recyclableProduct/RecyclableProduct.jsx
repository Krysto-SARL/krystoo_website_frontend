import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRecyclableProduct } from '../../features/recyclableProduct/recyclableProductSlice'
import './recyclableProduct.css'
import ScoreContainer from '../../components/recyclableProducts/ScoreContainer'

function RecyclableProduct() {
  const { recyclableProduct } = useSelector((state) => state.recyclableProduct)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getRecyclableProduct(params.id))
  }, [dispatch])

  console.log(recyclableProduct)

  if (!recyclableProduct.data) {
    return <h1>Chargement...</h1>
  }

  return (
    <main className="container">
      <section className="recyclableProduct-header">
        <h1>{recyclableProduct.data.designation}</h1>

        <div className="recyclableProduct_imageContainer">
          <img
            src={`${process.env.REACT_APP_BASE_API_URL_IMAGE}${recyclableProduct.data.photo}`}
            alt=""
          />
        </div>
      </section>
      <section>
        <ScoreContainer scoreDetail={recyclableProduct.data.nutriScore.detail} scoreImg={recyclableProduct.data.nutriScore.photos}/>
      </section>

    </main>
  )
}

export default RecyclableProduct
