import Link from "next/link";

function Button({href, text}) {
  return (
    <div className="flex justify-center">
      <Link
        href={href}
        className="bg-blue-500 text-white px-6 py-4 rounded text-xl hover:bg-blue-600"
      >
        {text}
      </Link>
    </div>
  );
}

export default Button;
