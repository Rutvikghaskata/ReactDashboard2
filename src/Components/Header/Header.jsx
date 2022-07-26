import React from "react";
import "./header.scss";
import { BsChat } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCalendarCheck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <div className="main-header">
      <div className="info">
        <p>Hello Dave, Welocom back</p>
        <h1>Your Dashboard is updated</h1>
      </div>
      <div className="menu-icon">
        <div className="chat-icon">
          <BsChat color="#000" size={28} />
          <IoIosNotificationsOutline
            color="#000"
            size={18}
            style={{
              position: "absolute",
              borderRadius: 10,
              top: -3,
              left: 10,
              zIndex: 1,
              backgroundColor: "#fff",
            }}
          />
        </div>
        <div className="schedual-icon">
          <BsCalendarCheck color="#000" size={28} />
        </div>
        <div className="search-icon">
          <FiSearch color="#000" size={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
