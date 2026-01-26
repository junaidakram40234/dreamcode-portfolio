import React from 'react'
import CardNav from "../Components/Cardnav.jsx";
import logo from "../images/icons/code-s-slash-fill.svg";
import TextType from "../Components/TextType.jsx";
import Lanyard from "../Components/Lanyard.jsx";
import styled from "styled-components";

const About = () => {
  

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
 const StyledWrapper = styled.div`
   .button {
     width: 50px;
     height: 50px;
     border-radius: 50%;
     background-color: rgb(20, 20, 20);
     border: none;
     font-weight: 600;
     display: flex;
     align-items: center;
     justify-content: center;
     box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
     cursor: pointer;
     transition-duration: 0.3s;
     overflow: hidden;
     position: relative;
   }

   .svgIcon {
     width: 24px;
     transition-duration: 0.3s;
   }

   .svgIcon path {
     fill: white;
   }

   .button:hover {
     width: 140px;
     border-radius: 50px;
     transition-duration: 0.3s;
     background-color: #00d3f3;
     align-items: center;
   }

   .button:hover .svgIcon {
     /* width: 20px; */
     transition-duration: 0.3s;
     transform: translateY(-200%);
   }

   .button::before {
     position: absolute;
     bottom: -20px;
     content: "content me";
     color: white;
     /* transition-duration: .3s; */
     font-size: 0px;
   }

   .button:hover::before {
     font-size: 13px;
     opacity: 1;
     bottom: unset;
     /* transform: translateY(-30px); */
     transition-duration: 0.3s;
   }
 `;
  return (
    <div className="h-screen w-full bg-[#060010] flex relative">
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
      <div className="absolute z-100 w-[52vw] h-[50vh] top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white flex items-start justify-start flex-col gap-10">
        <div className=" w-full flex items-start justify-start gap-7">
          <h1 className="text-[6em] font-bold ">I'm a</h1>
          <TextType
            text={[
              "Web Developer",
              "Web Designer",
              "App Designer",
              "graphic designer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            className="  text-cyan-400 text-[6em]"
          />
        </div>
        <p className="text-2xl font-thin">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
          Provident numquam aliquam vel qui, quis <br /> voluptates fugit
          explicabo illo, eaque doloribus cum possimus <br /> nemo natus commodi
          officiis. Perferendis culpa ut odio.
        </p>
        <StyledWrapper>
          <button className="button">
            <svg
            className='svgIcon'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
            </svg>
          </button>
        </StyledWrapper>
      </div>

      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        className="relative -z-10"
      />
    </div>
  );
}

export default About