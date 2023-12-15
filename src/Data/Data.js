import { Icon } from "@iconify/react";
// import { Icon } from '@iconify/react';

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: <Icon icon="lucide:home" width="25" />,
    heading: "Dashboard",
  },
  {
    icon: <Icon icon="akar-icons:clipboard" width="25" />,
    heading: "Orders",
  },
  {
    icon: <Icon icon="humbleicons:users" width="25" />,
    heading: "Customers",
  },
  {
    icon: <Icon icon="uil:package" width="25" />,
    heading: "Products",
  },
  {
    icon: <Icon icon="gala:chart" width="25" />,
    heading: "Analytics",
  },
];



export const CardsData = [
{
  title:"Sales",
  color: {
    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
  },
   barValue: 70,
   value: "25,970",
   png: <Icon icon="uil:usd-square" width="25" />,
   series:[
    {
      name: "Sales",
      data: [31,40,28,51,42,109,100],
     
    },
   ],
},

{
  title:"Revenue",
  color: {
    backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
    boxShadow: "0px 10px 20px 0px #FDC0C7",
  },
   barValue: 80,
   value: "14,270",
   png: <Icon icon="uil:money-withdrawal" width="25" />,
   series:[
    {
      name: "Revenue",
      data: [10,100,50,70,80,30,40],
    },
   ],
},

{
  title:"Expenses",
  color: {
    backGround:
    "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
  boxShadow: "0px 10px 20px 0px #F9D59B",
  },
   barValue: 60,
   value: "4,270",
   png: <Icon icon="akar-icons:clipboard" width="25" />,
   series:[
    {
      name: "Expenses",
      data: [10,25,15,30,12,15,20],
    },
   ],
},

]

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Kunal Singh",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Rohit Singh",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Priyanshu Singh",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
