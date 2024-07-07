import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 1234
const app = express();

import soundToText from "./routes/soundToText.js";

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/soundtotext", soundToText);

app.listen(PORT, () => {
    console.log("Server running at: ", PORT);
});