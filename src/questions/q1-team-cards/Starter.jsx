import { useState } from "react";

function BakerCard({ name, role }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function TeamSection() {
  const bakers = [
    { id: 1, name: "Riya", role: "Head Baker" },
    { id: 2, name: "Arjun", role: "Pastry Chef" },
    { id: 3, name: "Meena", role: "Decorator" }
  ];

  return (
    <div>
      {bakers.map((baker) => (
        <BakerCard 
          key={baker.id} 
          name={baker.name} 
          role={baker.role} 
        />
      ))}
    </div>
  );
}

export default TeamSection;