import React from "react";

const teamMembers = [
  {
    name: "Kola Ashiru-Balogun",
    position: "Managing Director",
    image: "img/Operationalmanager.jpg",
    description: "Kola has over 20 years of experience in the real estate industry and is responsible for overseeing all strategic operations."
  },
  {
    name: "Abimbola Owoeye",
    position: "Director",
    image: "img/Chairman.jpg",
    description: "Abimbola manages corporate relationships and drives business development within our organization."
  },
  {
    name: "Other staffs",
    position: "Independent Board Advisor",
    image: "img/otherstaffs.jpg",
    description: "They provides expert advice on company governance and long-term strategy as an independent advisor."
  },
  {
    name: "Daniel Font",
    position: "Marketer",
    image: "img/seller.jpg",
    description: "Daniel offers international insight, supporting the company’s global expansion and board strategies."
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>OUR <span>TEAM</span></h2>
        <p>
          Our foundation is built on the shoulders of a team with over 280 years of
          collective industry experience, creating a powerhouse of knowledge and innovation.
        </p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-container">
              <img src={member.image} alt={member.name} />
              <div className="hover-description">
                <p>{member.description}</p>
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
