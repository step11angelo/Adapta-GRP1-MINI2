import React from "react";
import { servicesBanner } from "../assets/images";
import "../css/services.css";
import { standardPackages, premiumPackages } from "../data/Packages";

const Services = () => {
  return (
    <>
      <section className="banner">
        <img src={servicesBanner} alt="" />
        <div className="cover"></div>
        <h2>Our Services</h2>
      </section>

      <article className="article-center">
        <h2 className="section--header">What We Offer</h2>

        <p>
          Leocadio's Event offers planning, styling, coordination and stationary
          design services for couples who value curated experiences and genuine
          moments. We work with our clients very closely throughout the planning
          process. so, it is important for us to work with clients that
          reverberate with our design aesthetic, our approach to planning, and
          share our core beliefs on diversity and inclusion. Our ideal clients
          value having a team of professionals on board to make their wedding
          planning process smooth and trust our guidance to bring their wedding
          vision to life.
        </p>
      </article>

      <h2 className="section--header packages-category">Standard Packages</h2>

      <div className="packages--container">
        {standardPackages.map((item) => {
          const {
            packId,
            packageName,
            paxOption1,
            paxOption2,
            courses,
            styling1,
            styling2,
            styling3,
            styling4,
            styling5,
            freebies1,
            freebies2,
            freebies3,
          } = item;

          return (
            <article className="package-card" key={packId}>
              <h4 className="package-name">{packageName}</h4>
              <h3 className="pax-count">{paxOption1}</h3>
              <h3 className="pax-count">{paxOption2}</h3>

              <ul>
                <h4 className="items-header">Catering:</h4>
                <li className="package-item">{courses} Courses</li>
              </ul>

              <ul>
                <h4 className="items-header">Styling:</h4>
                <li className="package-item">{styling1}</li>
                <li className="package-item">{styling2}</li>
                <li className="package-item">{styling3}</li>
                <li className="package-item">{styling4}</li>
                <li className="package-item">{styling5}</li>
              </ul>

              <ul>
                <h4 className="items-header">Freebies:</h4>
                <li className="package-item">{freebies1}</li>
                <li className="package-item">{freebies2}</li>
                <li className="package-item">{freebies3}</li>
              </ul>
            </article>
          );
        })}
      </div>

      <h2 className="section--header packages-category">Premium Packages</h2>

      <div className="packages--container">
        {premiumPackages.map((item) => {
          const {
            packId,
            packageName,
            paxOption1,
            paxOption2,
            courses,
            styling1,
            styling2,
            styling3,
            styling4,
            styling5,
            freebies1,
            freebies2,
            freebies3,
          } = item;

          return (
            <article className="package-card" key={packId}>
              <h4 className="package-name">{packageName}</h4>
              <h3 className="pax-count">{paxOption1}</h3>
              <h3 className="pax-count">{paxOption2}</h3>

              <ul>
                <h4 className="items-header">Catering:</h4>
                <li className="package-item">{courses} Courses</li>
              </ul>

              <ul>
                <h4 className="items-header">Styling:</h4>
                <li className="package-item">{styling1}</li>
                <li className="package-item">{styling2}</li>
                <li className="package-item">{styling3}</li>
                <li className="package-item">{styling4}</li>
                <li className="package-item">{styling5}</li>
              </ul>

              <ul>
                <h4 className="items-header">Freebies:</h4>
                <li className="package-item">{freebies1}</li>
                <li className="package-item">{freebies2}</li>
                <li className="package-item">{freebies3}</li>
              </ul>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Services;
