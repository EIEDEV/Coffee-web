import React from "react";
import "./about.css";
import { GiCoffeeCup } from "react-icons/gi";
import AboutImage from "../../assets/IMG-20230910-WA0007.jpg";
import CV from "../../assets/Emmanuel_Iheanyichukwu_Ezeagu_academic_cv.pdf";
import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <div className="container about__self">
        <img src={AboutImage} alt="" />
        <div className="about__text">
          <h3>Discover Coffee Rizza </h3>
          <p>Elevating Your Coffee Experience</p>
          <big>
            At Coffee Rizza <GiCoffeeCup />, we are on a mission to redefine
            your coffee moments. Our carefully curated selection ofpremium
            beans, sourced from the world's most renowned coffee regions.
          </big>
          <big>
            With expert craftsmanship and a commitment to quality, join us in
            savoring the art of coffee, one cup at a time.
          </big>
          <a href={CV} download className="btn about__btn">
            Download Menu <BiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
