const express = require('express');  
const app = express();                
const PORT = 3000;

const users = ['Alice', 'Bob', 'Charlie', 'David'];

app.get('/', (req, res) => {
  res.send('Server running ✅ Go to /users');
});

app.get('/users', (req, res) => {
  const name = req.query.name;

  if (name) {
    const filtered = users.filter(u =>
      u.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(users);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
