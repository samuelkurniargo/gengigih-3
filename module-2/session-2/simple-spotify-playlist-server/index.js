import express from "express";
import songs from "./songs.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

/*
    1. Get all list of songs                v
    2. Play specific song from playlist     v
    3. Add song to playlist                 v
    4. Get song by name                     v
    5. Get song by Artist                   v
*/

// Get all songs
app.get("/songs", (req, res) => {
  const { title, artists } = req.query;

  let data = [];

  if (title && artists) {
    data = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(title.toLowerCase()) &&
        song.artists.some((artist) =>
          artist.name.toLowerCase().includes(artists.toLowerCase())
        )
    );
  } else if (title) {
    data = songs.filter((song) =>
      song.title.toLowerCase().includes(title.toLowerCase())
    );
  } else if (artists) {
    data = songs.filter((song) =>
      song.artists.some((artist) =>
        artist.name.toLowerCase().includes(artists.toLowerCase())
      )
    );
  } else {
    data = songs;
  }

  res.send({
    data: data,
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

app.get("/songs", (req, res) => {
  // console.log(req.query);
  const { title, artists } = req.query;

  const song = songs.filter((song) => {
    // console.log(title);
    return song.title.toLocaleLowerCase().includes(title.toLowerCase());
  });

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
