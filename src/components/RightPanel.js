import React from 'react'
import RecentActivity from './RecentActivity'
import UpcomingSchedule from './UpcomingSchedule'
import "../styles/RightPanel.css"

const RightPanel = () => {
  return (
    <div className='right-panel'>
        <RecentActivity />
        <UpcomingSchedule />
    </div>
  )
}

export default RightPanel