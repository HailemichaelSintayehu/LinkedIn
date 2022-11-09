import React from 'react'
import "./Widget.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

  const newArticle = (heading ,subtitle) =>(

    <div className="widgets_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon/>
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  
  return (
    <div className = "widget">
        <div className="widgets_header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
            {newArticle("kest misael is back","Top news -9099 readers")}
            {newArticle("Coronavirus","Top news -884 readers")}
            {newArticle("Tesla hits new highs","Top news -9099 readers")}
            {newArticle("Bitcoin Breaks $22k","Crypto -8000 readers")}
            {newArticle("SpaceX launches new Eagle rocket","Top news -6503 readers")}

    </div>
  )
}

export default Widgets;