import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function Header() {
  return (
    <div className ='header'>

       <div className = "header_left">

            <img src = "https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png" alt = ""/>

            <div className="header_search">
                <SearchIcon/>
                
                <input type = "text" placeholder = "Search"/>

            </div>
       </div>

       <div className = "header_right">
            <HeaderOption Icon = {HomeIcon}  title = "Home"/>
            <HeaderOption Icon = {SupervisorAccountIcon}  title = "My Network"/>
            <HeaderOption  title = "Jobs"/>
            <HeaderOption  title = "Messaging"/>
            <HeaderOption  title = "Notifications"/>
            
       </div>

    </div>
  )
}

export default Header