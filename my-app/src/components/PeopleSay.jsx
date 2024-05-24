import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data for "what people say"
const peopleSay = [
  {
    comment: `"I'm truly inspired by the impactful work your NGO is doing. Keep up the amazing effort!"`,
    author: `Vaibhav`,
  },
  {
    comment: `"Thank you for making a real difference in our community. Your dedication is commendable"`,
    author: `Vaibhav`,
  },
  // Add more comments as needed
];

const PeopleSay = () => {
  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // State to hold the maximum height of the comments div
  const [maxHeight, setMaxHeight] = useState(0);

  // Ref to access the comments div
  const commentsRef = useRef(null);

  // Calculate and set the maximum height of the comments div
  useEffect(() => {
    if (commentsRef.current) {
      const height = commentsRef.current.getBoundingClientRect().height;
      setMaxHeight(height);
    }
  }, []);

  return (
    <div className="mt-0 sm:mt-10 md:mt-0 ">
      <div className="px-3 pb-8 sm:pb-0  text-center sm:text-center md:pb-10 ">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl text-headingPink sm:py-5 font-montserrat uppercase">
          What Are People Saying:-
        </h1>
      </div>
      <Slider {...settings}>
        {peopleSay.map((d, index) => (
          <div
            key={index}
            className="bg-PeopleColor rounded-lg sm:p-2 pt-8 pb-4 md:pb-0"
            style={{ height: maxHeight }}
          >
            <div className="overflow-hidden px-2 py-2" ref={commentsRef}>
              <p className="font-medium text-lg md:text-2xl font-roboto">{d.comment}</p>
            </div>
            <div className="text-xl pt-4 pb-2">
              <h3>~{d.author}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PeopleSay;
