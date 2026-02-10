const express = require('express');
const app = express();
const PORT = 3000;
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);
  });
  next();
});
app.get('/users', (req, res) => {
  res.json(['Alice', 'Bob']);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
