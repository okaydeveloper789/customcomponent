import React from "react";
import PlantsGraphic from "../../static/plants.svg";

const Pilot = () => {
  return (
    <div className="columns">
      <div className="column is-half">
        <div className="has-text-centered">
          <div>
            <h1 className="title has-text-centered has-text-left">
              Vennootschap of niet?
            </h1>
            <p
              className="has-text-left"
              style={{
                maxWidth: "500px",
                margin: "0 auto",
                position: "relative",
                fontSize: 18,
              }}
            >
              Vul de onderstaande gegevens in en kom in minder dan{" "}
              <span className="has-text-primary">drie minuten</span> te weten of
              een vennootschap voor jou interessant is!
            </p>
          </div>
        </div>
      </div>
      <div className="column">
        <img
          className="p-5"
          src={PlantsGraphic}
          alt="chartIcon"
          style={{ maxWidth: "250px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Pilot;
