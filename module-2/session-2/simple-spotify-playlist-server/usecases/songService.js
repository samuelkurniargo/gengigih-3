import {
  getAllSongs,
  getSongById,
  addSong,
  playSong,
} from "../entities/songModel.js";

export function getAllSongsService() {
  return getAllSongs();
}

export function getSongByIdService(songId) {
  return getSongById(songId);
}

export function playSongService(songId) {
  return playSong(songId);
}

export function addSongService(title, artist, url) {
  if (!title) {
    throw new Error("Invalid title name");
  }
  if (!artist) {
    throw new Error("Invalid artist name");
  }
  if (!url) {
    throw new Error("Invalid url");
  }

  addSong(title, artist, url);
  return;
}
