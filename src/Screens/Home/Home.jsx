import React from "react";
import "./home.scss";
import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";
import {GrFormAdd} from 'react-icons/gr';

export default function Home() {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="header-container">
        <Header />
        <div className="card-wrapper">
          <div className="upload-card">
            <img
              src={require("../../Images/card1.png")}
              alt="card"
              className="card-image"
            />
            <div className="info-container">
             <div className="info">
              <p className="title">Latest uploads</p>
              <p className="value">987 total files</p>
             </div>
             <div className="add-btn">
               <GrFormAdd color="#fff" size={22}/>
             </div>
            </div>
          </div>
          <div className="card2">
           <div className="folder">

           </div>
           <div className="card-part">
             <div className="last-media-card">

             </div>
             <div className="urgent-card">

             </div>
           </div>
          </div>
          <div className="bg-image-card">
              <div className="upper-info">

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
