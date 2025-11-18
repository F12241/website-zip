import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send("URL tidak ditemukan.");

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();
    res.send(text);
  } catch (e) {
    res.status(500).send("Gagal mengambil HTML.");
  }
});

app.listen(3000, () => console.log("Proxy aktif di http://localhost:3000"));
