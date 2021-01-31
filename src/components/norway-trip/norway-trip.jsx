import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Location } from "../../assets/icons/location.svg";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./norway-trip.scss";

// Left & Right
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
// Social Media Buttons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

const NorwayTrip = () => {
  const [totalImages, setTotalImages] = useState(5);
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <div className="norway-trip">
      <header>
        <div className="app__name">
          <Link>Nortravel</Link>
        </div>
        <div className="navs">
          <Link to="#">Destinations</Link>
          <Link to="#">Activites</Link>
          <Link to="#">About Us</Link>
        </div>
        <div className="hamburger-menu">
          <span></span>
        </div>
      </header>
      <div className="title">
        <div className="social-media-links">
          <div className="sm-link">
            <Link>
              <FacebookIcon />
            </Link>
          </div>
          <div className="sm-link">
            <Link>
              <TwitterIcon />
            </Link>
          </div>
          <div className="sm-link">
            <Link>
              <InstagramIcon />
            </Link>
          </div>
          <div className="sm-link">
            <Link>
              <LinkedInIcon />
            </Link>
          </div>
          <div className="sm-link">
            <Link>
              <TelegramIcon />
            </Link>
          </div>
        </div>
        <div className="headings">
          <span>EXPLORE</span>
          <p>Norway</p>
        </div>
        <div className="image-indicator">
          <span></span>
        </div>
      </div>

      <footer>
        <div className="see-more">
          <span>SEE MORE</span> <ArrowRightAltIcon />
        </div>
        <div className="locations">
          <div className="location">
            <div className="logo">
              <Location />
            </div>
            <div className="content">
              <span>Trondheim</span>
              <p>Plan a trip</p>
            </div>
          </div>

          <div className="location">
            <div className="logo">
              <Location />
            </div>
            <div className="content">
              <span>Lofoten</span>
              <p>Plan a trip</p>
            </div>
          </div>

          <div className="location">
            <div className="logo">
              <Location />
            </div>
            <div className="content">
              <span>Geirangerfjord</span>
              <p>Plan a trip</p>
            </div>
          </div>
        </div>
        <div className="change-img">
          <div className="buttons">
            <div className="left">
              <ChevronLeftOutlinedIcon />
            </div>
            <div className="right">
              <ChevronRightOutlinedIcon />
            </div>
          </div>
          <div className="count">
            <span>0{currentImage}</span>
            /0{totalImages}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NorwayTrip;
