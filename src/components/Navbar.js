import React from 'react'
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";

const Navbar = () => {
    return (
    <div className="navbar">    
        <div className="navbar-logo">
            <img className="logo" src="https://beyondexams.org/static/media/beyond-exams-logo.59932d2b.svg" alt="logo"/>
        </div>
        <div className="navbar-search">
            <div className="search-icon">
                <FiSearch/>
            </div>
        </div>
        <div className="navbar-content">
            <a href="#">Couses</a>
            <select>
                <option>&#128517; Hey</option>                          
            </select>
            <div className="navbar-profile">
            <a href="#">Create a Course</a>
            <a href="#">My Dashboard</a>
            <a href="#"><BiBell/></a>
            <img className="profile-Img" src="https://images.unsplash.com/photo-1615241721719-cffa5802f256?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
            </div>
        </div>
    </div>
    )
}

export default Navbar
