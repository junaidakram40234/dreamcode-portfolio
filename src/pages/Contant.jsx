import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPinterest, FaDribbble } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import TargetCursor from "../Components/TargetCursor.jsx";
import CardnavForContant from "../Components/CardnavForContant.jsx";
import logo from "../images/icons/code-s-slash-fill.svg"

const Contant = () => {
    const items = [
      {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
          { label: "Company", ariaLabel: "About Company" },
          { label: "Careers", ariaLabel: "About Careers" },
        ],
      },
      {
        label: "Projects",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
          { label: "Featured", ariaLabel: "Featured Projects" },
          { label: "Case Studies", ariaLabel: "Project Case Studies" },
        ],
      },
      {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
          { label: "Email", ariaLabel: "Email us" },
          { label: "Twitter", ariaLabel: "Twitter" },
          { label: "LinkedIn", ariaLabel: "LinkedIn" },
        ],
      },
    ];
const lnk = [
  {
    icon: <FaInstagram size={30} />,
    name: "Instagram",
    link: "https://Instagram.com",
    color: "bg-pink-500",
    hover: "hover:bg-pink-600",
  },
  {
    icon: <FaXTwitter size={30} />,
    name: "X",
    link: "https://x.com",
    hover: "hover:bg-zinc-700",
  },
  {
    icon: <FaFacebook size={30} />,
    name: "Facebook",
    link: "https://Facebook.com",
    hover: "hover:bg-blue-900",
  },
  {
    icon: <FaWhatsapp size={30} />,
    name: "Whatsapp",
    link: "https://web.whatsapp.com",
    hover: "hover:bg-green-600",
  },
  {
    icon: <FaThreads size={30} />,
    name: "Threads",
    link: "https://www.threads.com",
    hover: "hover:bg-zinc-900",
  },
  {
    icon: <FaPinterest size={30} />,
    name: "Pinterest",
    link: "https://www.pinterest.com",
    hover: "hover:bg-red-900",
  },
  {
    icon: <FaDribbble size={30} />,
    name: "Dribbble",
    link: "https://dribbble.com",
    hover: "hover:bg-pink-300",
  },
];



  return (
    <div className="bg-black h-screen w-full text-white flex items-center justify-center gap-6 cursor-none">
      <CardnavForContant
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#1d0e38"
        menuColor="#fff"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="elastic.out(1,0.8)"
        theme="light"
      />
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      {lnk.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`cursor-target h-30 w-30 border rounded-3xl flex flex-wrap items-center justify-center cursor-none transition $ ${item.hover}`}
        >
          {item.icon}
          <span className="mt-2">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Contant;
