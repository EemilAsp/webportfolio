import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtilities";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCast.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header_option ";
    if (index <= (TOTAL_SCREENS.length-1)) classes += "header_option_separator ";

    if (selectedScreen === index) classes += "selected_header_option ";
    return classes;
  };

  const switchScreen = (index, Screen) => {
    let screenComponent = document.getElementById(Screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };


  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
      <div
        className="header_container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header_parent">
          <div
            className="header_hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header_hamburger_bars" icon={faBars} />
          </div>
          <div className="header_logo">
            <span>Welcome</span>
          </div>
          <div
            className={
              showHeaderOptions
                ? "header_options show_hamburger_options"
                : "header_options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
  );
}
