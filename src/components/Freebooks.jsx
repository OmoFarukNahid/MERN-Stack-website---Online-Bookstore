import React from 'react';
import list from "../../public/booklist.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card';

function Freebooks() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 dark:bg-gray-900">
      <div className="mb-6 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl dark:text-emerald-500 mb-2 uppercase text-center">
          Available Free Books!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          There are books which are free to read and download. You can read them online or download them for offline reading.
        </p>
      </div>

      <Slider {...settings} className="pb-6">
        {filterData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebooks;