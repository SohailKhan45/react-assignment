import React from 'react'
import "../styles/RecentActivity.css"

const RecentActivity = () => {
  return (
    <div className='recent-activity'>
        <div className="recent-heading">
            <p>Recent Activity</p>  
        </div>
        <div className="main">
          <p className='date'>10.40 AM, Fri 10 Sept 2021</p>
          <h3>You Posted a New Job</h3>
          <p className='text'>Kindly check the requirements and terms of work and make sure everything is right.</p>
        </div>
        <div className="footer">
          <p>Today you made 12 Activity</p>
          <button>See All Activity</button>
        </div>
    </div>
  )
}

export default RecentActivity