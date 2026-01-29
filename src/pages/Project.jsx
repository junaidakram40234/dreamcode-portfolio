import React from 'react'
import DomeGallery from "../Components/DomeGallery.jsx";
import logo from "../images/icons/code-s-slash-fill.svg";
import CardNav from "../Components/Cardnav.jsx"



const Project = () => {
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
  return (
    <div className="bg-black h-screen w-full">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="elastic.out(1,0.8)"
        theme="light"
      />
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={5}
        segments={34}
        dragDampening={2}
        grayscale={false}
        fitBasis="width"
        openedImageHeight="600px"
      />
    </div>
  );
}

export default Project