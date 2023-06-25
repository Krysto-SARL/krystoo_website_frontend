import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../features/initiation/inititationSlice'
import './services.css'
import ProductCards from '../../components/products/ProductCards'
function Services() {
  const { services, isLoading } = useSelector((state) => state.service)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServices())
  }, [dispatch])
  console.log(services.data)
  if (isLoading || !services.data) {
    return <h1>Chargement...</h1>
  }
  return (
    <>
      <main className="container">
        <h1>Nos Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          odio. Ab, autem iusto. Aliquid consequatur nesciunt corporis eum
          minima debitis officiis tenetur itaque quidem est exercitationem
          repellat porro magnam mollitia quae enim ut dolorum, a maiores sint
          distinctio ab! Optio?
        </p>
        <section className="service-cards_container">
          {services.data.map((service) => (
           <ProductCards product={service} link={`/service/${service.id}`}/>
          ))}
        </section>
      </main>
    </>
  )
}

export default Services
