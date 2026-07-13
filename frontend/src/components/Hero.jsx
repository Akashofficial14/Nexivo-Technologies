import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
     <div className="hero w-full ">
        <div className="flex justify-center items-center flex-col px-3 gap-6 lg:gap-5" id='about'>
          <h1 className="fof text-5xl font-semibold text-center lg:text-5xl">
            <span className="text-5xl font-semibold text-[#957EE5] hover:text-black lg:text-6xl">
              {" "}
              I'm Akash <br />{" "}
            </span>
            a full stack web developer{" "}
          </h1>
          <img className='w-120'src="/3d model.png" alt="" />
          <h3 className="fof text-4xl font-semibold text-center lg:text-5xl">
            I don't just <span className="text-[#F3743C]">build websites</span>{" "}
            I build the interfaces people live in.
          </h3>
        </div>
      </div>
  )
}

export default Hero

        // <div className="flex justify-center items-center flex-col gap-25">
        //   <h1 className="fof text-7xl font-semibold text-center">
        //     <span className="text-9xl font-semibold text-[#957EE5] hover:text-black">
        //       {" "}
        //       I'm Akash <br />{" "}
        //     </span>
        //     a full stack web developer{" "}
        //   </h1>
        //   <h3 className="fof text-7xl font-semibold text-center">
        //     I don't just <span className="text-[#F3743C]">build websites</span>{" "}
        //     I build the interfaces people live in.
        //   </h3>
        // </div>
