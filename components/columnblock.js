export default function Columnblock({ post }) {
    return (
        <div className="relative">
            <a href={`/columns/${post.id}`} className="block overflow-hidden group rounded-xl">
                <img src={post.image[0]} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
            </a>
            <div className="relative mt-5">
                <p className="uppercase font-sans text-xs mb-2.5 text-purple-600">
                    {post.date}
                </p>
                <a href={`/columns/${post.id}`} className="block mb-3 hover:underline">
                    <h2 className="text-xl font-bold leading-7 text-center text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                        {post.title}
                    </h2>
                </a>
                <p className="mb-4 text-gray-700 text-justify">
                    {post.abstract}
                </p>
                <a href={`/columns/${post.id}`} className="font-sans underline">Read More</a>
            </div>
        </div>
    );
}