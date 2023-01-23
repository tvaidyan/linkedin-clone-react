import React from "react";
import "./Header.css";
import { Home } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { SupervisorAccount } from "@mui/icons-material";
import HeaderOption from "./HeaderOption";
import { BusinessCenter } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/C4E03AQFX02vgXrTNvg/profile-displayphoto-shrink_800_800/0/1537538895305?e=2147483647&v=beta&t=Ydy3s8MgvBqXEa8RbpF-CEXxyR1JvrSxAIF9D0PmnJY"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
