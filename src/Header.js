import React from 'react'
import './Header.css'
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from '@mui/icons-material/Search'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import HeaderOption from './HeaderOption'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon={ChatIcon} title='Messaging' />
          <HeaderOption Icon={NotificationsIcon} title='Notifications' />
          <HeaderOption avatar='https://media.licdn.com/dms/image/C4E03AQFX02vgXrTNvg/profile-displayphoto-shrink_800_800/0/1537538895305?e=2147483647&v=beta&t=Ydy3s8MgvBqXEa8RbpF-CEXxyR1JvrSxAIF9D0PmnJY' 
            title='Me' />
        </div>
    </div>
  )
}

export default Header