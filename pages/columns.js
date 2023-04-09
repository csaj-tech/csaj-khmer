import Layout from "../components/layout";
import ColumnblockNotion from "../components/columnblockNotion";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export default function Columns() {
  const [allColumnsData, setAllColumnsData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchAllColumns = async () => {
    setIsFetching(true);
    try {
      const res = await fetch(`/api/get-notion-db-interviews`);
      const data = await res.json();
      setAllColumnsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchAllColumns();
  }, []);

  if (isFetching)
    return (
      <div className="flex h-screen items-center justify-center">
        <ReactLoading type="bars" color="#2563EB" />
      </div>
    );

  return (
    <Layout title="CSAJ-Columns">
      <section className="w-full py-10 bg-white font-sans">
        <h1 className=" text-5xl md:text-6xl lg:text-6xl font-bold mb-6 relative text-center text-blue-600">
          More From Us
        </h1>
        <div className="  px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
          <div className=" grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>
    </Layout>
  );
}
