import React, {useEffect} from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown, FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

import Logo from "../Asset/Profile/profile.png";

function TopContainer() {
    useEffect(() => {
        const menuTarget = document.getElementById('menuChevron');
        const menuContainer = document.getElementById('menuContainer');

        let closeTimeout; 

        menuTarget.addEventListener("mouseenter", () => {
            clearTimeout(closeTimeout); 
            menuTarget.style.transform = "rotate(180deg)";
            menuContainer.style.transform = "translateX(0px)";
        });

        menuTarget.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(() => {
                menuTarget.style.transform = "rotate(0deg)";
                menuContainer.style.transform = "translateX(300px)";
            }, 500); 
        });

        menuContainer.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout); 
        });

        menuContainer.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(() => {
                menuTarget.style.transform = "rotate(0deg)";
                menuContainer.style.transform = "translateX(300px)";
            }, 100); // Add the same delay for consistency
        });
    }, []);
  return (
    <div className="topContainer">
        <div className="inputBox">
            <input type="text" placeholder="Search item, collections" />
            <i >
                <BiSearchAlt />
            </i>
        </div>

        <div className="profileContainer">
            <i className="profileIcon">
                <FaBell />
            </i>
            <div className="profileImage">
                <img src={Logo} alt="User Profile" /> 
            </div>
            <p className="profileName">Kunwar Hitesh Singh</p>
            <i className="menuChevron" id="menuChevron">
                <FaChevronDown />
            </i>
            <div className="menuContainer" id="menuContainer">
                <ul>
                    <li><i><FaUser /></i> Profile</li>
                    <li><i><FaCog /></i> Setting</li>
                    <li><i><FaSignOutAlt /></i> Logout</li>
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default TopContainer