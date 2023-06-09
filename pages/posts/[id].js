import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../lib/date";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
import ReactLoading from "react-loading";

export default function Post() {
  const [postData, setPostData] = useState(null);
  const [content, setContent] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  const getPageContent = async () => {
    setIsFetching(true);
    try {
      const pageData = await fetch(`/api/get-notion-page-data?id=${id}`);
      const pageMeta = await pageData.json();
      setPostData(pageMeta);
      const res = await fetch(`/api/get-notion-page?id=${id}`);
      const pageContent = await res.json();
      setContent(pageContent);
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    if (id) {
      getPageContent();
    }
  }, [id]);

  if (isFetching)
    return (
      <div className="flex h-screen items-center justify-center">
        <ReactLoading type="bars" color="#2563EB" />
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="propse prose-xl pt-12 px-12 text-justify font-sans">
        <h1 className="text-3xl md:text-5xl font-bold dark:text-blue text-center mb-12 flex-justify">
          {postData.title}
        </h1>
        <p>Written on <Date dateString={postData.date} />
          {postData.author && ` by `}
          {postData.author && (
            <span className="font-bold">{postData.author}</span>
          )}
        </p>

        {postData.image &&
          postData.image.slice(0, 1).map((img) => (
            <div className="relative" width="500" height="500" align="center">
              <Image
                alt={postData.title}
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
    </Layout>
  );
}
