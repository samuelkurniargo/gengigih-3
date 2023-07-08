// try {
//   let num = 5;
//   let s = "saya";
//   num.toUpperCase();
//   s.toUpperCase();
// } catch (error) {
//   console.log("Error bro ", error);
// }

let student = {
  id: 1, name:"alice"
}
let newStudent = {
  id:2, ...student, name: "bob"
}
console.log(newStudent);