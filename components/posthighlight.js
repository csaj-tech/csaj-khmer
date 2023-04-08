export default function Posthighlight({ post }) {
    return (
        <div class="relative font-sans col-span-12 duration-150 ease-out transform  border-black cursor-pointer md:col-span-6 lg:col-span-4 hover:scale-105">
            <a href={`/posts/${post.id}`} class="block h-64 overflow-hidden">
                <img src={post.image[0]} class="object-cover w-full h-full" />
            </a>
            <div class="p-5 pb-6">
                <h2 class="mb-2">
                    <a href={`/posts/${post.id}`} class="text-2xl font-bold leading-tight tracking-tight">
                        {post.title}
                    </a>
                </h2>
                <p class="mb-2 text-sm font-sans tracking-widest text-gray-500">Written on {post.date}</p>
                <p class="text-gray-700 text-justify">
                    <a href={`/posts/${post.id}`} class="text-ms">
                        <span>
                            {post.abstract}
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
}