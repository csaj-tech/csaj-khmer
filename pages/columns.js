import Layout from '../components/layout'
import { getSortedColumnsData } from '../lib/columns'
import Columnblock from '../components/columnblock'

export default function Columns({ allColumnsData }) {
  return (
    <Layout title="CSAJ-Columns">
      <section className="w-full py-24 bg-white font-sans">
        <h1 className=" text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-center text-blue-600">
          More From Us
        </h1>
        <div className="  px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
          <div className=" grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {allColumnsData.map((post) => (
              <Columnblock post={{ id: post.id, date: post.date, title: post.title, abstract: post.abstract, image: post.image }} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allColumnsData = getSortedColumnsData()
  return {
    props: {
      allColumnsData
    }
  }
}