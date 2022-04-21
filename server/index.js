import express from "express";
import bodyParser from "body-parser";

import cors from "cors";
import booksRoutes from "./routes/books.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", booksRoutes);
const PORT = 5000;

app.listen(PORT, () => console.log("Server port: 5000"));
