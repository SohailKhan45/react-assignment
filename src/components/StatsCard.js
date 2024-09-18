import React from 'react'
import "../styles/StatsCard.css"

const StatsCard = ({item}) => {
    
  return (
    <div className='stats-card'>
        <div className="text-stats">
          <p className='text'>{item.text}</p>
        <p className='text-value'>{item.value}</p>
        <div className="gender-comparison">
          <p>{item.men}</p>
          <p>{item.women}</p>
        </div>
        </div>
        <div className="image-stats">
          <img src={item.img} alt="" />
        </div>
    </div>
  )
}

export default StatsCard