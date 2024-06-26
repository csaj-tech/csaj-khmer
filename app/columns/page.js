"use client";

import ColumnblockNotion from "../../components/columnblockNotion";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { useQuery } from "@tanstack/react-query";

export default function Columns() {
  const [oldestYear, setOldestYear] = useState(new Date().getFullYear());

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  const {
    isPending,
    error,
    isError,
    data: allColumnsData,
  } = useQuery({
    queryKey: ["interview"],
    queryFn: () =>
      fetch(`/api/get-notion-db-interviews`).then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (!allColumnsData) return;
    const minYear = allColumnsData.reduce((min, p) => {
      return new Date(p.date).getFullYear() < min
        ? new Date(p.date).getFullYear()
        : min;
    }, new Date().getFullYear());
    setOldestYear(minYear);
  }, [allColumnsData]);

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ReactLoading type="bars" color="#2563EB" />
      </div>
    );
  }
  if (isError) {
    return <>Error: {error.message}</>;
  }

  // Filter posts
  let filteredPosts = allColumnsData.filter((post) => {
    const postDate = new Date(post.date);
    return (
      (filterYear ? postDate.getFullYear() === Number(filterYear) : true) &&
      (filterMonth ? postDate.getMonth() + 1 === Number(filterMonth) : true)
    );
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate year options dynamically
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - oldestYear + 1 },
    (_, index) => currentYear - index,
  );

  // Generate month options dynamically
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <section className="w-full py-10 bg-white font-sans">
      <h1 className=" text-5xl md:text-6xl lg:text-6xl font-bold mb-6 relative text-center text-blue-600">
        More From Us
      </h1>
      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div className="flex justify-center mb-4 bg-gray-100 round-lg">
          <div className="pl-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-2 space-x-2">
              <label>Year:</label>
              <select
                className="p-1 rounded bg-white"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="">All</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <label>Month:</label>
              <select
                className="p-1 rounded bg-white"
                value={filterMonth}
                onChange={(e) => setFilterMonth(e.target.value)}
              >
                <option value="">All</option>
                {monthOptions.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className=" grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
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
        <div className="flex justify-center mt-4">
          <button
            className="mx-1 px-3 py-2 bg-blue-600 text-white"
            onClick={() =>
              paginate(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          >
            Prev
          </button>
          <button
            className="mx-1 px-3 py-2 bg-blue-600 text-white"
            onClick={() =>
              paginate(
                currentPage < Math.ceil(filteredPosts.length / postsPerPage)
                  ? currentPage + 1
                  : currentPage,
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
