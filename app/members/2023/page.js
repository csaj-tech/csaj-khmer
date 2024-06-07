import Button from "../../../components/button";
import MemberList from "../../../components/memberlist";
import memberlist2023 from "../../../data/members/2023";

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
    <>
      <h1 className="font-sans leading-none py-12 text-[42px] md:text-6xl lg:text-6xl font-extrabold pt-0 md:pt-9 mb-6 relative text-center text-blue-600">
        CSAJ Members: 2023
      </h1>
      <MemberList memberList={memberlist2023} />
      <Button href="/members" text="Back to Members" />
    </>
  );
}
