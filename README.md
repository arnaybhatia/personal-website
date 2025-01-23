# Personal Portfolio Website

This is a personal project showcasing my skills, experience, and projects. The website is built with a focus on simplicity, functionality, and modern design principles. It includes sections for projects, skills, experience, and more.

---

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Dark/Light Theme Switcher**: Users can toggle between dark and light themes with a seamless experience.
- **Portfolio Showcase**: Highlights personal projects, including technologies used.
- **Experience & Skills**: A detailed summary of professional experience and key skills.
- **Dynamic Content Delivery**: Deployed using a Node.js server with Express.js for efficient content delivery.

---

## 🛠️ Tech Stack

### Frontend:
- **HTML5**: Semantic structure.
- **CSS3**: Responsive styles with custom light/dark themes.
- **JavaScript**: Interactive components and theme management.

### Backend:
- **Node.js**: Runtime environment.
- **Express.js**: Web server for routing and static file delivery.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14+)
- **npm** (v6+)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/arnay-bhatia/personal-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd personal-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🖼️ Project Structure

```
personal-website/
├── static/
│   ├── styles/
│   │   └── style.css         # CSS for the website
│   ├── scripts/
│   │   └── main.js           # JavaScript for interactivity
│   └── index.html            # Main HTML file
├── server.js                 # Node.js server
├── README.md                 # Project documentation
├── package.json              # Project dependencies and scripts
```

---

## 🌍 Deployment

The project is ready for deployment to platforms like **Heroku**, **Vercel**, or any other Node.js hosting platform. For production, ensure to set the `NODE_ENV` environment variable to `production`.

---

## 📂 Key Components

### Dark/Light Theme
- Managed via a toggle switch in the UI.
- Saves user preference using `localStorage`.
- Dynamically updates styles based on the selected theme.

### Portfolio Highlights
- **Local LLM Chatting**: Chatting with documents using llama.cpp and Open Web UI.
- **YouTube Summarizer**: Summarizes YouTube videos using Whisper AI and Hugging Face.
- **AI Mask Recognizer**: Detects mask usage with Jetson Nano.
- **Grade Predictor**: Predicts academic performance using machine learning.

### Backend
- Serves static files.
- Redirects HTTP traffic to HTTPS in production.
- Implements MIME type settings for proper file delivery.

---

## 📚 Future Enhancements

- Add a blog section to share insights and learnings.
- Include more animations and interactive elements.
- Integrate a contact form with backend handling.

---

## 📧 Contact

Feel free to reach out to me at:
- **LinkedIn**: [linkedin.com/in/arnay-bhatia](https://linkedin.com/in/arnay-bhatia)

---