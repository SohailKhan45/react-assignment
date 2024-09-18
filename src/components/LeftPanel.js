import React from 'react'
import JobDetailCard from './JobDetailCard'
import StatsCard from './StatsCard'
import Announcement from './Announcement'
import Stat1 from "../assets/2past.png"
import Stat2 from "../assets/5past.png"
import "../styles/LeftPanel.css"

const LeftPanel = () => {

    const jobDetails = [
        {
            text : "Available Position",
            value: 24,
            message: "4 urgently needed",
            backgroundColor: "#FFEFE7",
            color: "#FF5151"
        },
        {
            text : "Job Open",
            value: 10,
            message : "4 Active hiring",
            backgroundColor: "#E8F0FB",
            color: "#3786F1"
        },
        {
            text : "New employees",
            value: 24,
            message: "4 department",
            backgroundColor: "#FDEBF9",
            color: "#EE61CF"
        }
    ]
    const statsDetails = [
        {
            text: "Total Employees",
            value: 216,
            men: "120 Men",
            women: "96 Women",
            img: Stat1
        },
        {
            text: "Talent Request",
            value: 16,
            men: "6 Men",
            women: "10 Women",
            img: Stat2
        }
    ]


  return (
    <div className='left-panel'>
        <div className="job-details">
            {jobDetails.map((item,i) => {
                return <JobDetailCard key={i} item={item} />
            })}
        </div>
        <div className="stats-details" >
        {   statsDetails.map((item,i) => {
                return <StatsCard key={i} item={item} />
            })}
        </div>
        <div className="announcement-container">
            <Announcement />
        </div>
    </div>
  )
}

export default LeftPanel