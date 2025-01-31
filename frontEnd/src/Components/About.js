import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import YouTube from 'react-youtube';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const videoOpts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onVideoButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
         Unleash Your Inner Chef with Menulody: Your Recipe Haven
        </h1>
        <p className="primary-text">
        Discover delicious recipes from around the world and unlock your culinary creativity. 
        From healthy meals to gourmet delights, we offer a wide range of easily executable recipes with clear instructions and practical tips. 
        Join us on a flavorful journey and explore the joy of cooking. Follow us, try our recipes, and let's create culinary wonders together!"
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button " onClick={onVideoButtonClick}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
        {showVideo && (
          <div className="video-container">
            <YouTube videoId="pq3Otf0zbdk" opts={videoOpts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
