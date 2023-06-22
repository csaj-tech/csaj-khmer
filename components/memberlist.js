import Image from 'next/image';

export default function MemberList() {
  const leadingMembers = [
    {
        position: 'Vice-President',
        name: 'Han Sreynet',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'President',
        name: 'Ouch Som Onn',
        imageUrl: '/logo.jpg',
    },
    {
      position: 'Vice-President',
      name: 'Srey Sokuncharia',
      imageUrl: '/logo.jpg',
    },
    
    // Add more leading members as needed
  ];

  const regionalAssociations = [
    {
      position: 'President of CSAK',
      name: 'Ouch Som Onn',
      imageUrl: '/logo.jpg',
    },
    {
        position: 'President of KSAK',
        name: 'Lim Sathya',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'President of CSAN',
        name: 'Chheav Reak Smey',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'President of ACSK',
        name: 'Tieng Rathanak',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'President of CSAH',
        name: 'Moeung Vanna',
        imageUrl: '/logo.jpg',
    },
    // Add more members as needed
  ];

  const secretariatOfficers = [
    {
        position: 'Secretary',
        name: 'Seng Vouchleang',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Secretary',
        name: 'Sou Yaly',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Secretary',
        name: 'Snameas Ponhahwatey',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Accountant',
        name: 'On Sothida',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Accountant',
        name: 'Ry Manydine',
        imageUrl: '/logo.jpg',
    },
  ];

  const committeeChairs = [
    {
      position: 'Chair of Cultural Committee',
      name: 'Chhoeur Pryalen',
      imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Educational Committee',
        name: 'Phou Sohearoth',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Media and Communication Committee',
        name: 'Mom Monyratana',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Public Relation Committee',
        name: 'Oudom Oum',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Student Service Committee',
        name: 'Sam Vithyea',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Event Planning Committee',
        name: 'Uk Socheata',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Information Technology Committee',
        name: 'Loem Mengsay',
        imageUrl: '/logo.jpg',
    },
    {
        position: 'Chair of Administrative Committee',
        name: 'Loch Sokleang',
        imageUrl: '/logo.jpg',
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
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">CSAJ</h2>
        {renderMembers(leadingMembers)}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Regional Associations</h2>
        {renderMembers(regionalAssociations)}
      </section>

      <section>
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Secretiat</h2>
        {renderMembers(secretariatOfficers)}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Committees</h2>
        {renderMembers(committeeChairs)}
      </section>
    </div>
  );
}
