const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];

app.get('/search', (req, res) => {
  const q = req.query.q?.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(q));
  res.json(results);
});

app.listen(5009, () => console.log('Search Service running on 5009'));
