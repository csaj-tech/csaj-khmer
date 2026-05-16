import Button from "../../../components/button";
import MemberList from "../../../components/memberlist";
import memberlist2025 from "../../../data/members/2025";

export default function About() {
  return (
    <>
      <h1 className="font-sans leading-none py-12 text-[42px] md:text-6xl lg:text-6xl font-extrabold pt-0 md:pt-9 mb-6 relative text-center text-blue-600">
        CSAJ Members: 2025
      </h1>
      <MemberList memberList={memberlist2025} />
      <Button href="/members" text="Back to Members" />
    </>
  );
}

