const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/styles", express.static(__dirname + '/assets/css'));
app.use("/js", express.static(__dirname + '/assets/js'));

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));