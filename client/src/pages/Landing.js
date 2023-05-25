import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="logo" />
        <div class="container page">
          {/* info */}
          <div class="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby next level banjo church-key, big mood mukbang street art
              street art palo santo squid fixie affogato mumblecore chillwave.
              Adaptogen bodega boys ramps meditation praxis.
            </p>
            <button class="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="" class="img" />
        </div>
      </nav>
    </main>
  );
};

export default landing;
