import Image from "next/image";

export default function MemberList({ memberList }) {
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
      {memberList.map((group, idx) => (
        <section key={idx}>
          <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">
            {group.label}
          </h2>
          {renderMembers(group.members)}
        </section>
      ))}
    </div>
  );
}
