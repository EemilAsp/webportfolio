import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './About.css'

export default function About(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONST = {
    description:
      "Data analytics M.Sc. student at LUT University. Future professional in business digitalization and data-oriented management with comprehensive programming and data analytics knowledge. Recognized for ability to work under pressure, learn quickly and develop ideas outside the box.",
    highlights: {
      bullets: [
        "Analyzing and visualizing data",
        "Full Stack web development",
        "Java and Javascript",
        "Python and C",
        "Excel and PowerBi",
        "SQL and PostgreSQL",
        "2x TIMES Local Qualification Winner"
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighLight = () => {
    return SCREEN_CONST.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight_blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about_me_container screen_container fade_in" id={props.id || ""}>
      <div className="about_me_parent">
        <ScreenHeading title={"About me"} subHeading={"Who am i?"} />
        <div className="about_me_card">
          <div className="about_me_profile"></div>
          <div className="about_me_details">
            <span className="about_me_description">
              {SCREEN_CONST.description}
            </span>
            <div className="about_me_highlights">
              <div className="highlight_heading">
                <span>{SCREEN_CONST.highlights.heading}</span>
              </div>
              {renderHighLight()}
            </div>
            <div className="about_me_options">
              <button className="button primary_button"
              onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
              > Contact Me </button>
              <a href="Resume.pdf" download="Eemil Aspholm.pdf">
                <button className="button highlighted_button">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
