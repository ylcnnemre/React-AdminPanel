import React from 'react'
import "./Sidebar.css"
import { LineStyle,Timeline,TrendingUp,MailOutline,Feedback,MessageOutlined } from '@material-ui/icons'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Dashboard
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Quick Menu
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Users
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Products
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                Transactions
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                Reports
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Notifications
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <MailOutline className="sidebarIcon"/>
                                Mail
                            </li>
                            <li className="sidebarListItem">
                                <Feedback className="sidebarIcon"/>
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                <MessageOutlined className="sidebarIcon"/>
                                Messages
                            </li>
                           
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Staff
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                Sales
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar
