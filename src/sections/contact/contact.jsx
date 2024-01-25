import React from "react";
import "./contact.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__socials">
          <h5>Coffee Rizza</h5>
          <a href="www.google.com">
            <AiFillGoogleCircle />
          </a>
          <a href="www.twitter.com">
            <AiOutlineFacebook></AiOutlineFacebook>
          </a>
          <a href="www.instagram.com">
            <AiFillTwitterCircle />
          </a>
          <a href="www.facebook.com">
            <AiFillInstagram></AiFillInstagram>
          </a>
        </div>
        <div className="contact__address">
          <h5>Address:</h5>
          <p>123, Ridyah Street Mainville, Countryside, Staevalley.</p>
          <p>Postal Code: 020406</p>
        </div>
        <div className="contact__phone">
          <h5>Phone Numbers: </h5>
          <p>+1(555) 123-8976 (US)</p>
          <p>+44 20 1238 9876 (UK)</p>
          <p>+61 2 1238 98765 (AUS)</p>
          <p>+49 30 12389876 (GER)</p>
          <p>+81 3 1238 9876 (Japan)</p>
        </div>
        <div className="contact__email">
          <h5>Email Address:</h5>
          <a>coffee.rizza@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
