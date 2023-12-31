import axios from "axios";
import  {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/userContext";
import {
  FaConfluence,
  FaHome,
  FaLongArrowAltUp,
  FaShareAlt,
  FaUser,
  FaUsers,
  FaVoteYea,
} from "react-icons/fa";
import {
  AiOutlineHome,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({setToggleLogin}) => {
  const navigate = useNavigate()
  const {setUser} = useContext(Context)
  const logout = ()=>{
    setUser(null)
    navigate("/login")
  }
  return (
    <div className="b__sidebar">
      <div className="b__sidebar-button">
        <button className="active-btn">
          <AiOutlineHome className="btn-symbol" />
          <Link to="/" className="b__sidebar-button--text">
            Home
          </Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button id="top">
          <FaUsers className="btn-symbol" />
          <span className="b__sidebar-button--text">Followers</span>
          <span id="top__num">12</span>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button id="top">
          <FaVoteYea className="btn-symbol" />
          <span className="b__sidebar-button--text">Votes</span>
          <span id="top__num">22</span>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button id="top">
          <FaConfluence className="btn-symbol" />
          <span className="b__sidebar-button--text">Collections</span>
          <span id="top__num">2</span>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button>
          <FaLongArrowAltUp className="btn-symbol" />
          <span onClick={()=> logout()} className="b__sidebar-button--text">Logout</span> 
          <Link to="/login"  className="b__sidebar-button--text" 
          onClick={()=> setToggleLogin(true)}
          >Login</Link>
        </button>
      </div>
      <div className="b__sidebar-button">
        <button>
          <FaShareAlt className="btn-symbol" />
          <span className="b__sidebar-button--text">Share a method</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
