import Layout from '../components/layout';
import { getSortedColumnsData } from '../lib/columns';
import Columnblock from '../components/columnblock';

export default function Tips({ allColumnsData }) {
    return (
        <Layout title="CSAJ-Tips">

            <section className="w-full py-10 bg-white font-sans">
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 relative text-center text-blue-600">
                    Life in Japan
                </h1>
                <div className="px-10 mx-auto max-w-7xl py-16">
                    <div className="grid overflow-hidden lg:rounded-xl">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-blue-400">
                                    <a href='/tips/living'> Living in Japan</a>
                                </h3>
                                <p className="text-lg text-gray-600 text-justify">
                                    Japan is a beautiful country that is steeped in rich history and culture, and is home to many international students who come to study and experience the unique blend of traditional and modern lifestyles.
                                    However, moving to a new country can be an intimidating experience, especially if you are from a different culture and are not familiar with the local customs and ways of ...
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/tips/living"> [Read more]</a>
                                </p>
                            </div>
                            <div className="overflow-hidden bg-gray-100 h-96">
                                <img src="/images/columns/living-in-japan.png" className="object-cover w-full h-full" alt="" />
                            </div>
                        </div>

                        <div className="grid items-center lg:grid-cols-2">
                            <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                                <img src="/images/columns/studying-in-japan.png" className="object-cover w-full h-full" alt="" />
                            </div>
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-teal-600" >
                                    <a href='/tips/studying'> Studying in Japan</a>
                                </h3>
                                <p className="text-lg text-left text-gray-600 text-justify">
                                    Japan is a popular destination for international students, with its rich cultural heritage, advanced technology, and world-renowned education system.
                                    However, studying in a foreign country can be an intimidating experience, especially if you are not familiar with the local customs and ways of life...
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/tips/studying">[Read more]</a>
                                </p>
                            </div>
                        </div>

                        <div className="grid items-center lg:grid-cols-2">
                            <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0 tails-relative">
                                <h3 className="text-2xl font-semibold sm:text-4xl text-violet-600">
                                    <a href='/tips/working'> Working in Japan</a>
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Japan is a fascinating country with a rich cultural heritage and a thriving economy, making it an attractive destination for international students who are looking to start their careers after graduation.
                                    However, the process of finding a job in Japan can be a bit challenging, especially for those who are unfamiliar with the local culture and customs...
                                    <a className="text-xl font-sans text-gray-800 font-bold" href="/tips/working">[Read more]</a>
                                </p>
                            </div>
                            <div className="bg-gray-100 h-96">
                                <img src="/images/columns/working-in-japan.png" className="object-cover w-full h-full" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="mb-3 text-5xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600 py-2"><a href="/columns">More From Us</a></h1>
                </div>
                <div className="  px-8 py-6 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
                    <div className=" grid gap-x-8 gap-y-6 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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
    const allColumnsData = getSortedColumnsData().slice(0, 3)
    return {
      props: {
        allColumnsData
      }
    }
  }