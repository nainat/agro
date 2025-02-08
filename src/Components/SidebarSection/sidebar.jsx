import React, { useState } from 'react';
import './sidebar.css';

import { GiPlantRoots } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { RiUserCommunityLine } from "react-icons/ri";
import { CiCloudSun } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";

const menuItems = [
    { id: "soil", icon: <GiPlantRoots />, 
        text: "Soil Analysis", 
        info: "Get insights on soil health, nutrients, and recommendations.",
},
    { id: "irrigation", icon: <IoIosWater />, text: "   Irrigation", info: "Manage water usage efficiently with smart irrigation tools./n" },
    { id: "community", icon: <RiUserCommunityLine />, text: "   Community", info: "Connect with other farmers and agricultural experts." },
    { id: "weather", icon: <CiCloudSun />
        , text: "   Weather", info: "Check crop prices, sell your produce, and explore trends." },
    { id: "profile", icon: <CgProfile />, text: "   Profile", info: "Manage your account details and preferences." },
    { id: "languages", icon: <FaLanguage />, text: "   Languages", info: "Change your preferred language settings." },
];

const Sidebar = () => {
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (content) => {
        setPopupContent(content);
    };

    const closePopup = () => {
        setPopupContent(null);
    };

    return (
        <div className='sideBar grid'>
            <div className="logoDiv">
    <img src="/images/logox.png" alt="Name" className="logoImage" />
    
</div>


            <div className="menuDiv">
                <h3 className="divTitle">MENU</h3>
                <ul className="menuLists grid">
                    {menuItems.map((item) => (
                        <li key={item.id} className="listItem" onClick={() => openPopup(item)}>
                            <div className='menuLink flex'>
                                {item.icon}
                                <span className='smallText'>{item.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sideBarCard">
                <BsFillQuestionCircleFill className='icon'/>
                <div className="cardContent">
                    <h3>Help Center</h3>
                    <p>Having trouble in Agro? Please contact for more questions</p>
                    <button className='btn'>Go to help center</button>
                </div>
            </div>

            {popupContent && (
                <div className="popupOverlay" onClick={closePopup}>
                    <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                        <button className="closeBtn" onClick={closePopup}>×</button>
                        <h2>{popupContent.text}</h2>
                        <p>{popupContent.info}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
