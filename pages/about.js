import Layout from "../components/layout";
import Member from "../components/member";
import Member1 from "../components/member1";

import FeatureText from "../components/feature";


export const MISSION = {
    'title': "Mission",
    'abstract': "Bridging Cambodian and Japanese Communities",
    'detail': "Our mission is to create a safe and welcoming environment where Cambodian students can thrive academically, socially, and culturally, while also promoting cross-cultural exchange between Cambodia and Japan. We strive to empower our members by providing opportunities for personal and professional growth, and by promoting leadership and community involvement. At the same time, we are committed to advocating for the rights and interests of Cambodian students and promoting social justice and equality."
}

export const VISION = {
    'title': "Vision",
    'abstract': "Empowering Cambodian Students as Future Leaders",
    'detail': "Our vision is to empower Cambodian students studying in Japan to become leaders in their respective fields, and to promote mutual understanding and respect between Cambodian and Japanese cultures. We envision a future where Cambodian students are equipped with the knowledge, skills, and resources to contribute to the development of their communities and society as a whole. We believe that our members have the potential to become agents of change, and we are committed to providing them with the tools they need to achieve their goals."
}

export const VALUE = {
    'title': "Values",
    'abstract': "Inclusiveness, Empowerment, and Collaboration: Guiding Values of CSAJ",
    'detail': "We value inclusiveness and diversity, and strive to create a welcoming and supportive community for all Cambodian students studying in Japan. We believe in empowering our members with the knowledge, skills, and resources they need to succeed academically and professionally, and to make a positive impact in their communities. We promote cross-cultural exchange and understanding between Cambodia and Japan, and celebrate the unique cultural heritage of our members. We are committed to advocating for the rights and interests of Cambodian students studying in Japan, and promoting social justice and equality. We value collaboration and partnerships, both within our organization and with other student associations and organizations, to achieve our shared goals and objectives."
}

export default function About() {
    return (
        <Layout title="CSAJ-About Us">
            <h1 className="font-sans py-12 text-6xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-center text-blue-600">
                Cambodian Students' Association in Japan
            </h1>

            <>
                <section className="text-justify font-sans w-full px-8 py-8 md:py-8 xl:px-0 tails-selected-element bg-rose-200 text-white ">
                    <FeatureText info={MISSION} />
                    <FeatureText info={VISION} />
                    <FeatureText info={VALUE} />
                </section>
            </>
            
            <section>
                    <h2 className="font-sans py-12 text-5xl md:text-5xl lg:text-5xl font-extrabold mb-6 relative text-center text-blue-600">
                        Structure of CSAJ in 2023
                    </h2>
                    <div className="flex max-w-7xl lg:flex-row space-x-24 relative mx-auto py-4 lg:py-4 px-16 lg:px-16 text-xl">
                        <img src="/images/structures/csaj-2023.png" className="" />
                    </div>
            </section>
        </Layout>
    );
}