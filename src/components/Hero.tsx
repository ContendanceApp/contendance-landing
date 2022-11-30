import React from "react";
import BadgeDownload from "../components/BadgeDownload";

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-r main-gradient h-full relative">
      <div
        className="hero-waves absolute w-full h-full bg-bottom bg-no-repeat bg-auto"
        style={{
          backgroundImage: "url(/assets/images/waves/waves.svg",
        }}
      ></div>
      <div className="hero-section container sm:px-10 px-8 2xl:h-screen h-full mx-auto flex justify-between items-center relative">
        <div className="hero-text">
          <p
            className="uppercase font-semibold sub-header-text tracking-wide"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            The Easiest Way to Presence
          </p>
          <h1
            className="header-text tracking-tight capitalize 2xl:text-5xl sm:text-4xl text-3xl leading-tight mb-1"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            Contendance
          </h1>
          <p
            className="sub-header-text max-w-lg tracking-tight lg:text-base mt-5"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            Permudah pencatatan presensi instansi anda dengan Contendance.
            Presensi simple tanpa antrian!
          </p>
          <div className="badge-hero-parent 2xl:my-10 my-7">
            <BadgeDownload />
          </div>
        </div>
        <div
          className="hero-img 2xl:mt-10 sm:mt-20 absolute -right-64 w-52 top-10"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <img
            src="/assets/images/contendance-mockup-phone.png"
            alt="Mockup Contendance"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
