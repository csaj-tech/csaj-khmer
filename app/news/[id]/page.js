"use client";
import Head from "next/head";
import Date from "../../../lib/date";
import Image from "next/image";
import { Render, withContentValidation } from "@9gustin/react-notion-render";
import ReactLoading from "react-loading";
import { useQueries } from "@tanstack/react-query";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

function PostImage({ className, media }) {
  const { src, alt, href } = media;

  const img = (
    <img
      className={className}
      src={src}
      alt={alt}
      style={{ width: "75%", height: "auto" }}
    />
  );

  return (
    /* add div to have images centered */
    <div className="flex justify-center">
      {/* add link to image if link exists */}
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  );
}

export default function Post({ params }) {
  const router = useRouter();
  const { id } = params;

  const handleGoBack = () => {
    router.back();
  };

  const results = useQueries({
    queries: [
      {
        queryKey: ["new", "metadata", id],
        queryFn: () =>
          fetch(`/api/get-notion-page-data?id=${id}`).then((res) => res.json()),
        enabled: !!id,
      },
      {
        queryKey: ["new", "content", id],
        queryFn: () =>
          fetch(`/api/get-notion-page?id=${id}`).then((res) => res.json()),
        enabled: !!id,
      },
    ],
  });

  const [metaQuery, contentQuery] = results;

  if (metaQuery.isPending || contentQuery.isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ReactLoading type="bars" color="#2563EB" />
      </div>
    );
  }

  if (metaQuery.isError || contentQuery.isError) {
    return (
      <div className="flex flex-col items-center h-screen">
        <p className="text-xl">Cannot find the news</p>
        <div className="mt-10 mb-2">
          <Button href="/news" text="Go back" />
        </div>
      </div>
    );
  }

  const metaData = metaQuery.data;
  const content = contentQuery.data;

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <article className="propse prose-xl pt-12 px-12 text-justify font-sans">
        {/* section of post to visualize metadata (author, title, publish date) */}
        <button
          onClick={handleGoBack}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 my-4"
        >
          {" "}
          {`< Go back`}
        </button>
        <h1
          className="text-3xl md:text-5xl font-bold dark:text-blue text-center my-12 flex-justify"
          style={{ lineHeight: 1.5 }}
        >
          {metaData.title}
        </h1>
        <p>
          Written on <Date dateString={metaData.date} />
          {metaData.author && ` by `}
          {metaData.author && (
            <span className="font-bold">{metaData.author}</span>
          )}
        </p>

        {metaData.image &&
          metaData.image.slice(0, 1).map((img) => (
            <div className="relative" width="500" height="500" align="center">
              <Image
                alt={metaData.title}
                src={img}
                unoptimized={true}
                height={500}
                width={800}
                intrinsic
              />
            </div>
          ))}
        <br />

        {/* body section of post */}
        <Render
          blocks={content}
          emptyBlocks
          blockComponentsMapper={{
            image: withContentValidation(PostImage),
          }}
        />
      </article>
    </>
  );
}
