import React from 'react'
import './Top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import "../Notes.css";


const Top = () => {
    const navigate = useNavigate();
    return (
        <div className='topSection'>
            <video className='videoBackground' autoPlay loop muted>
                <source src='images/forest.mp4' type='video/mp4' />
            </video>
            <div className="headerSection flex">
                <div className="title">

                    <h1>Welcome to AGRO.</h1>
                    <h3> MAXIMIZE YOUR PRODUCE</h3>
                    <p> Hello Naina, Welcome!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard' />
                    <BiSearchAlt className="icon" />
                </div>

                <div className="adminDiv flex">
                    <IoNotificationsOutline className="icon" />
                    <div className="adminImage">
                        <img src='/images/wheat.png' alt="Admin" />
                    </div>
                </div>
            </div>


            <div className="rightCard flex">
                <h1>One Stop Solution For All Your Farming Needs!</h1>
                <p> <strong>The best way to maximize your produce!</strong></p>

                <div className="buttons flex">
                <a href="https://www.india.gov.in/topics/agriculture" target="_blank" rel="noopener noreferrer">
                <button className='btn'>Explore More</button>
                </a>
                </div>

                <p><strong>"Cultivating the future, one seed at a time." </strong> </p>
                

              

            </div>
            <br>
            </br>
            <h3>DASHBOARD</h3>

            <div className="dashboard">
            <div className="card" onClick={() => navigate("/ImageUploader")} style={{ cursor: "pointer" }}>              
                    <h2>Crop Analysis</h2>
                    <p>Analyze crop health and yield.</p>
                </div>
                <div className="card" onClick={() => navigate("/ShopPage")} style={{ cursor: "pointer" }}>
                    <h2>Market</h2>
                    <p>Buy and sell your products.</p>
                </div>
            </div>
            <div className="dashboardtwo">
                <div className="card" onClick={() => navigate("/chatbot")} style={{ cursor: "pointer" }}>
                    <h2>CropBot</h2>
                    <p>Automate farming with CropBot.</p>
                </div>
                <div className="card" onClick={() => navigate("/notes")} style={{ cursor: "pointer" }}>
                    <h2>Notes</h2>
                    <p>Write notes</p>
                </div>
            </div>
        </div>



    );
};

export default Top