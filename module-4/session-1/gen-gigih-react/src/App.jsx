import { useState } from "react";
import "./App.css";
// import Profile from "./profile";
// import Family from "./Family";
import Clock from "./components/Clock";

function App() {
  // const dummyDb = [
  //   {
  //     id: 0,
  //     name: "Pablo escobar",
  //     gender: "Male",
  //   },
  //   {
  //     id: 1,
  //     name: "Thomas Shelby",
  //     gender: "Male",
  //   },
  //   {
  //     id: 2,
  //     name: "Barbie",
  //     gender: "Female",
  //   },
  //   {
  //     id: 3,
  //     name: "Barbie 2",
  //     gender: "Female",
  //   },
  // ];

  // return dummyDb.map((data) => {
  //   return <Family key={data.id} name={data.name} gender={data.gender} />;
  // });

  const [fontColor, setFontColor] = useState("black");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString(), 1000);
  });

  // handleColorChange((event) => {
  //   setFontColor(event.target.value);
  // });
  const handleColorChange = (event) => {
    setFontColor(event.target.value);
  }

  return (
    <>
      <select
        name="color"
        id="color"
        value={fontColor}
        onChange={handleColorChange}
      >
        <option value="#e4572e">Flame</option>
        <option value="#ffc914">Jonquil</option>
        <option value="#17bebb">Verdigris</option>
        <option value="#76b041">Kelly Green</option>
        <option value="#2e282a">Raisin Black</option>
        <option value="#1b998b">Persian Green</option>
        <option value="#2e294e">Space Cadet</option>
        <option value="#cdedf6">Light Cyan</option>
        <option value="#090c9b">Duke Blue</option>
        <option value="#f2e86d">Maize</option>
      </select>
      <Clock time={time} color={fontColor} />
    </>
  );
}

export default App;
