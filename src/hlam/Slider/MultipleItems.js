import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { arrow } from '../../Base/Base';


const arrowSize = '56px';

function SampleNextArrow({ className, onClick }) {
  return (
    <div
      className={className}
      style={{ display: 'block', width: arrowSize, height: arrowSize }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: 'block', width: arrowSize, height: arrowSize }}
      onClick={onClick}
    />
  );
}

export const MultipleItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          // centerMode: true,
          // centerPadding: '60px'
           
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mySlider'>
      <Slider {...settings}>
        {arrow.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </Slider>
    </div>
  );
};
