const express = require('express');
const app = express();

// app.use('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/cats', (req, res) => {
  res.send('Meow!');
});

app.post('/cats', (req, res) => {
  res.send('Cat created!!!');
});

app.get('/about', (req, res) => {
  res.send('About this app');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
