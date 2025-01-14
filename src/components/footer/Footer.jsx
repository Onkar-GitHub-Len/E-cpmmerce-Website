import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { footerLinks } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import payment from "../../assets/payment.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Rise Of Shopping.</h1>
        <p className="footer-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          optio totam. Voluptatibus assumenda laboriosam possimus praesentium
          mollitia natus, omnis voluptates.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FaFacebook />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e44059" }}>
            <FaInstagram />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <CiTwitter />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e60023" }}>
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaLocationDot style={{ marginRight: "10px" }} />
          123 Street, City
        </div>
        <div className="contact-item">
          <FaPhoneAlt style={{ marginRight: "10px" }} />
          +915342345431
        </div>
        <div className="contact-item">
          <IoMdMail style={{ marginRight: "10px" }} />
          helpdesk@gmail32.com
        </div>
        <img src={payment} className="payment" alt="" />
      </div>
    </div>
  );
};

export default Footer;
