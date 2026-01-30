import React from 'react'
import Carousel from "../Components/Carousel.jsx";
import Particles from "../Components/Particles.jsx";

const Reviews = () => {
  return (
    <div className="bg-black h-130 w-full  gap-6 relative">
      <div className="h-full w-full">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation
          pixelRatio="1"
        />
      </div>
      <div className='h-full w-full flex items-center justify-center flex-col absolute top-0 left-0'>
      
      <h1 className='text-white text-4xl'>Reviews</h1>
      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={2000}
        pauseOnHover={true}
        loop={true}
        round={true}
      /></div>
    </div>
  );
}

export default Reviews