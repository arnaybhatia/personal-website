const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Trust proxy for secure headers
app.set('trust proxy', 1);

// Redirect HTTP to HTTPS in production
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production' && !req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});

// Handle all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
