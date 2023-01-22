import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1673965391434-71dd7ea34c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Tom Vaidyan</h2>
        <h4>www.tvaidyan.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__label">Recent</p>
        {recentItem('react-js')}
        {recentItem('redux')}
        {recentItem('programming')}
        {recentItem('software-engineering')}
        {recentItem('design')}
      </div>
    </div>
  );
}

export default Sidebar;
