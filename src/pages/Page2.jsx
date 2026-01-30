import React from 'react'
import FlowingMenu from '../Components/FlowingMenu.jsx'
import About from "../pages/About.jsx"

const Page2 = () => {
    const demoItems = [
      {
        link: "/project",
        text: "Projects",
        image:
          "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        link: "/about",
        text: "About",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        link: "#",
        text: "Case Studies",
        image:
          "https://media.istockphoto.com/id/1356364230/photo/young-japanese-man-in-working-on-desktop-computer-diverse-multi-ethnic-team-of-programmers.jpg?s=2048x2048&w=is&k=20&c=UTRRAwrqPEgeWDW0avbTQ_9gfkmHyR-pJI860VZnmpk=",
      },
      {
        link: "/contant",
        text: "Contant",
        image:
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <FlowingMenu
        items={demoItems}
        speed={15}
        textColor="#ffffff"
        bgColor="#060010"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#060010"
        borderColor="#ffffff"
      />
    </div>
  );
}

export default Page2