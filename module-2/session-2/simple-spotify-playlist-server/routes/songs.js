import express from "express";
import {
  getAllSongs,
  getSongById,
  addSong,
} from "../controllers/songController.js";

const router = express.Router();

router.get("/", getAllSongs);
router.get("/:id", getSongById);

router.post("/", addSong);

export default router;
