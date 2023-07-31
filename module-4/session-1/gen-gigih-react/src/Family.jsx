const dummyDb = [
  {
    id: 0,
    name: "Pablo escobar",
    gender: "Male",
  },
  {
    id: 1,
    name: "Thomas Shelby",
    gender: "Male",
  },
  {
    id: 2,
    name: "Barbie",
    gender: "Female",
  },
  {
    id: 3,
    name: "Barbie 2",
    gender: "Female",
  },
];

export default function List() {
  //   const femaleMembers = dummyDb.filter((member) => member.gender === "Female");
  //   const listItems = femaleMembers.map((member) => (
  // <li key={member.id}>{member.name}</li>
  //   ));
  //   return <ul>{listItems}</ul>;
  return dummyDb.map((data) => {
    return (
      <div className="card" key={data.id}>
        <h1>{data.name}</h1>
        <h2>{data.gender}</h2>
      </div>
    );
  });
}
