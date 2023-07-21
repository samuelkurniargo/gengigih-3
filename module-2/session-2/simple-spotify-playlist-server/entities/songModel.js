import { v4 as uuid } from "uuid";
import songs from "./songs.json" assert { type: "json" };

export function getAllSongs() {
  return songs.sort((a, b) => b.playedSong - a.playedSong);
}

export function getSongById(songId) {
  const song = songs.filter((song) => song.id === Number(songId));
  return song;
}

export function playSong(songId) {
  let song = songs.filter((song) => song.id === Number(songId));
  song[0].playedSong += 1;
  return song;
}

export function addSong(title, artist, url) {
  let newSong = {
    id: uuid(),
    title: title,
    artist: artist,
    url: url,
    playedCount: 0,
  };
  songs.push(newSong);
  return newSong;
}
