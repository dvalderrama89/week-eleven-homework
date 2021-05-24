const express = require("express");
const path = require('path');
const fs = require('fs');
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

// API calls
app.get('/api/notes', (req, res) => {
    fs.readFile(`${__dirname}/db/db.json`, 'utf-8', (err, data) => {
        if (err) throw err;
        
        res.json(JSON.parse(data));
    });
});
app.post('/api/notes', (req, res) => {

});
app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Delete received for ID: ${id}`);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));