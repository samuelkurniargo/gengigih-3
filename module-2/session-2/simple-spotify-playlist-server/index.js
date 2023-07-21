import express from "express";
import router from "./routes/songs.js";

const app = express();

app.use(express.json());

app.use("/songs", router);

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
