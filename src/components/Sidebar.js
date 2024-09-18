import React, {useEffect, useState} from 'react'
import Logo from "../assets/VasitumLogo.png"
import MenuItem from './MenuItem'
import JustLogo from "../assets/logo.png"
import { menu_icons, other_items } from "../data/sidebar"
import "../styles/Sidebar.css"

const Sidebar = () => {


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
    <div className='sidebar'>
        <div className="logo-container">
        {
            isTabView ? <img src={JustLogo} alt='' /> : <img src={Logo} alt="Logo" />
        }
        </div>      
        <div className="main-menu-container">
            <p className='heading'>MAIN MENU</p>
            {menu_icons.map((item,index) => {            
                return <MenuItem key={index} img={item.img} text={item.text} />  //Reusing the MenuItem.js component
            })}
        </div>
        <div className="other-container">
            <p className='heading'>OTHER</p>
            {other_items.map((item,index) => {
                return <MenuItem key={index} img={item.img} text={item.text} />
            })}
        </div>
    </div>
  )
}

export default Sidebar