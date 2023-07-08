const students = [
  {
    name: "Syaipuddin",
    age: 15,
    address: [
      {
        city: "Padang Sidempuan",
        province: "North Sumatera",
      },
      {
        city: "Medan",
        province: "West Sumatera",
      },
    ],
  },
  { name: "Rizki", age: 14 },
  { name: "Siraj", age: 19 },
];

console.log(students[0]);

console.log(students[1].address?.[2].city);
