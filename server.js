const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('static'));

// Handle all routes by sending the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
