import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";



function Sidebar() {
  
  const recentItem = (topic) =>(

    <div className = "sidebar_recentItem">
        <span className = "sidebar_hash">#</span>
        <p>{topic}</p>
    </div>

  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Hailemichael Sintayehu</h2>
        <h4>hailemichael@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">25</p>
        </div>

        <div className="sidebar_stat">
          <p>Views in post</p>
          <p className="sidebar_statNumber">28</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software enginneering')}
        {recentItem('design')}
        {recentItem('developer')}

        <p className = "sidebar_discover">Discover more</p>
      </div>
    

      
    </div>
  );
}

export default Sidebar;
