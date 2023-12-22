import Layout from "../components/layout";
import Image from 'next/image';
import Posthighlight from "../components/posthighlightNotion";
import { getSortedPostsData } from "../lib/posts";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import SimpleImageSlider from "react-simple-image-slider";

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
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
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

const logos = [
  "/images/partners/kh-embassy.jpeg",
  "/images/partners/jac.jpeg",
  "/images/partners/cambodiafestival.jpg",
  "/images/partners/sbi.png",
  // Add more logos as needed
];

export default function Home() {
  const [allPostsData, setAllPostsData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchAllPosts = async () => {
    try {
      const res = await fetch("/api/get-notion-db-pinned");
      const data = await res.json();
      setAllPostsData(data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Layout title="CSAJ">
      <>
        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="w-full md:w-2/3 px-16">
            <h1 className="text-4xl text-center md:text-4xl lg:text-5xl md:text-left font-sans mb-8 relative text-blue-600 font-bold">Cambodian Students' Association in Japan</h1>
            <p className="mb-4 font-sans text-left text-lg md:text-xl  lg:text-xl md:text-justify">Cambodian Students’ Association in Japan (CSAJ) represents on behalf of the Cambodian students studying in all main regions of Japan, including Kanto, Kansai, Nagoya, Hiroshima, and Kyushu. We aim to build a community of collective support, exchanges of ideas, knowledge and friendship among the Cambodian students in Japan for the social prosperity in general.</p>
            <div className="mt-10">
              <a href="/about" className="bg-blue-500 text-white px-6 py-4 rounded text-xl hover:bg-blue-600">Learn More About Us</a>

            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/3 p-6 pt-8">
            {/* Photo slider */}
            <Slider {...settings}>
              <div>
                <Image src={images[0]["url"]} alt="Image 1" width={500} height={300} />
              </div>
              <div>
                <Image src={images[1]["url"]} alt="Image 2" width={500} height={300} />
              </div>
              <div>
                <Image src={images[2]["url"]} alt="Image 3" width={500} height={300} />
              </div>
              <div>
                <Image src={images[3]["url"]} alt="Image 4" width={500} height={300} />
              </div>
              <div>
                <Image src={images[4]["url"]} alt="Image 5" width={500} height={300} />
              </div>
              <div>
                <Image src={images[5]["url"]} alt="Image 6" width={500} height={300} />
              </div>
              <div>
                <Image src={images[6]["url"]} alt="Image 7" width={500} height={300} />
              </div>
            </Slider>
          </div>
        </div>
      </>

      <>
        <section className="bg-white py-0 md:py-10">
          <div className="px-10 mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className=" pb-4 text-5xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600 py-12 md:py-12 md:mb-3">
                Our Activities
              </h1>
            </div>

            {isFetching ? (
              <div className="grid grid-cols-1 justify-items-center items-center text-center">
                <ReactLoading type="bars" color="#2563EB" />
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-7 md:gap-8 py-8">
                {allPostsData.map((post) => (
                  <Posthighlight
                    key={post.id}
                    post={{
                      id: post.id,
                      date: post.date,
                      title: post.title,
                      abstract: post.abstract,
                      image: post.header_image,
                    }}
                  />
                ))}
              </div>
            )}
            <p className="text-2xl font-sansmb-7 text-right py-0 text-blue-600">
              <a href="/news">See more</a>
            </p>
          </div>
        </section>
      </>

      <>
        <section className="w-full py-12 lg:py-12 bg-white">
          <div className="container px-8 mx-auto sm:px-12 lg:px-20">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600">
              Our Partners
            </h1>

            <div className="flex flex-wrap justify-center">
              {logos.map((logo, idx) => (
                <div key={idx} className="m-2 flex justify-center">
                  <div className="p-4 flex items-center justify-center space-x-12 bg-white rounded-md">
                    <Image
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              ))}
            </div>


            <div className="p-4 mt-10 md:p-8 bg-white rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Support Us</h2>
              <div className="mb-4">
                <p className="font-sans text-left md:text-justify text-lg">
                  The Cambodian Students’ Association of Japan (CSAJ) is an
                  association composed entirely of Cambodians pursuing academia in
                  Japan. As we are a nonprofit organization, we require
                  sponsorships and donations to operate our programs and execute
                  our activities and welcome any form of monetary support. Your
                  patronage will enable us to perform our roles diligently and
                  maintain good communication with Cambodian students and foreign
                  correspondents in order to successfully carry out our missions.
                  Your invaluable help will allow CSAJ to provide comfort and
                  shelter to Cambodian students in Japan as well as to strengthen
                  the relationship between Cambodian and Japanese and other
                  foreign communities, providing solidarity to Cambodian students
                  and people of the next generation.
                </p>
              </div>
            </div>

            <div className="p-4 md:p-8 bg-white rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Available Resources</h2>
              <div className="py-6 font-sans text-left md:text-justify text-lg">
                <p>
                  Feature your logos and links on our website, social media
                  platforms, as well as posters and mailing lists. Join us in
                  major events such as charity events, job hunting seminars,
                  educational seminars, graduation parties, Khmer New Year
                  parties, and year end parties. Reach out to international
                  communities in Japan through the favorable word-of-mouth of
                  Cambodian students about your goods and services. Broaden your
                  scope to communities abroad through our members and alumni.

                </p>
                <p className="whitespace-pre-line"> Our tools include:</p>
                <ul className="list-inside list-decimal ">
                  <li>
                    {" "}
                    <b>Newsletter</b>: 440 subscription with average readership of
                    200 readers as of January 2023.{" "}
                  </li>
                  <li>
                    {" "}
                    <b>Social network</b>: 17,401 Facebook followers, 3,025
                    Facebook group members and 50 Telegram channel subscribers as
                    of March 2023.{" "}
                  </li>
                  <li>
                    {" "}
                    <b>Students community</b>: access to large and vibrant
                    communities of Cambodian students in Kanto, Kansai, and Kyushu
                    regions as well as Hiroshima and Nagoya prefectures.{" "}
                  </li>
                  <li>
                    {" "}
                    <b>Students alumni</b>: connect with a robust community of
                    Cambodian alumni who are active and diligent professionals,
                    academics, and officers inside and outside Japan.{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="py-6 font-sans text-justify text-lg">
              <p>
                For information on available sponsorship packages,{" "}
                <a
                  className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  href="mailto:csaj.info@gmail.com"
                >
                  please contact us!
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}
