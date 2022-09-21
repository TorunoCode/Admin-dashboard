import { LanguageOutlined, NotificationsNoneOutlined, Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"
export default function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>BOO</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneOutlined/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <LanguageOutlined/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <img src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png" alt="" className="topAvatar"/>
            </div>
        </div>
    </div>
  )
}
