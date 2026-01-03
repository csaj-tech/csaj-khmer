"use client";

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
    queryFn: async () => {
      const res = await fetch("/api/get-notion-db-pinned");
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    },
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
    return <div className="text-center text-red-600">Error: {error?.message}</div>;
  }

  // Normalize response to an array to prevent filter / map errors
  const posts = Array.isArray(allPostsData)
    ? allPostsData
    : Array.isArray(allPostsData?.results)
      ? allPostsData.results
      : [];

  //  Use filtered posts
  const filteredPosts = posts.filter((post) => post?.publish === true);

  return (
    <section className="bg-white py-0 md:py-10">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="pb-4 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600 py-12 md:py-12 md:mb-3">
            Our Activities
          </h1>
        </div>

        <div className="flex flex-col items-center">
          {filteredPosts.length === 0 ? (
            <p className="text-gray-500 py-10">No activities published yet.</p>
          ) : (
            <div className="grid grid-cols-12 gap-7 md:gap-8 py-8">
              {filteredPosts.map((post) => (
                <Posthighlight
                  key={post.id}
                  post={{
                    id: post.id,
                    date: post.date ?? "",
                    title: post.title ?? "",
                    abstract: post.abstract ?? "",
                    image: post.header_image ?? "",
                  }}
                />
              ))}
            </div>
          )}

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
