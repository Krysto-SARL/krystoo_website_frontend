import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getService } from '../../features/initiation/inititationSlice'
import { toast } from 'react-toastify'

function Service() {
  const { service, isLoading, isError, message } = useSelector(
    (state) => state.service,
  )
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getService(params.id))
  }, [dispatch, isError, message, params.id])

  console.log(service.data)
  if (isLoading || !service.data) {
    return <h1>Chargement...</h1>
  }

  if (isError) {
    return <h3>Une erreur est survenue, merci de réessayer.</h3>
  }

  return (
    <main className="container">
      <h1>{service.data.name}</h1>
      <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non est fugiat ducimus, repellendus quibusdam in. Temporibus veniam accusantium quidem rerum ut porro sapiente dolore, illo ex! Saepe, dolore laborum. Exercitationem?
      </p>
    </main>
  )
}

export default Service