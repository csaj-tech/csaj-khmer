"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const images = [
  { url: "/images/home/HOMEPAGE1.jpg" },
  { url: "/images/home/HOMEPAGE2.jpg" },
  { url: "/images/home/HOMEPAGE3.jpg" },
  { url: "/images/home/HOMEPAGE4.jpg" },
  { url: "/images/home/HOMEPAGE5.JPG" },
  { url: "/images/home/HOMEPAGE6.JPG" },
  { url: "/images/home/HOMEPAGE7.JPG" },
];

export default function PhotoSlider() {
  return (
    <div className="w-full md:w-1/3 p-6 pt-8">
      {/* Photo slider */}
      <Slider {...settings}>
        <div>
          <Image
            src={images[0]["url"]}
            alt="Image 1"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            src={images[1]["url"]}
            alt="Image 2"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            src={images[2]["url"]}
            alt="Image 3"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            src={images[3]["url"]}
            alt="Image 4"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            src={images[4]["url"]}
            alt="Image 5"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            src={images[5]["url"]}
            alt="Image 6"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            src={images[6]["url"]}
            alt="Image 7"
            width={500}
            height={300}
          />
        </div>
      </Slider>
    </div>
  );
}
