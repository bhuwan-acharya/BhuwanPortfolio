import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/bhuwan-acharya-4858a0193/"
          target="blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/bhuwan-acharya" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/bhuwan.acharya.75/" target="blank">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
