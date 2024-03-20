import Layout from "../components/layout";
import MemberList from "../components/memberlist";
import Button from "../components/button";
import memberlist2024 from "../data/members/2024";

export const MISSION = {
  title: "Mission",
  abstract: "Bridging Cambodian and Japanese Communities",
  detail:
    "Our mission is to create a safe and welcoming environment where Cambodian students can thrive academically, socially, and culturally, while also promoting cross-cultural exchange between Cambodia and Japan. We strive to empower our members by providing opportunities for personal and professional growth, and by promoting leadership and community involvement. At the same time, we are committed to advocating for the rights and interests of Cambodian students and promoting social justice and equality.",
};

export const VISION = {
  title: "Vision",
  abstract: "Empowering Cambodian Students as Future Leaders",
  detail:
    "Our vision is to empower Cambodian students studying in Japan to become leaders in their respective fields, and to promote mutual understanding and respect between Cambodian and Japanese cultures. We envision a future where Cambodian students are equipped with the knowledge, skills, and resources to contribute to the development of their communities and society as a whole. We believe that our members have the potential to become agents of change, and we are committed to providing them with the tools they need to achieve their goals.",
};

export const VALUE = {
  title: "Values",
  abstract:
    "Inclusiveness, Empowerment, and Collaboration: Guiding Values of CSAJ",
  detail:
    "We value inclusiveness and diversity, and strive to create a welcoming and supportive community for all Cambodian students studying in Japan. We believe in empowering our members with the knowledge, skills, and resources they need to succeed academically and professionally, and to make a positive impact in their communities. We promote cross-cultural exchange and understanding between Cambodia and Japan, and celebrate the unique cultural heritage of our members. We are committed to advocating for the rights and interests of Cambodian students studying in Japan, and promoting social justice and equality. We value collaboration and partnerships, both within our organization and with other student associations and organizations, to achieve our shared goals and objectives.",
};

export default function About() {
  return (
    <Layout title="CSAJ-About Us">
      <h1 className="font-sans leading-none py-12 text-[42px] md:text-6xl lg:text-6xl font-extrabold pt-0 md:pt-9 mb-6 relative text-center text-blue-600">
        Cambodian Students' Association in Japan
      </h1>

      <section>
        <div className="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row py-4">
          <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
            <h2 className="pb-2 text-center md:text-left text-4xl md:max-flex md:max-justify-center font-extrabold cursor-pointer lg:text-4xl text-gray-800">
              Our History
            </h2>
          </div>

          <div className="relative w-full px-5 mt-6 overflow-hidden md:px-0 md:mt-1 md:w-9/12">
            <div className="w-full space-y-6">
              <p className="text-lg text-gray-600 text-left leading-[20px] md:text-lg md:text-justify">
                Cambodian Students&#39; Association in Japan (CSAJ) was founded
                in 1994 by a group of Cambodian MEXT Scholarship students
                studying in various universities across Japan. The association
                was established to provide a platform for Cambodian students in
                Japan to come together, share their experiences, and support
                each other. Initially, the CSAJ was a small organization with a
                limited number of members. However, over the years, it has grown
                in size and scope, and today it is a thriving community of
                Cambodian students and graduates in Japan. Today, CSAJ has
                become an important voice for Cambodian students in Japan,
                advocating for their interests and concerns. It continues to be
                an active and dynamic organization, dedicated to promoting
                friendship and understanding between Japan and Cambodia.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-6xl px-3 mx-auto  lg:px-8 xl:px-0 md:px-0 md:flex-row  py-4">
          <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
            <h2 className="pb-2 text-center md:text-left text-4xl font-extrabold cursor-pointer lg:text-4xl text-gray-800">
              Our Work
            </h2>
          </div>

          <div className="relative w-full px-5 md:px-0 mt-6 overflow-hidden md:mt-1 md:w-9/12">
            <div className="w-full space-y-6">
              <p className="text-lg text-gray-600 text-left leading-[20px] md:text-lg md:text-justify">
                Currently, CSAJ has played an important role in promoting
                cultural exchange and strengthening the relationship between
                Japan and Cambodia. The association regularly organizes events
                and activities that showcase Cambodian culture and tradition,
                such as Khmer New Year, traditional dance performances, and
                lectures about Cambodia to Japanese students. In addition to
                promoting cultural exchange, CSAJ also provides support and
                assistance to Cambodian students in Japan. The association
                offers academic and career advice, joint job-hunting seminars
                with companies, and networking opportunities to its members.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row  pt-4 pb-16">
          <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
            <h2 className="pb-2 text-center md:text-left text-4xl font-extrabold cursor-pointer lg:text-4xl text-gray-800">
              Our Structure
            </h2>
          </div>

          <div className="relative w-full px-5 mt-6 overflow-hidden md:px-0 md:mt-1 md:w-9/12">
            <div className="w-full space-y-6 text-gray-700">
              <p className="text-lg text-left leading-[20px] text-gray-600 md:text-lg md:text-justify">
                Cambodian Students’ Association in Japan (CSAJ) consists of 5
                regional associations:
              </p>
              <ul class="text-lg list-inside list-decimal">
                <li>Cambodian Students’ Association in Kanto (CSAK)</li>
                <li>Cambodian Students Association in Nagoya (CSAN)</li>
                <li>Khmer Student Association in Kansai (KSAK)</li>
                <li>Cambodian Students Association in Hiroshima (CSAH)</li>
                <li>Association of Cambodian Students in Kyushu (ACSK)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MemberList memberList={memberlist2024} />

      <Button href="/members" text="See Previous Years' Members" />
    </Layout>
  );
}
