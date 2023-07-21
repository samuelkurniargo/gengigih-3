import express from "express";
// import songs from "./songs.json" assert { type: "json" };
// import { v4 as uuidv4 } from "uuid";
import router from "./routes/songs.js";

const app = express();

app.use(express.json());

app.use("/songs", router);

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});


// Get all songs
// app.get("/songs", (req, res) => {
//   const { title, artists } = req.query;

//   let data = [];

//   if (title && artists) {
//     data = songs.filter(
//       (song) =>
//         song.title.toLowerCase().includes(title.toLowerCase()) &&
//         song.artists.some((artist) =>
//           artist.name.toLowerCase().includes(artists.toLowerCase())
//         )
//     );
//   } else if (title) {
//     data = songs.filter((song) =>
//       song.title.toLowerCase().includes(title.toLowerCase())
//     );
//   } else if (artists) {
//     data = songs.filter((song) =>
//       song.artists.some((artist) =>
//         artist.name.toLowerCase().includes(artists.toLowerCase())
//       )
//     );
//   } else {
//     data = songs;
//   }

//   res.send({
//     data: data,
//   });
// });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
