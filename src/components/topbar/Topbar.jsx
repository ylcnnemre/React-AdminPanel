import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from "@material-ui/icons"
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                        <div className="topbarIconContainer">
                                <NotificationsNone/>
                                <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                                <Language />
                                <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer" >
                                <Settings/>
                      
                            
                        </div>
                        <img src="https://pbs.twimg.com/profile_images/491469373480390656/Wz18s25S_400x400.jpeg" className="topAvatar" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
