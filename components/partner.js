import Image from "next/image";

const supporters_logos = [
  "/images/partners/kh-embassy.jpeg",
  "/images/partners/jac.jpeg",
  "/images/partners/cambodiafestival.jpg",
  "/images/partners/cjka.png",
  // Add more logos as needed
];
const principle_sponsor_logos = [
  "/images/partners/sbi.jpg",
  // Add more logos as needed
];

const partners_logos = [
  "/images/partners/limo.png",
  // Add more logos as needed
];

export default function Partner() {
  return (
    <div className="my-8">
      <h1 className="mb-3 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600">
        Supported By
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {supporters_logos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center bg-white rounded-md p-1">
            <div className="p-4 flex items-center justify-center space-x-12 bg-white rounded-md">
              <Image
                src={logo}
                alt={`Logo ${idx + 1}`}
                width={250}
                height={250}
                className="h-20 w-auto object-contain md:h-24"
              />
            </div>
          </div>
        ))}
      </div>

      <h1 className="mb-3 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600">
        Principle Sponsor:
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {principle_sponsor_logos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center bg-white rounded-md p-1">
            <div className="p-4 flex items-center justify-center space-x-12 bg-white rounded-md">
              <Image
                src={logo}
                alt={`Logo ${idx + 1}`}
                width={250}
                height={250}
                className="h-20 w-auto object-contain md:h-24"
              />
            </div>
          </div>
        ))}
      </div>
    
      <h1 className="mb-2 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600">
        Partner:
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {partners_logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white rounded-md p-1"
          >
            <Image
              src={logo}
              alt={`Partner logo ${idx + 1}`}
              width={550}
              height={550}
              className="h-20 w-auto object-contain md:h-24"
            />
          </div>
        ))}
      </div>  
    </div>
  );
}
