import './productCard.css'
function ProductCards({ product }) {
  console.log(product)
  return (
    <article className="card">
      <img
        src={`${process.env.REACT_APP_BASE_API_URL_IMAGES}${product.photos[0]}`}
        alt=""
      />
      <div className="info">
        <h3>{product.name}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dicta saepe tempore quos autem laboriosam quis nemo asperiores facilis
          quod?
        </p>
      </div>
    </article>
  )
}

export default ProductCards
