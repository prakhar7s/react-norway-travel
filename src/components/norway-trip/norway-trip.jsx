import React, { useEffect, useRef, useState } from "react";
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

  const bgImg = useRef();

  const [images, setImages] = useState([
    {
      img: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1606240639706-dbd343433c32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dWUlMjBiZWF1dHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1473277087567-8e0937304e17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=60",
      lazy: true,
    },
    {
      img: "https://images.unsplash.com/photo-1610650138161-ef555e34fdf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=20&q=60",
    },
  ]);

  const changeRight = () => {
    const temp = (currentImage + 1) % images.length;
    setCurrentImage(temp);
  };

  const changeLeft = () => {
    let temp = currentImage - 1;
    if (temp === -1) {
      temp = images.length - 1;
    }
    setCurrentImage(temp);
  };
  useEffect(() => {
    setTotalImages(images.length);
    setImages((prev) => {
      const temp = prev.map((img) => ({
        img: img.img.replace("w=20&", "w=800&"),
      }));

      return temp;
    });
  }, []);

  return (
    <div className={`norway-trip`}>
      <img
        className="bg-image"
        ref={bgImg}
        src={images[currentImage].img}
        alt=""
      />
      <header>
        <div className="app__name">
          <Link>Nortravel</Link>
        </div>
        <div className="navs">
          <Link to="#destination">Destinations</Link>
          <Link to="#activites">Activites</Link>
          <Link to="#aboutUs">About Us</Link>
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
        <div className="overlay"></div>
        <div className="ham-menu">
          <div onClick={() => setShowSidebar(false)} className="close-btn">
            <CloseIcon />
          </div>
          <div className="links">
            <Link to="#destination">Destinations</Link>
            <Link to="#activities">Activities</Link>
            <Link to="#aboutUs">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorwayTrip;
