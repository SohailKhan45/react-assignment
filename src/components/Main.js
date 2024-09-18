import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import "../styles/Main.css"
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const Main = () => {

  const [isTabView, setIsTabView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsTabView(window.innerWidth <= 834);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isTabView]);

  return (
    <div className='main-container'>
        <Navbar />
        <div className="dashboard">
          <p className='' >Dashboard</p>
        </div>
        <div className="statistics">
            <LeftPanel />
            <RightPanel />
        </div>
    </div>
  )
}

export default Main