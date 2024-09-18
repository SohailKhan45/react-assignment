import React from 'react'
import "../styles/UpcomingSchedule.css"
import AnnouncementItem from './AnnouncementItem'
import OptionsIcon from "../assets/dots.png"

const UpcomingSchedule = () => {


   const priority_items =[
        {
           text: "Review Candidate applications",
           time: "Today 11:30 AM"  
        },
    ]
    
    const other_items = [
        {
            text: "Interview with candidates",
            time: "Today 10:30 AM"
        },
        {
            text: "Short meeting with product designer",
            time: "Today 09:30 AM"
        },
    ]
  return (
    <div className='upcoming-schedule'>
        <div className="upcoming-heading">
            <h3 style={{fontWeight: "600", color: "#000"}}>Upcoming Schedule</h3>
            <span>Today, 13 Sep, 2021</span>
        </div>
        <div className="priority">
            <p className='priority-heading'>Priority</p>
            {priority_items.map((item, i) => {
                    return <AnnouncementItem key={i} item={item} Item2={OptionsIcon} />
                })
            }
        </div>
        <div className="other">
            <p className='other-heading'>Other</p>
            {other_items.map((item, i) => {
                    return <AnnouncementItem key={i} item={item} Item2={OptionsIcon} />
                })
            }
        </div>
        <div className="all-announcement">
            <span>Create a new Schedule</span>
        </div>
    </div>
  )
}

export default UpcomingSchedule