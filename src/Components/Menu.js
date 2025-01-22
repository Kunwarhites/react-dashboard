import React, {useEffect} from 'react';
import Logo from "../logo192.png";
import "../Components/Menu.css";
import { FaSignOutAlt, 
        FaTachometerAlt, 
        FaUser, 
        FaCodepen, 
        FaCog, 
        FaWallet,
        FaChartLine,
    } from "react-icons/fa";

function Menu() {
    
    useEffect(() => {
        const mainMenuLi = document.getElementById('mainMenu').querySelectorAll('li');
    
        function changeActive() {
            mainMenuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
    
        mainMenuLi.forEach((n) => n.addEventListener('click', changeActive));
    
        return () => {
            mainMenuLi.forEach((n) => n.removeEventListener('click', changeActive));
        };
    }, []);
    

  return (
    <menu>
        <img src={Logo} alt="" />

        <ul id="mainMenu">
            <Icon icon={<FaTachometerAlt />} />
            <Icon icon={<FaCodepen />} />
            <Icon icon={<FaUser />} />
            <Icon icon={<FaChartLine />} />
            <Icon icon={<FaWallet />} />
        </ul>
        <ul id="lastMenu">
            <Icon icon={<FaCog />} />
            <Icon icon={<FaSignOutAlt />} />
        </ul>
    </menu>
  )
}
const Icon = ({ icon,  href = "#" }) => (
    <li>
        <a href={href} >
            {icon}
        </a>
    </li>
);

export default Menu;