import Head from 'next/head';
import Layout from "../../components/layout";
import { getAllColumnIds } from "../../lib/columns";
import Date from "../../lib/date";
import Image from 'next/image';
import md from 'markdown-it';
import fs from 'fs';
import matter from 'gray-matter';

export default function Column({ postData, content }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="propse prose-xl px-48 text-justify font-sans">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-blue text-center mb-12">{postData.title}</h1>
        <p>Written on <Date dateString={postData.date} /></p>
        {postData.image && postData.image.slice(0, 1).map((img) => (
        <div className='relative' width='500' height='500' align='center'>
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
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        {postData.image && postData.image.slice(1, ).map((img) => (
        <div className='relative' width='500' height='500' align='center'>
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
      </article>

    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllColumnIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fileName = fs.readFileSync(`columns/${params.id}.md`, 'utf-8');
  const { data: postData, content } = matter(fileName);
  return {
    props: {
      postData,
      content,
    },
  };
}