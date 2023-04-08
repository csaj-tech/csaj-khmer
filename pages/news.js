import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Postblock from '../components/postblock'
import Posthighlight from '../components/posthighlight'

export default function News({ allPostsData }) {
  return (
    <Layout title="CSAJ-News">
      <section className="w-full py-10 bg-white font-sans">
        <h1 className=" text-5xl md:text-6xl lg:text-6xl font-bold mb-6 relative text-center text-blue-600">
          Our Activities
        </h1>

        
        <div className="  px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
          <div className=" grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map((post) => (
              <Postblock post={{ id: post.id, date: post.date, title: post.title, abstract: post.abstract, image: post.image }} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}