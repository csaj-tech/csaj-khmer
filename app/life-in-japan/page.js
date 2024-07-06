"use client";

import ColumnblockNotion from "../../components/columnblockNotion";
import ReactLoading from "react-loading";
import { useQuery } from "@tanstack/react-query";

export default function LifeInJapan() {
  const {
    isPending,
    error,
    isError,
    data: allColumnsData,
  } = useQuery({
    queryKey: ["interview", "pinned"],
    queryFn: () =>
      fetch(`/api/get-notion-db-interviews-pinned`).then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="w-full py-10 bg-white font-sans">
      <h1 className="text-5xl mb-12 md:text-6xl lg:text-6xl font-bold md:mb-6 relative text-center text-blue-600">
        Life in Japan
      </h1>
      <div className="px-8 mx-auto max-w-7xl md:px-10 md:py-16">
        <div className="grid overflow-hidden lg:rounded-xl">
          <div className="grid items-center lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center h-full p-1 md:py-16 md:pl-16 md:pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
              <h3 className="text-3xl font-semibold sm:text-4xl text-blue-400">
                <a href="/life-in-japan/living"> Living in Japan</a>
              </h3>
              <p className="text-lg text-gray-600 text-left pb-5 md:pb-0">
                Japanese culture shines among rich East Asian cultures with its
                unique and fascinating blend of ancient traditions and modern
                innovations. Japanese culture, from its distinctive cuisine and
                tea ceremonies to its ancient arts and poetries, has been shaped
                by its thousands of years of history and distinctive
                geography...
                <a
                  className="text-xl font-sans text-gray-800 font-bold"
                  href="/life-in-japan/living"
                >
                  {" "}
                  [Read more]
                </a>
              </p>
            </div>
            <div className="overflow-hidden bg-gray-100 md:h-96">
              <img
                src="/images/columns/LIVING_IN_JAPAN.jpg"
                className="object-contain md:object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>

          <div className="grid items-center lg:grid-cols-2">
            <div className="order-last overflow-hidden bg-gray-100 md:h-96 lg:order-first">
              <img
                src="/images/columns/STUDYING_IN_JAPAN.jpg"
                className="object-contain md:object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start justify-center h-full mt-8 md:mt-0 p-1 md:py-16 md:pl-16 md:pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
              <h3 className="text-3xl font-semibold sm:text-4xl text-teal-600">
                <a href="/life-in-japan/studying"> Studying in Japan</a>
              </h3>
              <p className="text-lg text-left text-gray-600 pb-5 md:pb-0">
                Japan is undoubtedly a top destination for pursuing higher
                education, thanks to its world-class education and renowned
                universities. The country offers a diverse range of academic
                programs across various fields, making it an ideal destination
                for students seeking quality education...
                <a
                  className="text-xl font-sans text-gray-800 font-bold"
                  href="/life-in-japan/studying"
                >
                  [Read more]
                </a>
              </p>
            </div>
          </div>

          <div className="grid items-center lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center h-full mt-8 md:mt-0 p-1 md:py-16 md:pl-16 md:pr-16 space-y-4 bg-white lg:pr-20 lg:py-0 tails-relative">
              <h3 className="text-3xl font-semibold sm:text-4xl text-violet-600">
                <a href="/life-in-japan/working"> Working in Japan</a>
              </h3>
              <p className="text-lg text-left text-gray-600 pb-5 md:pb-0">
                In order to be able to work in Japan, it is necessary to apply
                for a work permit (Permission to engage in activity other than
                that permitted in status of residence previously granted. The
                application form can be downloaded from these links...
                <a
                  className="text-xl font-sans text-gray-800 font-bold"
                  href="/life-in-japan/working"
                >
                  [Read more]
                </a>
              </p>
            </div>
            <div className="bg-gray-100 md:h-96">
              <img
                src="/images/columns/WORKING_IN_JAPAN.jpg"
                className="object-contain md:object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="  px-8 py-6 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <h1 className="mb-3 text-4xl font-bold leading-tight text-center md:text-5xl font-sans text-red-600 py-5 md:py-2">
          <a href="/columns">More From Us</a>
        </h1>

        {isPending ? (
          <div className="flex h-screen items-center justify-center">
            <ReactLoading type="bars" color="#2563EB" />
          </div>
        ) : (
          <>
            <div className=" grid gap-x-8 gap-y-6 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {allColumnsData.map((post) => (
                <ColumnblockNotion
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
            <h3 className="mb-3 text-xl font-bold leading-tight text-right font-sans text-blue-600 py-2">
              <a href="/columns">See more</a>
            </h3>
          </>
        )}
      </div>
    </section>
  );
}
