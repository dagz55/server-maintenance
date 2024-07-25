const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', upload.none(), (req, res) => {
    console.log(req.body);
    // Process the form data here
    res.json({ message: 'Form submitted successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
