import React from 'react'
import '../styles/MenuItem.css'

const MenuItem = ({img, text}) => {
  return (
    <div className='menu-item'>
        <img src={img} alt="" />
        <span style={{color : text === "Dashboard" ? "#FF5151" : "#686868"}} >{text}</span>
    </div>
  )
}

export default MenuItem