import React from "react";
import "./service.css";
import Card from "../../Card/card";
import data from "./data";

const Service = () => {
  return (
    <section id="service">
      <div className="container service__container">
        <h2>Our Service</h2>
        <div className="service__menu">
          {data.map((item) => (
            <Card classname="service__card" key={item.id}>
              <h3>{item.icon}</h3>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
