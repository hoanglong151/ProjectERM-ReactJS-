const express = require('express');
const cors = require('cors');
const path = require('path');

// Middleware
const connect = require('./middlewares/connectDB');
// Routes
const homeRoute = require('./routes/home.route');
const adminRoute = require('./routes/admin.route');
const app = express();
// const port = process.env.PORT || 9000;
// Connect DB
connect();

app.use(cors());

// if (process.env.NodeJS_ENV !== 'production') {
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
// }


app.use('/', homeRoute);
app.use('/admin', adminRoute);

app.listen(process.env.PORT || 3000)
