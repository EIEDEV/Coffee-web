import React from "react";
import "./review.css";
import { BiCoffeeTogo } from "react-icons/bi";
import data from "./data";
import Card from "../../Card/card";

const Review = () => {
  return (
    <section id="review">
      <h2>
        Review <BiCoffeeTogo />
      </h2>
      <p>What people say about Coffee Rizza </p>
      <div className="container review__container">
        {data.map((item) => (
          <Card key={item.id} classname="review__card">
            <p>{item.text}</p>
            <big>{item.sender}</big>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Review;
