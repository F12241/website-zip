import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    res.status(400).send("URL tidak ditemukan.");
    return;
  }

  try {
    const r = await fetch(url);
    const txt = await r.text();
    res.send(txt);
  } catch (err) {
    res.status(500).send("Gagal mengambil HTML.");
  }
}
