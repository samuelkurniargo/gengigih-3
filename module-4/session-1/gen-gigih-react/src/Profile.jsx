function Profile({ data }) {
  // console.log(data)
  let color;
  if (data.gender === "Male") {
    color = "Green";
  } else {
    color = "red";
  }
  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: `${data.age > 10 ? "green" : "red"}` }}
      >
        <h1 style={{ color: `${color}` }}>Hello, {data.name}</h1>
        <h2>Umur : {data.age}</h2>
        <img src={data.imageUrl} className="circle" />
      </div>
    </>
  );
}

export default Profile;
