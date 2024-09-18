import React from 'react'
import "../styles/JobDetails.css"

const JobDetailCard = ({item}) => {
    
    const backgroundColor = item.backgroundColor
    const color = item.color
  return (
    <div className='job-card' style={{backgroundColor: backgroundColor}}>
        <p className='card-text'>{item.text}</p>
        <p className='card-value'>{item.value}</p>
        <p className='card-message' style={{color: color}}>{item.message}</p>
    </div>
  )
}

export default JobDetailCard