import React from "react";
import "./Feed.css";
import { Create } from "@mui/icons-material";
import InputOption from "./InputOption";
import { Image } from "@mui/icons-material";
import { Subscriptions } from "@mui/icons-material";
import { EventNote } from "@mui/icons-material";
import { CalendarViewDay } from "@mui/icons-material";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <Post
        name="Tom Vaidyan"
        description="This is a test."
        message="WOW this worked"
      />
    </div>
  );
}

export default Feed;
