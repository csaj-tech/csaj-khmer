import Layout from "../../components/layout";
import Link from "next/link";

const years = ["2023"];

function Page() {
  return (
    <Layout title="CSAJ-Members">
      <h1 className="font-sans leading-none py-12 text-[42px] md:text-5xl lg:text-5xl font-extrabold pt-0 md:pt-9 mb-6 relative text-center text-blue-600">
        CSAJ Members Archive
      </h1>

      <div className="flex flex-col max-w-lg mx-auto">
        {years.map((year, index) => (
          <Link
            href={`/members/${year}`}
            key={index}
            className="flex justify-between p-4 border rounded-md font-bold hover:bg-gray-100 hover:cursor-pointer group"
          >
            <p>{year}</p>
            <span className="text-black opacity-0 group-hover:opacity-100">
              view
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Page;
