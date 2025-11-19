export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    res.status(400).send("URL tidak ditemukan.");
    return;
  }

  try {
    const response = await fetch(url);
    const text = await response.text();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(text);
  } catch (err) {
    res.status(500).send("Gagal mengambil HTML.");
  }
}
