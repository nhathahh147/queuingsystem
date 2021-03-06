import React from 'react'
import './topnav.scss'
import UserInfo from '../user-info/UserInfo'
import { data } from '../../constants'

const TopNav = () => {
  const openSidebar = () => {
    document.body.classList.add('sidebar-open')
  }

  return (
    <div className="topnav">
      <div className="topnav__right">
        <UserInfo user={data.user} />
      </div>
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  )
}

export default TopNav