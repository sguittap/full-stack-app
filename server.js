const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');
const robotsController = require('./controllers/robots');
//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/robots', robotsController);

app.get('/', (req, res) => {
  res.send('robots MF')
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
