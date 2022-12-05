import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_parent">
        <div className="profile_details">
          <div className="icons">
            <div className="icon_list">
              <a href="https://www.linkedin.com/in/eemil-aspholm/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/EemilAsp">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile_details_name">
            <span className="primary_text">
              {" "}
              Hello, I am{" "}
              <span className="highlighted_text">Eemil Aspholm</span>
            </span>
          </div>

          <div className="profile_details_role">
            <span className="primary_text">
              {" "}
              <h1>
                {" "}
                <TypeAnimation
                  sequence={[
                    "Master's Student 🎓",
                    2000,
                    "Data enthusiast 📊",
                    2000,
                    "Fullstack dev 🖥️",
                    2000,
                    "Future talent ⭐",
                    2000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile_role_tagline">
                Interested in the possibilities of artificial intelligence and
                machine learning
              </span>
            </span>
          </div>
          <div className="profile_options">
            <button className="button primary_button"
            onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
            > Contact Me </button>
            <a href="Resume.pdf" download="Eemil Aspholm.pdf">
              <button className="button highlighted_button">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile_picture">
          <div className="profile_picture_background"></div>
        </div>
      </div>
    </div>
  );
}
