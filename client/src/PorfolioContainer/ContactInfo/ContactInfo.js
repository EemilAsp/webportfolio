import React, {useState} from "react";
import { TypeAnimation } from "react-type-animation";
import axios from 'axios'
import {toast} from 'react-toastify'
import imgBack from "../../../src/images/contact.jpg";
import load from "../../../src/images/load.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './ContactInfo.css'

export default function ContactInfo(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [banner, setBanner] = useState("")
  const [bool, setBool] = useState(false)


  const handleName = (e) =>{
    setName(e.target.value);
  };
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  };
  const handleMessage = (e) =>{
    setMessage(e.target.value);
  };

  const submitForm = async(e) =>{
    e.preventDefault();
    try{
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if(name.length === 0 || email.length === 0 || message.length === 0){
        toast.error(res.data.msg)
        setBool(false)
      }else if(res.status === 200){
        toast.success(res.data.msg)
        setBool(false)
        setName("");
        setEmail("");
        setMessage("");
      }
    }catch(error){
      console.log(error);
    }
  }



  return (
    <div className="main_container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets connect!"} title={"Contact Me"} />
      <div className="central_form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              sequence={["Email me 📧", 1000, "Connect 🌍", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </h2>
          <a href="https://www.linkedin.com/in/eemil-aspholm/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://github.com/EemilAsp">
            <i className="fa fa-github"></i>
          </a>
        </div>

        <div className="back_form">
          <div className="img_back">
            <img src={imgBack} alt="no connection"/>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text"
              onChange={handleName}
              value={name}
            />
            <label htmlFor="email">Email</label>
            <input type="email"
              onChange={handleEmail}
              value={email}
            />
            <label htmlFor="message">Message</label>
            <textarea type="text"
            onChange={handleMessage}
            value={message}
            />

            <div className="send_button">
              <button type="submit">
                send<i className="fa fa-paper-plane"/>
                {bool?(<b className="load">
                  <img src={load} alt="no connection"/>
                  </b>):("")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
