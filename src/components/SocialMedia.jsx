import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaStackOverflow, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://youtube.com/@codingsprint"><FaYoutube /></a>
    </div>
    <div className='app_social_links'>
      <a href="https://www.linkedin.com/in/adarshj031/"><FaLinkedinIn /></a>
    </div>
    <div className='app_social_links'>
      <a href="https://stackoverflow.com/users/21133587/adarsh-jaiswal"><FaStackOverflow /></a>
    </div>
    <div className='app_social_links'>
      <a href="https://github.com/AdarshJaiswal031"><FaGithub /></a>
    </div>


  </div>
);

export default SocialMedia;
