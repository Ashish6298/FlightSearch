🚀 Flight Search App - Soar with Vite & React! ✈️
Welcome aboard the Flight Search App, a cutting-edge React application powered by Vite, where the skies come alive with moving planes and your flight searches take flight! 🌤️ Built with a sleek design using Tailwind CSS, this app offers a responsive, validated search experience with real-time flight data. Launched on August 1, 2025, it’s your passport to seamless travel planning!
🌟 Table of Contents

✨ Overview
🚢 Features
🛠️ Installation
🎮 Usage
💻 Development with Vite
📂 Project Structure
📦 Dependencies
⚙️ Configuration
🤝 Contributing
📜 License
📩 Contact

✨ Overview
Dive into the Flight Search App, a Vite-powered React masterpiece! Watch animated planes glide across a gradient sky as you search for flights by origin, destination, dates, and travelers. With built-in validation (no past dates!) and a glassmorphism UI, this app blends functionality with flair. Perfect for travel enthusiasts, it’s designed to soar on any device!
🚢 Features

Dynamic Sky Canvas: Moving planes animate your background! 🎆
Responsive Magic: Flawless on mobile, tablet, and desktop with Tailwind CSS. 📱💻
Smart Validation: Blocks past dates and ensures valid inputs with real-time feedback. ✅
Live Flight Data: Fetches flight summaries via RapidAPI (key required). 🌐
Stunning Animations: Slide-in forms, bouncing icons, and pulsing buttons. 🎉
Modular React: Reusable components for a clean codebase. 🛠️

🛠️ Installation
Get your app flying in minutes! 🌬️

Clone the Repo:
git clone https://github.com/your-username/flight-search-app.git
cd flight-search-app


Install Dependencies:

Ensure Node.js (v18+) and npm are ready.
Run:npm install




Set Up Environment:

Create a .env file in the root.
Add your RapidAPI key:VITE_RAPIDAPI_KEY=your_rapidapi_key_here


Swap your_rapidapi_key_here with your key from RapidAPI.







🎮 Usage

Launch the App:
npm run dev


Visit http://localhost:5173 (Vite’s magic port) in your browser.


Search Flights:

Input origin (e.g., "DEL") and destination (e.g., "NYC").
Pick departure (today or later) and optional return date.
Set travelers (min 1).
Hit "Search Flights" to see results! ✈️


Build & Preview:

Build for production:npm run build


Preview locally:npm run preview





💻 Development with Vite
Scripts

npm run dev: Fires up Vite with hot reloading. ⚡
npm run build: Compiles a blazing-fast production build. 🚀
npm run lint: Checks code quality with ESLint. 🔍
npm run preview: Tests the build locally. 🎥

Best Practices

Leverage React 19 hooks and ES Modules.
Style with Tailwind’s utility classes.
Keep components modular and testable.
Validate inputs dynamically.

Linting
Run npm run lint to catch issues. Use an ESLint-enabled editor for real-time fixes.
📂 Project Structure
flight-search-app/
├── public/              # Static files (e.g., index.html)
├── src/                 # React source code
│   ├── App.jsx          # Main app layout
│   ├── components/      # Reusable components
│   │   ├── SearchForm.jsx    # Search input with validation
│   │   ├── FlightResults.jsx # Displays flight data
│   │   └── SkyCanvas.jsx     # Animated plane background
│   └── index.css        # Custom Tailwind styles
├── tailwind.config.js   # Tailwind configuration
├── .env                 # Environment variables
├── package.json         # Project metadata
└── README.md            # This file!

📦 Dependencies
Runtime

dotenv (v17.2.1): Manages .env vars.
react (v19.1.0): React core.
react-dom (v19.1.0): DOM rendering.

Dev Tools

@eslint/js (v9.30.1): ESLint engine.
@types/react (v19.1.8): TypeScript types.
@types/react-dom (v19.1.6): DOM types.
@vitejs/plugin-react (v4.6.0): Vite React plugin.
autoprefixer (v10.4.19): CSS prefixing.
eslint (v9.30.1): Linting.
eslint-plugin-react-hooks (v5.2.0): Hook rules.
eslint-plugin-react-refresh (v0.4.20): Fast Refresh support.
globals (v16.3.0): ESLint globals.
postcss (v8.4.38): CSS processing.
tailwindcss (v3.4.3): Styling framework.
vite (v7.0.4): Build tool extraordinaire.

⚙️ Configuration

Tailwind CSS: tailwind.config.js defines custom animations (slideInUp, pulseGlow, bounceSubtle).
Environment: .env holds VITE_RAPIDAPI_KEY.
ESLint: Configured for React 19 and modern JS.

🤝 Contributing
Ready to contribute? Let’s build something epic! 🌟

Fork this repo.
Create a branch: git checkout -b awesome-feature.
Commit changes: git commit -m "Add awesome feature".
Push: git push origin awesome-feature.
Open a PR with details!

Ensure npm run lint passes and add tests if possible.
📜 License
MIT License (or your choice). Create a LICENSE file and link it here!
📩 Contact
Got questions? Reach out!

Email: [ashishgoswami1013@gmail.com] 
GitHub: [@Ashish6298]
