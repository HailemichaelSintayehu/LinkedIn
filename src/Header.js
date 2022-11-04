import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
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
                {/* right */}
       </div>

    </div>
  )
}

export default Header