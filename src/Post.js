import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import "./Post.css"
import InputOption from './InputOption';
function Post({name,description,message,photoUrl}) {
  return (
    <div className = "post">
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>

            </div>
        </div>
        
        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
            <InputOption Icon={ChatIcon} title="Comment" color="gray" />
            <InputOption Icon={ShareIcon} title="Share" color="gray" />
            <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>

        {/* <div className = "feed_inputContainer">
        <div className="feed_input">
          <Avatar avatar = "https://media.licdn.com/dms/image/C4D03AQFs0CYIxI9lWQ/profile-displayphoto-shrink_400_400/0/1663158014781?e=1672876800&v=beta&t=bNlioUidsuKVUvfJBX4kbinVFvw8AjLmQgWol7nK1ig" />
          <form>
            <input type="text" />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventIcon} title="Event" color="#CBCBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>

        </div> */}
    </div>
  )
}

export default Post