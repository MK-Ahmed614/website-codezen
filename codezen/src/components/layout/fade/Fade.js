/* import React, { Component } from "react";
import Slider from "react-slick";
import "./Fade.scss";

export default class Fade extends Component {
  render() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic slideshow
        autoplaySpeed: 5000, // Delay between slides in milliseconds
    };
    return (
      <div className="header-fade-img">
        <Slider {...settings}>
          <div>
            <img src={"./logo/img-1.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-2.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-3.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-4.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-5.jpg"} />
          </div>
          <div>
            <img src={"./logo/img-6.jpeg"} />
          </div>
        </Slider>
      </div>
    );
  }
} */

import "./Fade.scss";

const Fade = () => {
  return (
    <div className="waveWrapper waveAnimation">
      <div id='title'>
  <div className="text-title">
    <p>a software house that offers web <br/> and apps development services <br/> to help you achieve your goals </p>
    <button type="button">contact</button>
    <button type="button">who we are</button>
  </div>
  
  <div className="ava-img">
    <img src="./logo/pngwing.com.png" alt="vector" />
  </div>
</div>
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-top.png)'}}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage: '(http://front-end-noobs.com/jecko/img/wave-mid.png)'}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage: "url(http://front-end-noobs.com/jecko/img/wave-bot.png)"}}></div>
  </div>
</div>
  )
}

export default Fade