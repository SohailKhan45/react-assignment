import React from 'react'
import AnnouncementItem from './AnnouncementItem'
import Item1 from "../assets/pin.png"
import Item2 from "../assets/dots.png"
import "../styles/Announcement.css"

const Announcement = () => {
    
    const items = [
       {
            text: "Outing schedule for every departement",
            time: "5 Minutes ago"
        },
        {
            text: "Meeting HR Department",
            time: "15 Minutes ago"
        },
        {
            text: "IT Department needs 2 more talents",
            time: "25 Minutes ago"
        },
   ]
    
  return (
    <div className='announcement'>
        <div className="heading">
            <h3 style={{fontWeight: "600", color: "#000"}}>Announcement</h3>
            <span>Today, 13 Sep, 2021</span>
        </div>
        <div className="announcement-details">
            {
                items.map((item, i) => {
                    return <AnnouncementItem key={i} item={item} Item1={Item1} Item2={Item2} />
                })
            }
        </div>
        <div className="all-announcement">
            <span>See all Announcement</span>
        </div>
    </div>
  )
}

export default Announcement