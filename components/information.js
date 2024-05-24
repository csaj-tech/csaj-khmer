import React from "react";

export default function Information() {
  return (
    <>
      <div className="p-6 mt-10 md:p-8 bg-white rounded-lg text-center">
        <h2 className="text-xl md:text-4xl font-bold text-blue-600 mb-8">
          Support Us
        </h2>
        <div className="mb-4">
          <p className="font-sans text-left md:text-justify text-md text-justify">
            The Cambodian Students’ Association of Japan (CSAJ) is an
            association composed entirely of Cambodians pursuing academia in
            Japan. As we are a nonprofit organization, we require sponsorships
            and donations to operate our programs and execute our activities and
            welcome any form of monetary support. Your patronage will enable us
            to perform our roles diligently and maintain good communication with
            Cambodian students and foreign correspondents in order to
            successfully carry out our missions. Your invaluable help will allow
            CSAJ to provide comfort and shelter to Cambodian students in Japan
            as well as to strengthen the relationship between Cambodian and
            Japanese and other foreign communities, providing solidarity to
            Cambodian students and people of the next generation.
          </p>
        </div>
      </div>

      <div className="p-4 md:p-8 bg-white rounded-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Available Resources
        </h2>
        <div className="py-6 font-sans md:text-justify text-md text-justify">
          <p>
            Feature your logos and links on our website, social media platforms,
            as well as posters and mailing lists. Join us in major events such
            as charity events, job hunting seminars, educational seminars,
            graduation parties, Khmer New Year parties, and year end parties.
            Reach out to international communities in Japan through the
            favorable word-of-mouth of Cambodian students about your goods and
            services. Broaden your scope to communities abroad through our
            members and alumni.
          </p>
          <p className="whitespace-pre-line"> Our tools include:</p>
          <ul className="list-inside list-decimal ">
            <li>
              {" "}
              <b>Newsletter</b>: 440 subscription with average readership of 200
              readers as of January 2023.{" "}
            </li>
            <li>
              {" "}
              <b>Social network</b>: 17,401 Facebook followers, 3,025 Facebook
              group members and 50 Telegram channel subscribers as of March
              2023.{" "}
            </li>
            <li>
              {" "}
              <b>Students community</b>: access to large and vibrant communities
              of Cambodian students in Kanto, Kansai, and Kyushu regions as well
              as Hiroshima and Nagoya prefectures.{" "}
            </li>
            <li>
              {" "}
              <b>Students alumni</b>: connect with a robust community of
              Cambodian alumni who are active and diligent professionals,
              academics, and officers inside and outside Japan.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 font-sans text-justify text-lg">
        <p>
          For information on available sponsorship packages,{" "}
          <a
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            href="mailto:csaj.info@gmail.com"
          >
            please contact us!
          </a>
        </p>
      </div>
    </>
  );
}
