import express from "express";
import songs from "./songs.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

/*
    1. Get all list of songs
    2. Play specific song from playlist
    3. Add song to playlist
*/

// Get all songs
app.get("/songs", (req, res) => {
  res.send({
    data: songs,
  });
});

// Get song by id
app.get("/songs/:id", (req, res) => {
  const id = req.params.id;
  const song = songs.filter((song) => song.id === Number(id));

  res.send({
    data: song,
  });
});

// Add song to playlist
app.post("/songs", (req, res) => {
  let newSong = req.body;

  newSong = {
    id: uuidv4(),
    ...newSong,
  };

  songs.push(newSong);

  res.status(201).json({
    data: newSong,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
