import React, { useContext, useEffect } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import contact from "../../img/contact.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import { CgMail } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div
      className="contact_main"
      style={{ color: darkMode ? "white" : "" }}
      id="contact"
      data-aos-duration="5000"
      data-aos-delay="500">
      <div className="heding_cont">
        <span style={{ color: darkMode ? "white" : "" }} className="get_touch">
          Get in Touch
          <span className="contact"> Contact </span> me
        </span>
      </div>
      <div className="contact_flex"  >
        {/* <img
          src={contact}
          alt="msg"
          className="massge_img"
          data-aos="slide-left"
        /> */}

        <div className="contact-form" style={{ width:"50%"}} data-aos="slide-right">
          <div className="c-right">
            <div style={{display:"flex", justifyContent:"space-between" ,width:"100%", flexWrap:"wrap"}}>
            <div className="up_cont">
              <BsFillTelephoneFill />
              <p>+91 9921857946</p>
            </div>
            <div>
              <HiOutlineMail className="md" />
              <p>shubhamkhangar45@gmail.com</p>
            </div>
            <div>
              <BsGithub />
              <p>https://github.com/ShubhamKhangar089</p>
            </div>
            </div>
            <div className="con_img">
              <a
                href="https://www.linkedin.com/in/shubham-khangar/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkdin">
                <BsLinkedin />
                <p>LinkedIn</p>
              </a>
              <a
                href="https://github.com/ShubhamKhangar089"
                target="_blank"
                rel="noopener noreferrer"
                className="git_con">
                <BsGithub />
                <p>GitHub</p>
              </a>
              <a
                href="shubhamkhangar45@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="git_con gmail">
                <CgMail />
                <p>Gmail</p>
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwkyadvj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="user w-full "
        name="name"
        id="name"
        placeholder="Name"
      />

      <input
        id="email"
        type="email"
        name="email"
        className="user w-full"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="user w-full "
        placeholder="Messages"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="button_su hover:cursor-pointer">
        Submit
      </button>
    </form>
  );
}
