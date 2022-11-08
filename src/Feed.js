import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { Avatar } from "@mui/material";
import Post from "./Post";
import { db } from './firebase';
import firebase from 'firebase/compat/app'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move';

// import { serverTimestamp } from '@firebase/firestore'
function Feed() {
	const user = useSelector(selectUser)
	const [input,setInput] = useState("");
	const [posts,setPosts] = useState([])

	useEffect(() => {
		db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>{
			setPosts(snapshot.docs.map(doc =>(
				{
					id:doc.id,
					data:doc.data()
				}
			)))
		})
	}, []);
	
	const sendPost = e =>{
		e.preventDefault();
		
		db.collection('posts').add({
			name:user.displayName,
			description:user.email, 
			message: input,
			photoUrl:user.photoURL || "",
			timestamp:firebase.firestore.FieldValue.serverTimestamp() || null,
		})
		
		setInput("");
	};

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" value = {input} onChange = {e =>setInput(e.target.value)} />
            <button onClick = {sendPost} type="submit">Send</button>
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
      </div>
	  <FlipMove>
			{posts.map(({id,data:{name,description,message,photoUrl}})=>(
				<Post 
				key={id}
				name = {name}
				descripiton = {description}
				message={message}
				photoUrl = {photoUrl}/>
			))}
		
	  </FlipMove>

      
    </div>
  );
}

export default Feed;
