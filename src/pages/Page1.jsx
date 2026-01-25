import React from 'react'
import CardNav from "../Components/Cardnav.jsx";
import logo from "../images/icons/code-s-slash-fill.svg";
import LightRays from "../Components/LightRay.jsx";
import CurvedLoop from "../Components/CurvedLoop.jsx";
import ProfileCard from "../Components/ProfileCard.jsx";
import ProfilePic from "../images/profile/bohemian-man-with-his-arms-crossed.png"
import ClickSpark from '../Components/ClickSpark.jsx';
const Page1 = () => {
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
    <ClickSpark
      className="z-100"
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="h-screen w-full  overflow-hidden">
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
        <div className="absolute h-full w-full top-0 left-0 z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="absolute h-[80%] flex items-center justify-center w-full top-0 left-0 z-20 overflow-hidden">
          <CurvedLoop
            className="rotate-3 "
            marqueeText="Dream Code✦ "
            speed={2}
            curveAmount={400}
            direction="right"
            interactive={false}
          />
        </div>
        <div
          className="absolute h-full w-full top-0 left-0 z-30 flex items-center justify-center transform
    scale-100
    max-[375px]:scale-[0.60]
    max-[425px]:scale-[0.70]
    transition-transform
    duration-300"
        >
          <ProfileCard
            className="mt-20"
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl={ProfilePic}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            showIcon={true}
            iconUrl={logo}
            showBehindGlow={true}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div>
    </ClickSpark>
  );
}

export default Page1