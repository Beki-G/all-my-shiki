import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GuildCrest from "../assets/GuildCrest.jpg";

const About = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <img
        src={GuildCrest}
        className="object-center-top mx-auto mt-8 object-contain rounded-full h-48 sm:h-64 md:h-96 md:mt-10"
        alt="Semi-Causal Guild Crest"
      />

      <div className="bg-grey-200 sm:w-4/5 mx-auto">
        <h1 className="font-semibold mt-8 text-center tracking-wider text-3xl sm:text-5xl">
          About
        </h1>

        <section className="w-4/5 mx-auto mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          aliquet metus at lacus sodales, sit amet congue ante posuere. Aenean
          pretium, lacus non ornare elementum, elit enim iaculis mi, eleifend
          scelerisque eros massa sit amet orci. Quisque bibendum nisi ut ex
          mollis tristique. Phasellus aliquet ipsum ut sem accumsan, vel
          pulvinar metus hendrerit. Sed enim sapien, sodales ac urna ut, rhoncus
          tincidunt ligula. Praesent ipsum nibh, semper vel enim sed, finibus
          euismod ipsum. In ultricies scelerisque finibus. Curabitur ex quam,
          semper ut lacus sed, luctus fringilla purus. Pellentesque vestibulum
          odio sed dolor scelerisque porta et feugiat turpis. Nulla fringilla
          quis tellus id venenatis. Etiam malesuada pellentesque sollicitudin.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </section>
      </div>
    </div>
  );
};

export default About;
