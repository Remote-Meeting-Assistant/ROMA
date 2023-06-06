const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const studentsRouter = require('./routes/students');

// Route handler for parsing body
app.use(express.json());
app.use(express.urlencoded());

// Serve all files when built with webpack
app.use('/dist', path.join('../dist'));

// Serve all static files
app.use(express.static('client'));

// Serve html files
app.get('/', path.join(__dirname, '../client/public/index.html'))

// Router for requests to database
app.use('/students', studentsRouter);

// Global error handler handler for unknown requests
app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Global middleware error handler
app.use((err, req, res, next) => {
  // Default err object
  const defaultErr = {
    log: 'express caught unknown middleware error',
    status: 500,
    message: {err: 'an error occured'}
  };
  const error = Object.assign(defaultErr, err);
  res.status(err.status).send(err.message);
});

app.listen(PORT);