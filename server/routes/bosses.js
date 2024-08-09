import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

router.get("/", (_, res) => {
  fetch("https://eldenring.fanapis.com/api/bosses")
    .then((response) => response.json())
    .then((bosses) => res.status(200).json(bosses))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.get("/:id", (req, res) => {
  fetch(`https://eldenring.fanapis.com/api/bosses/${req.params.id}`)
    .then((response) => response.json())
    .then((boss) => res.status(200).json(boss))
    .catch((error) => res.status(500).json({ error: error.message }));
});

export default router;
