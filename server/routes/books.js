import express from "express";
import { getBooks, getBooksByCategoryId } from "../controllers/books.js";
const router = express.Router();

router.get("/", getBooks);
router.get("/category/:id", getBooksByCategoryId);

export default router;
