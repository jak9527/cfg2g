require("dotenv").config();
const express = require("express");
const cors = require("cors");
const process = require("process");
const { google } = require("googleapis");

const app = express();
const port = process.env.PORT || 8007;
const corsOptions = {
    origin: ["https://sjprit.com", "http://localhost:8007"],
    optionsSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

app.get("/", cors(corsOptions), (req, res) => {
    res.send({ status: "ok" });
});

app.get("/data", cors(corsOptions), async (req, res) => {
    const spreadsheetId = process.env.VITE_SHEET_ID;
    const range = "Career Fair Fall 2024!A2:C";
    const sheets = google.sheets({ version: "v4", auth: process.env.VITE_API_KEY });
    await sheets.spreadsheets
        .get({ ranges: range, spreadsheetId, includeGridData: true })
        .then((data) => {
            res.send({ data });
        })
        .catch((e) => {
            console.warn("ERROR WITH SHEETS", e);
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
