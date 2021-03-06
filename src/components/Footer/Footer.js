import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="images/logo-mythic-quest.png" alt="logo Mythic Quest" />
      <p>
        © All rights reserved - <span>Instinct Agency</span>
      </p>
      <div className="social-network">
        <a href="www.twitter.com">
          <img src="images/twitter.png" alt="logo twitter" />
        </a>
        <a href="www.facebook.com">
          <img src="images/facebook.png" alt="logo facebook" />
        </a>
        <a href="www.youtube.com">
          <img src="images/youtube.png" alt="logo youtube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
