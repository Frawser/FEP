var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
// Routes
app.get('/', function (req, res) {
    res.send('Hello from the backend!');
});
// Start the server
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
