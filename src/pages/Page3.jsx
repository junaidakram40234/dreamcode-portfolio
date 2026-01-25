import React from 'react'
import LogoLoop from "../Components/LogoLoop.jsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import ShinyText from "../Components/ShinyText.jsx";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Antigravity from "../Components/Antigravity.jsx";

const Page3 = () => {
    const techLogos = [
      { node: <SiReact />, title: "React", href: "https://react.dev" },
      { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
      {
        node: <SiTypescript />,
        title: "TypeScript",
        href: "https://www.typescriptlang.org",
      },
      {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com",
      },
    ];
    const companyLogos = [
      { node: <FaLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com" },
      { node: <FaInstagram />, title: "Instagram", href: "https://www.instagram.com" },
      {
        node: <FaTwitter />,
        title: "Twitter",
        href: "https://www.twitter.com",
      },
      {
        node: <FaGithub />,
        title: "Github",
        href: "https://github.com",
      },
    ];
  return (
    <div className="h-screen pt-10 w-full bg-black ">
      <div className="h-[20%] w-full">
        <div className="h-[50%] w-full flex items-center justify-center">
          <ShinyText
            className="text-[clamp(28px,4vw,60px)] font-bold h-full w-full text-center flex items-center justify-center"
            text="Technologies I Work With"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
        <div className="h-[50%] w-full text-white flex items-center justify-center">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut={true}
            fadeOutColor="bg-black"
            scaleOnHover={true}
            useCustomRender={false}
          />
        </div>
      </div>
      <div className="h-[20%] w-full mt-10">
        <div className="h-[50%] w-full flex items-center justify-center">
          <ShinyText
            className=" font-bold h-full w-full text-[clamp(28px,4vw,60px)] text-center flex items-center justify-center"
            text="Companies I Work With"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
        <div className="h-[50%] w-full text-white flex items-center justify-center">
          <LogoLoop
            logos={companyLogos}
            speed={100}
            direction="right"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut={true}
            fadeOutColor="bg-black"
            scaleOnHover={true}
            useCustomRender={false}
          />
        </div>
      </div>
      <div className="h-[56%] w-full relative">
        {/* Antigravity background */}
        <div className="absolute inset-0 z-10">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>

        {/* Footer */}
        <footer className="absolute w-full h-full top-0 left-0 text-white flex flex-col justify-between z-20 pointer-events-none">
          {/* Top divider glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="mx-auto max-w-7xl px-6 py-12 flex-1 flex flex-col justify-between">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {/* Brand */}
              <div className="space-y-4 pointer-events-auto">
                <h3 className="text-xl font-black tracking-wide">DreamCode</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                  Crafting immersive web experiences with modern technologies,
                  clean architecture, and motion-driven UI.
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-4 mt-4 text-white/70">
                  <a
                    href="#"
                    className="hover:text-white transition pointer-events-auto"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition pointer-events-auto"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition pointer-events-auto"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition pointer-events-auto"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>

              {/* Links */}
              <div className="pointer-events-auto">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  Links
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>
                    <a className="hover:text-white transition" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition" href="#">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="pointer-events-auto">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  Resources
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>
                    <a className="hover:text-white transition" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition" href="#">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition" href="#">
                      Open Source
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact / CTA */}
              <div className="space-y-4 pointer-events-auto">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  Let’s work together
                </h4>
                <p className="text-sm text-white/60">
                  Have an idea or project in mind?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl
                       bg-white/10 px-5 py-3 text-sm font-semibold
                       backdrop-blur transition
                       hover:bg-white/20 pointer-events-auto"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pointer-events-auto">
            <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/50">
                © {new Date().getFullYear()} DreamCode. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs text-white/50">
                <a
                  href="#"
                  className="hover:text-white transition pointer-events-auto"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition pointer-events-auto"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Page3