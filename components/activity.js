"use client";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Posthighlight from "../components/posthighlightNotion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function Activity() {
  const {
    isPending,
    error,
    isError,
    data: allPostsData,
  } = useQuery({
    queryKey: ["news", "pinned"],
    queryFn: () => fetch("/api/get-notion-db-pinned").then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return (
      <div className="grid grid-cols-1 justify-items-center items-center text-center">
        <ReactLoading type="bars" color="#2563EB" />
      </div>
    );
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  const filteredPosts = allPostsData.filter((post) => {
    return post.publish === true;
  });

  return (
    <section className="bg-white py-0 md:py-10">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className=" pb-4 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600 py-12 md:py-12 md:mb-3">
            Our Activities
          </h1>
        </div>

        <div className="flex flex-col items-center">
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
          <Link
            href="/news"
            className="text-md bg-blue-500 hover:bg-blue-600 text-white text-xl px-6 py-2 rounded text-center inline-block"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
