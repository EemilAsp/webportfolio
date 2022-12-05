import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const Resume = (props) => {
    return (
      <div className="resume_heading">
        <div className="resume_main_heading">
          <div className="heading_bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
                {props.fromDate && props.toDate ? (
            <div className="heading_date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
          </div>  
          <div className="resume_sub_heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume_heading_description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Python", ratingPercentage: 95 },
    { skill: "C", ratingPercentage: 75 },
    { skill: "Javascript", ratingPercentage: 65 },
    { skill: "React Js", ratingPercentage: 65 },
    { skill: "SQL", ratingPercentage: 75 },
    { skill: "PostgreSQL", ratingPercentage: 65 },
    { skill: "Excel and VBA", ratingPercentage: 90 },
    { skill: "PowerBI", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "Portfolio Website project",
      duration: { toDate: "2022" },
      description:
        "Portfolio project website to showcase all my details and achievements in one place.",
      subHeading: "Technologies Used: React JS and Bootstrap",
    },
    {
      title: "Full Stack Open @ University of Helsinki",
      duration: { toDate: "2022- " },
      description:
        "Open university course to learn modern web development in React, Redux, Node.js, MongoDB, GraphQL and TypeScript.",
      subHeading:
        "Technologies Used: React, Redux, Node.js, MongoDB, GraphQL and TypeScript",
    },
    {
      title: "Dynamic Waste collection simulation",
      duration: { toDate: "2022" },
      description:
        "Simulation of dynamic and static waste collection as a part of Bachelors thesis at LUT University",
      subHeading:
        "Technologies Used: Excel, Python (Pandas, Sklearn, Folium) and Docker",
    },
  ];

  const resumeDetails = [
    <div className="resume_screen_container" key="education">
      <Resume
        heading={"LUT University"}
        subHeading={"Master of Science, Data-analytics in Decision Making"}
        fromDate={"2023"}
        toDate={"2026"}
      />
      <Resume
        heading={"LUT University"}
        subHeading={"Bachelor's degree, Industrial Engineering and Management"}
        fromDate={"2020"}
        toDate={"2023"}
      />
      <Resume
        heading={"Shadow Ridge High School Las Vegas, Nevada"}
        subHeading={"Exchange student"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,



    <div className="resume_screen_container" key="work_experience">
      <Resume
        heading={"L&T Ympäristöpalvelut Oy"}
        subHeading={"Data analyst trainee"}
        fromDate={"2022"}
        toDate={"present"}
      />
      <div className="experience_description">
        <span className="resume_description_text">
          Currently working as a data analyst trainee mostly working with Excel
          and PowerBI
        </span>
      </div>
      <div className="experience-description">
        <span className="resume_description_text">
          <div>Worked on projects that included such topics:</div> 
          <ul>
          <li>Customer experience analysis</li>
          <li>Market share analysis</li>
          <li>Dynamic waste collection opportunities</li>
          <li>Customer contact analysis</li>
          <li>Smaller projects related to data</li>
          </ul>
        </span>
        <br />
      </div>
      </div>,


      <div
        className="resume_screen_container programming_skills_container"
        key="programming_skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill_parent" key={index}>
            <div className="heading_bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill_percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active_percentage_bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      <div className="resume_screen_container projects_container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <Resume
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            toDate={projectDetails.duration.toDate}
          />
        ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected_bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet_logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet_label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div style={carousalOffSetStyle.style} className="resume_details_carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume_container screen_container fade_in" id={props.id || ""}>
      <div className="resume_content">
        <ScreenHeading title={"Resume"} subHeading={"Bio Details"} />
        <div className="resume_card">
          <div className="resume_bullets">
            <div className="bullet_container">
              <div className="bullet_icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume_bullets_details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
