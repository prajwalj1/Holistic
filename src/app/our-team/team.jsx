import React from 'react';

const team = () => {
  const teamMembers = [
    { name: 'MR. Reejesh Gautam', post: 'CEO', image: '/team/reejesh.jpg' },
  //  { name: 'MR. Prajwal Gautam', post: 'Full Stack Developer', image: '/team/prajwal.jpg' }, 
    { name: 'Miss. Oma Luitel', post: 'Nurse', image: '/team/oma.jpg' },
    { name: 'ER. Sevoke Gautam', post: 'Mechanical Engineering', image: '/team/sevoke.jpg' },
    { name: 'MR. Nir Prasad Gautam', post: 'Finance Manager', image: '/team/manoj.jpg' },

  ];

  return (
    <div className=" bg-gray-50 flex flex-col items-center py-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Team</h1>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4"
          >
            {/* Uniform Image Style */}
            <div className="w-48 h-48 overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default team;