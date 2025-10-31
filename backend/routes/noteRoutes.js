import express from "express";
import { body } from "express-validator";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title required").isLength({ max: 100 }),
    body("content").notEmpty().withMessage("Content required"),
  ],
  createNote
);

router.get("/", getNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
