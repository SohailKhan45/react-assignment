import React from 'react'
import "../styles/AnnouncementItem.css"

const AnnouncementItem = ({item, Item1, Item2}) => {
  return (
    <div className='announcement-item'>
        <div className="announcement-text">
            <p>{item?.text}</p>
            <span>{item?.time}</span>
        </div>
        <div className="announcement-icons">
            <img src={Item1} alt="" />
            <img src={Item2} alt="" />
        </div>
    </div>
  )
}

export default AnnouncementItem