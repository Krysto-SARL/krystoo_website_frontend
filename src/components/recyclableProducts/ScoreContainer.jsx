import React from 'react'

function ScoreContainer({ scoreImg, scoreDetail }) {
  return (
    <div className='score-container'>
      <div className="score-img">
        <img
          src={`${process.env.REACT_APP_BASE_API_URL_IMAGE}${scoreImg}`}
          alt=""
        />
      </div>
      <p>{scoreDetail}</p>
    </div>
  )
}

export default ScoreContainer
