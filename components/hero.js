import Link from "next/link";
import PhotoSlider from "../components/photoSlider";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center">
      {/* Left column */}
      <div className="w-full px-6">
        <h1 className="text-2xl my-4 md:my-0 text-center md:text-4xl md:text-left text-blue-600 font-bold">
          Cambodian Students' Association in Japan
        </h1>
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-4 text-md md:text-xl lg:text-xl text-justify my-4">
            Cambodian Students’ Association in Japan (CSAJ) represents on behalf
            of the Cambodian students studying in all main regions of Japan,
            including Kanto, Kansai, Nagoya, Hiroshima, and Kyushu. We aim to
            build a community of collective support, exchanges of ideas,
            knowledge and friendship among the Cambodian students in Japan for
            the social prosperity in general.
          </p>

          <Link
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-6 py-4 rounded text-center inline-block"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Right column */}
      <PhotoSlider />
    </div>
  );
}
