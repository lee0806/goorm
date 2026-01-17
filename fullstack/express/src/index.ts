import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/health", (req : Request, res : Response) => {
    res.json({ OK : true, message : "server is running" });
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});