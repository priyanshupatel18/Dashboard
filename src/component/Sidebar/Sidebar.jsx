import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";

import { SidebarData } from "../../Data/Data";

import { Icon } from "@iconify/react";

import {motion} from "framer-motion"

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, SetExpended] = useState(true);

  const SidebarVarients ={
    true:{
      left: '0'
    },
    false:{
     left: '-60%'
    } 
  }



  return (
    <>
      <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}
       onClick={()=>SetExpended(!expanded)}
      >
        {/* <Icon icon="fe:bar" width="25" /> */}
        <Icon icon="fluent:list-bar-20-filled" width="25" />
      </div>
      <motion.div className="Sidebar"
      
      variants={SidebarVarients}
      animate={window.innerWidth<=768?`${expanded}`: ''}
      
      >
        {/* {logo} */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* {menu} */}

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                {item.icon}
                {/* <item.icon/> */}
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <Icon icon="uil:signout" width="25" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
