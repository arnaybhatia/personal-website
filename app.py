from flask import Flask, send_from_directory, render_template
import os

app = Flask(__name__)

# Ensure correct MIME types
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
mime_types = {
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.html': 'text/html'
}

@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename, mimetype=get_mime_type(filename))

def get_mime_type(filename):
    ext = os.path.splitext(filename)[1]
    return mime_types.get(ext, 'text/plain')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port, debug=False)
