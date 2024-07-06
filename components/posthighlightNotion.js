export default function Posthighlight({ post }) {
  return (
    <div className="relative font-sans col-span-12 duration-150 ease-out transform  border-black cursor-pointer md:col-span-6 lg:col-span-4 hover:scale-105">
      <a href={`/news/${post.id}`} className="block h-64 overflow-hidden">
        <img src={post.image} className="object-cover w-full h-full" />
      </a>
      <div className="p-5 pb-6">
        <h2 className="mb-2">
          <a
            href={`/news/${post.id}`}
            className="text-2xl font-bold leading-tight tracking-tight"
          >
            {post.title}
          </a>
        </h2>
        <p className="mb-2 text-sm font-sans tracking-tight md:tracking-widest text-gray-500">
          Written on {post.date}
        </p>
        <p className="text-gray-700 text-left">
          <a href={`/news/${post.id}`} className="text-ms">
            <span>{post.abstract}</span>
          </a>
        </p>
      </div>
    </div>
  );
}
