import Image from "next/image";

const supporters_logos = [
  "/images/partners/kh-embassy.jpeg",
  // Add more logos as needed
];

const partner_logos = [
  "/images/partners/jac.jpeg",
  "/images/partners/cambodiafestival.jpg",
  "/images/partners/sbi.png",
  // Add more logos as needed
];

export default function Partner() {
  return (
    <div className="my-8">
      <h1 className="mb-3 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600">
        Supporter
      </h1>

      <div className="flex flex-wrap justify-center">
        {supporters_logos.map((logo, idx) => (
          <div key={idx} className="m-2 flex justify-center">
            <div className="p-4 flex items-center justify-center space-x-12 bg-white rounded-md">
              <Image
                src={logo}
                alt={`Logo ${idx + 1}`}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>

      <h1 className="mb-3 text-xl font-bold leading-tight text-center md:text-4xl font-sans text-blue-600">
        Our Partners
      </h1>

      <div className="flex flex-wrap justify-center">
        {partner_logos.map((logo, idx) => (
          <div key={idx} className="m-2 flex justify-center">
            <div className="p-4 flex items-center justify-center space-x-12 bg-white rounded-md">
              <Image
                src={logo}
                alt={`Logo ${idx + 1}`}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
