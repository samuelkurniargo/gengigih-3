import express from "express";
import {
  getAllSongs,
  getSongById,
  addSong,
  playSong,
} from "../controllers/songController.js";

const router = express.Router();

router.get("/", getAllSongs);
router.get("/:id", getSongById);

router.post("/", addSong);

router.get("/play/:id", playSong);

export default router;
