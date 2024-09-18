import React, {useState, useEffect} from 'react'
import Notification from "../assets/notification.png"
import Group from "../assets/Group.png"
import Profile from "../assets/Mask Group.png"
import DownArrow from "../assets/downarrow.png"
import Search from "../assets/search.png"
import Menu from "../assets/menu.png"
import "../styles/Navbar.css"


const Navbar = () => {

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
    <div className='navbar'>
        <div className="input-container">
            {isTabView ? <img style={{cursor: "pointer"}} alt='' src={Menu} /> : ""}
            <input type="text" placeholder='Search' />
            <span className="search-icon-container">
                <img src={Search} alt="" />
            </span>
        </div>
        <div className="options-container">
            <img className='icons' src={Notification} alt="" />
            <img className='icons' src={Group} alt="" />
            <div className="profile">
                <img className='icons profile-icon' src={Profile} alt="" />
                <span className='name' style={{fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000"}} >Admirra John</span>
                <img className='icons' src={DownArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar