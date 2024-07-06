import Link from "next/link";
import Image from "next/image";

export default function Postblock({ post }) {
  const defaultHeaderImage =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fc64e059-f797-4152-a201-aba9bcda5cf1/fifa.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230310T025842Z&X-Amz-Expires=86400&X-Amz-Signature=5e46c70a6d9dcc22a8957fde21d2d72e7837c8dc41d2a1640d39badfa27e852b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22fifa.jpg%22&x-id=GetObject";
  return (
    <div className="relative">
      <Link
        href={`/news/${post.id}`}
        className="block overflow-hidden group rounded-xl"
      >
        <Image
          src={post.image ? post.image : defaultHeaderImage}
          width={500}
          height={224}
          className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
          alt="news-photo"
        />
      </Link>
      <div className="relative mt-5">
        <p className="uppercase font-sans text-xs mb-2.5 text-gray-500">
          {post.date}
        </p>
        <Link href={`/news/${post.id}`} className="block mb-3 hover:underline">
          <h2 className="text-xl font-bold leading-7 text-center text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
            {post.title}
          </h2>
        </Link>
        <p className="mb-4 text-gray-700">{post.abstract}</p>
        <Link href={`/news/${post.id}`} className="font-sans underline">
          Read More
        </Link>
      </div>
    </div>
  );
}
