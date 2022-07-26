import React from "react";
import "./sidebar.scss";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineMail, HiOutlineFolderRemove } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";

function SideBar() {
  return (
    <div className="wrapper">
      <div className="head-info">
        <h1>databerry</h1>
        <div className="data">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2hiMM4LY3J-nPX9QFO0URL2siUWeJP-t-A&usqp=CAU"
            className="profile-image"
            alt="profile"
          />
          <div className="info">
            <h3>Dave johnson</h3>
            <p>Founder and Ceo</p>
          </div>
          <div className="drop-down">
            <FiChevronDown color="white" size={18} />
          </div>
        </div>
      </div>
      <div className="options-wrapper">
        <div className="option">
          <div className="icon-title">
            <RiDashboardLine color="white" size={15} />
            <p>Dashboard</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
        <div className="option">
          <div className="icon-title">
            <HiOutlineMail color="white" size={15} />
            <p>Email</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>

        <div className="option">
          <div className="icon-title">
            <HiOutlineFolderRemove color="white" size={15} />
            <p>Project</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
        <div className="option">
          <div className="icon-title">
            <FaTasks color="white" size={15} />
            <p>Tasks</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
        <div className="option">
          <div className="icon-title">
            <AiOutlineTeam color="white" size={15} />
            <p>Teams</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
        <div className="option">
          <div className="icon-title">
            <MdOutlinePayments color="white" size={15} />
            <p>Payments</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
        <div className="option">
          <div className="icon-title">
            <RiDashboardLine color="white" size={15} />
            <p>Upcoming</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
        <div className="option">
          <div className="icon-title">
            <RiDashboardLine color="white" size={15} />
            <p>Done</p>
          </div>
          <FiChevronRight color="white" size={15} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
