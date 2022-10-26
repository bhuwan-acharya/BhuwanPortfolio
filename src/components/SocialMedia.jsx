import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsFacebook />
      </div>
      <div>
        <BsWhatsapp />
      </div>
    </div>
  );
};

export default SocialMedia;
