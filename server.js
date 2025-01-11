const express = require('express');
const path = require('path');
const app = express();

// Set correct MIME types
app.use(express.static('static', {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        } else if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

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
    res.sendFile(path.join(__dirname, 'static', 'index.html'), {
        headers: {
            'Content-Type': 'text/html'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
