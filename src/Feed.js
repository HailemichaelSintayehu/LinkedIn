import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="feed_inputOptions">
        <InputOption 
          Icon={ImageIcon} 
          title="Photo" 
          color="#7085F9" />
        <InputOption 
          Icon={SubscriptionsIcon} 
          title="Video" 
          color="#E7A33E" />
          <InputOption
          Icon={EventIcon} 
          title="Event" 
          color="#CBCBCD" />
        <InputOption 
          Icon={CalendarViewDayIcon} 
          title="Write Article" 
          color="#7FC15E" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
