import {
  addSongService,
  getAllSongsService,
  getSongByIdService,
  playSongService,
} from "../usecases/songService.js";

export const getAllSongs = (req, res) => {
  let songs = getAllSongsService();

  res.json({
    data: songs,
  });
};

export const getSongById = (req, res) => {
  const { id } = req.params;

  const song = getSongByIdService(id);

  if (!song) {
    return res.status(404).json({
      message: "Song not found",
    });
  }

  res.json({
    data: song,
  });
};

export const addSong = (req, res) => {
  try {
    const { title, artists, url } = req.body;

    if (!title || !artists || !url) {
      throw new Error("Insufficient Parameter");
    }
    addSongService(title, artists, url);
    res.status(201).json({ message: "Song add successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const playSong = (req, res) => {
  const { id } = req.params;

  const song = playSongService(id);

  if (!song) {
    return res.status(404).json({
      message: "Song not found",
    });
  }

  res.json({
    data: song,
  });
};
