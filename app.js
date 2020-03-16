const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/index');

const app = express();
const PORT = 5000;

var corsOptions = {
  origin: 'https://jolly-meninsky-8f99f1.netlify.com/',
  optionsSuccessStatus: 200
};

app.get('/products/:id', cors(corsOptions), function(req, res, next) {
  res.json({
    msg:
      'This is CORS-enabled for only https://jolly-meninsky-8f99f1.netlify.com/.'
  });
});

app.listen(80, function() {
  console.log('CORS-enabled web server listening on port 80');
});

// app.use(cors());

// Pick and choose which middleware you want
// You will definitely add to and subtract from this list

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);

app.get('/', (request, response) => {
  response.send('Working');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
