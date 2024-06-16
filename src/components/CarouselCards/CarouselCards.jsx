import styles from "./CarouselCards.module.css";
import "./CarouselCards.module.css";
import { CardsAll } from "../../constans";
import { Card } from "../Card/Card";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from "react";


const Carousel = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const cards =CardsAll.map((card) => (
            <Card key={card.id} card={card}/>
          ));

    return (
      <div className={styles.carousel__block}>
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
          {cards}
        </Slider>
        <div className={styles.arrow__block}>
            <button className={styles.slickPrev} onClick={previous}></button>
            <button className={styles.slickNext} onClick={next}></button>
      </div>
      </div>
    );
  };
  
  export default Carousel;