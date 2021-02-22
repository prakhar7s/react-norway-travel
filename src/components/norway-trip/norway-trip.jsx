import React, { useEffect, useState } from "react";
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

import CloseIcon from "@material-ui/icons/Close";

const NorwayTrip = () => {
  const [totalImages, setTotalImages] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const [images, setImages] = useState([
    " imageOne",
    " imageTwo",
    " imageThree",
    " imageFour",
    " imageFive",
  ]);

  const changeRight = () => {
    const temp = (currentImage + 1) % images.length;
    setCurrentImage(temp);
  };

  const changeLeft = () => {
    let temp = currentImage - 1;
    if (temp == -1) {
      temp = images.length - 1;
    }
    setCurrentImage(temp);
  };
  useEffect(() => {
    setTotalImages(images.length);
  }, []);

  return (
    <div className={`norway-trip${images[currentImage]}`}>
      <header>
        <div className="app__name">
          <Link>Nortravel</Link>
        </div>
        <div className="navs">
          <Link to="#">Destinations</Link>
          <Link to="#">Activites</Link>
          <Link to="#">About Us</Link>
        </div>
        <div onClick={() => setShowSidebar(true)} className="hamburger-menu">
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
          <span
            style={{ top: `${currentImage * (100 / images.length)}%` }}
          ></span>
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
            <div onClick={() => changeLeft()} className="left">
              <ChevronLeftOutlinedIcon />
            </div>
            <div onClick={() => changeRight()} className="right">
              <ChevronRightOutlinedIcon />
            </div>
          </div>
          <div className="count">
            <span>0{currentImage + 1}</span>
            /0{totalImages}
          </div>
        </div>
      </footer>

      <div className={`hamburger-sidebar${showSidebar ? " show-sidebar" : ""}`}>
        <div className="ham-menu">
          <div onClick={() => setShowSidebar(false)} className="close-btn">
            <CloseIcon />
          </div>
          <div className="links">
            <Link>Amazon</Link>
            <Link>Goldman</Link>
            <Link>Google</Link>
            <Link>Facebook</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorwayTrip;
