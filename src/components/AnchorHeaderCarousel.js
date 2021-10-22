import React from "react";
import { Carousel } from "react-bootstrap";

import BEERTAPS2 from "../images/carousel-images/BEERTAPS2.jpg";
import EXTERIOR from "../images/carousel-images/EXTERIOR.jpg";
import OCTOPUS from "../images/carousel-images/OCTOPUS.jpg";
import OUTSIDEPEOPLE from "../images/carousel-images/OUTSIDEPEOPLE.jpg";
import STRAWS from "../images/carousel-images/STRAWS.jpg";

export default function AnchorHeaderCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={BEERTAPS2} alt="Beer Taps" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={EXTERIOR} alt="Exterior" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OCTOPUS}
            alt="Octupus picture in garden"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OUTSIDEPEOPLE}
            alt="People enjoying front area"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={STRAWS}
            alt="Picture of bar top and pool table"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}