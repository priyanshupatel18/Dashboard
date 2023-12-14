import React, {useState} from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";

import { SidebarData } from "../../Data/Data";

import { Icon } from '@iconify/react';

const Sidebar = () => {

const [selected,setSelected] = useState(0)

  return (
    <div className="Sidebar">
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
            <div className={selected===index?"menuItem active": "menuItem"}
            key={index}
            onClick={()=>setSelected(index)}
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
    </div>
  );
};

export default Sidebar;
