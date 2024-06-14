"use client";
import Head from "next/head";
import Layout from "../../../components/layout";
import Date from "../../../lib/date";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import ReactLoading from "react-loading";
import { useQueries } from "@tanstack/react-query";

export default function Post({ params }) {
  const { id } = params;

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
    return <div>Error</div>;
  }

  const metaData = metaQuery.data;
  const content = contentQuery.data;

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <article className="propse prose-xl pt-12 px-12 text-justify font-sans">
        <h1 className="text-3xl md:text-5xl font-bold dark:text-blue text-center mb-12 flex-justify">
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
        <Render blocks={content} emptyBlocks />
      </article>
    </>
  );
}
