import Image from 'next/image';

export default function MemberList() {
  const leadingMembers = [
    {
      position: 'Vice-President',
      name: 'Sreynet Han',
      imageUrl: '/images/structures/2023/han_sreynet.png',
    },
    {
      position: 'President',
      name: 'Som Onn Ouch',
      imageUrl: '/images/structures/2023/ouch_somonn.png',
    },
    {
      position: 'Vice-President',
      name: 'Sokuncharia Srey',
      imageUrl: '/images/structures/2023/srey_sokuncharia.png',
    },

    // Add more leading members as needed
  ];

  const regionalAssociations = [
    {
      position: 'President of CSAK',
      name: 'Som Onn Ouch',
      imageUrl: '/images/structures/2023/ouch_somonn.png',
    },
    {
      position: 'President of KSAK',
      name: 'Sathya Lim',
      imageUrl: '/logo.png',
    },
    {
      position: 'President of CSAN',
      name: 'Chheav Reak Smey',
      imageUrl: '/logo.png',
    },
    {
      position: 'President of ACSK',
      name: 'Tieng Rathanak',
      imageUrl: '/logo.png',
    },
    {
      position: 'President of CSAH',
      name: 'Moeung Vanna',
      imageUrl: '/logo.png',
    },
    // Add more members as needed
  ];

  const secretariatOfficers = [
    {
      position: 'Secretary',
      name: 'Vouchleang Seng',
      imageUrl: '/images/structures/2023/seng_vouchleang.png',
    },
    {
      position: 'Secretary',
      name: 'Yaly Sou',
      imageUrl: '/images/structures/2023/sou_yaly.png',
    },
    {
      position: 'Secretary',
      name: 'Ponhahwatey Snameas',
      imageUrl: '/images/structures/2023/snameas_ponhahwatey.png',
    },
    {
      position: 'Accountant',
      name: 'Sothida On',
      imageUrl: '/images/structures/2023/on_sothida.png',
    },
    {
      position: 'Accountant',
      name: 'Manydine Ry',
      imageUrl: '/images/structures/2023/ry_manydine.png',
    },
  ];

  const committeeChairs = [
    {
      position: 'Chair of Cultural Committee',
      name: 'Pryalen Chhoeur',
      imageUrl: '/images/structures/2023/chhoeur_pryalen.png',
    },
    {
      position: 'Chair of Educational Committee',
      name: 'Sothearoth Phou',
      imageUrl: '/images/structures/2023/phou_sothearoth.png',
    },
    {
      position: 'Chair of Media and Communication Committee',
      name: 'Monyratana Mom',
      imageUrl: '/images/structures/2023/mom_monyratana.png',
    },
    {
      position: 'Chair of Public Relation Committee',
      name: 'Oudom Oum',
      imageUrl: '/images/structures/2023/oum_oudom.png',
    },
    {
      position: 'Chair of Student Service Committee',
      name: 'Vithyea Sam',
      imageUrl: '/images/structures/2023/sam_vithyea.png',
    },
    {
      position: 'Chair of Event Planning Committee',
      name: 'Socheata Uk',
      imageUrl: '/images/structures/2023/uk_socheata.png',
    },
    {
      position: 'Chair of Information Technology Committee',
      name: 'Mengsay Loem',
      imageUrl: '/images/structures/2023/loem_mengsay.png',
    },
    {
      position: 'Chair of Administrative Committee',
      name: 'Sokleang Loch',
      imageUrl: '/images/structures/2023/loch_sokleang.png',
    },
    // Add more committee chairs as needed
  ];

  const renderMembers = (members) => (
    <div className="flex flex-wrap justify-center">
      {members.map((member, idx) => (
        <div key={idx} className="m-2 sm:m-4">
          <div className="p-4 flex flex-col items-center bg-white rounded-md">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={96}
                height={96}
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">CSAJ</h2>
        {renderMembers(leadingMembers)}
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Regional Associations</h2>
        {renderMembers(regionalAssociations)}
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Secretaries</h2>
        {renderMembers(secretariatOfficers)}
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Committees</h2>
        {renderMembers(committeeChairs)}
      </section>
    </div>
  );
}
