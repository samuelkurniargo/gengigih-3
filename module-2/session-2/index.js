import express from "express";
import users from "./users.json" assert { type: "json" };

const app = express();

app.get("/", (req, res) => {
  res.json({
    data: "GET RESPONSE",
  });
});

app.post("/", (req, res) => {
  res.json({
    data: "POST RESPONSE",
  });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const user = users.filter((user) => user.id === Number(id));
//   console.log(user);
  res.json({
    data: user,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


