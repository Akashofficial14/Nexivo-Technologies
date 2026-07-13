import React from "react";

const Contact = () => {
  return (
    <div
      className="fof-nav contact w-full px-3 pt-15 py-7 bg-black flex flex-col justify-center items-center gap-4 text-white"
      id="contact"
    >
      <h1 className=" text-4xl font-semibold text-center lg:text-6xl">
        Know <span className="text-[#FF9999]"> me </span> <br />
        <span className="text-[#AFFFA3]">Beyond</span> the Screen{" "}
        <span className="text-[#AFFFA3] rounded-full">.</span>
      </h1>
      <p className="text-md font-semibold text-center lg:text-xl">
        Let's Connect the Dots
      </p>
      <img
        className="w-full object-cover object-center rounded-xl transition-transform hover:scale-110 lg:w-130"
        src="/akash.jpg"
        alt=""
      />
               <p className="text-zinc-500 leading-relaxed text-center">
            I’m always looking for the next challenge to engineer and the next
            story to tell through code. <br /> Got a <span className="text-[#AFFFA3]">big idea?</span> Need a <span className="text-[#FF9999]">full-stack
            partner?</span> Drop a signal below <img className="w-10 inline text-white" src="https://img.icons8.com/?size=100&id=FERQl1QLZFQt&format=png&color=000000" alt="" />
          </p>
      <div className="links flex gap-2 justify-center items-center flex-wrap lg:gap-25 ">
        <div className="one flex gap-1 justify-center items-center px-3 py-1 rounded-2xl transition-transform cursor-pointer hover:scale-110 lg:bg-transparent  ">
          <img
            className="w-7"
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt=""
          />
          <a href="https://www.linkedin.com/in/akash-warade-b2907226b" className="text-lg font-light lg:text-3xl">Linkedin</a >
        </div>
        <div className="two flex gap-1 justify-center items-center px-3 py-1 rounded-2xl transition-transform cursor-pointer hover:scale-110 lg:bg-transparent ">
          <img
            className="w-7"
            src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
            alt=""
          />
          <a href="mailto:akashwaradeofficial@gmail.com" className="text-lg font-light lg:text-3xl">Mail</a >
        </div>
        <div className="three flex gap-1 justify-center items-center px-3 py-1 rounded-2xl transition-transform cursor-pointer hover:scale-110 lg:bg-transparent ">
          <img
            className="w-7"
            src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            alt=""
          />
          <a href="https://www.instagram.com/akashwarade_14?igsh=MXVuazhlMWd6cmo3YQ==" className="text-lg font-light lg:text-3xl">Instagram</a >
        </div>
      </div>
    </div>
  );
};

export default Contact;
