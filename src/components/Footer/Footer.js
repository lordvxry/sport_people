import React from "react";
import s from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={s.content}>
      <div className={s.footerText}>© SportPeople 2022</div>
    </div>
  );
};

export default Footer;
