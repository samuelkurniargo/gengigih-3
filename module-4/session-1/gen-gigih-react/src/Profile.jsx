const user = {
  name: "Generasi GIgih",
  imageUrl: "https://picsum.photos/200",
};

function Profile() {
  return (
    <>
      <div className="card">
        <h1>Hello, {user.name}</h1>
        <img src={user.imageUrl} className="circle"/>
      </div>
    </>
  );
}

export default Profile;
