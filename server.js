const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dir = path.dirname(require.resolve(__filename));

app.use(express.static(path.join(dir, 'website')));

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/website/html/index.html'));
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
