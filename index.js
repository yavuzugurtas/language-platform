// this is the main entry point for our full app
// it serves frontend & provides access to our API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./language-partner/server/server');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('path',req.method + ': ' + req.path);
  next();
});
app.use('/', express.static(__dirname + '/language-partner/client'))
app.get('/', (req, res) => {
  res.send(__dirname + 'index.html');
});
app.use('/', api);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
