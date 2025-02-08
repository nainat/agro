import React from 'react'
import './body.css'
import Top from'./Top Section/Top'
import Listing from'./Listing Section/Listing'
import Activity from'./Activity Section/Activity'
import { Routes, Route } from "react-router-dom";
import Notes from "./Notes"; 
import Chatbot from "./chatbot";
import ImageUploader from "./ImageUploader";
import ShopPage from "./ShopPage"
const Body = () => {
    return (
      <div className="mainContent">
        <Top />
        <div className='bottom flex'>
          <Routes>
            <Route path="/" element={<>
              <Listing />
              <Activity />
            </>} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/ImageUploader" element={<ImageUploader />} />
            <Route path="/ShopPage" element={<ShopPage />} />



          </Routes>
        </div>
      </div>
    );
  };

export default Body