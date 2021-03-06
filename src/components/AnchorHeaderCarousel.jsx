import React from "react";
import { Carousel } from "react-bootstrap";

import CarouselIamge1 from "../images/spf-img/spf-carousel-01.jpg";
import CarouselIamge1webp from "../images/spf-img/spf-carousel-01.webp";
import CarouselIamge2 from "../images/spf-img/spf-carousel-02.jpg";
import CarouselIamge3 from "../images/spf-img/spf-carousel-03.jpg";

export default function AnchorHeaderCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <picture>
            <source
              type="image/webp"
              srcset={CarouselIamge1webp}
            />
            <source type="image/jpeg" srcset={CarouselIamge1} />
            <img
              className="d-block w-100"
              src={CarouselIamge1}
              alt="Painted Room"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselIamge2} alt="Exterior" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselIamge3}
            alt="Octupus wall muriel in garden"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
