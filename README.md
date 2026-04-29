# 🌤️ Live Weather Forecast App

A real-time weather forecasting web application built with **React** and **Vite**, powered by the **AccuWeather API**. Get instant, accurate weather data for any location worldwide — current conditions, hourly forecasts, and more.

---

## 🚀 Demo

 [Hisid Hoy](https://harihanshansdah.github.io/hisid_hoy/)

---

## ✨ Features

- 🌍 Search weather by city name or location
- 🌡️ Real-time current conditions (temperature, humidity, wind speed, etc.)
- 📅 Multi-day weather forecast
- ⏱️ Hourly forecast breakdown
- 🌙 Day/Night condition support
- ⚡ Fast performance powered by Vite
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [AccuWeather API](https://developer.accuweather.com/) | Weather data provider |
| CSS / Tailwind *(or your styling choice)* | Styling |

---

## 📦 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn
- An **AccuWeather API key** → [Get one free here](https://developer.accuweather.com/user/register)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_ACCUWEATHER_API_KEY=your_api_key_here
```

> ⚠️ Never commit your `.env` file. It's already listed in `.gitignore`.

4. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 AccuWeather API Usage

This app uses the following AccuWeather API endpoints:

- **Location Search** — `/locations/v1/cities/search`
- **Current Conditions** — `/currentconditions/v1/{locationKey}`
- **5-Day Forecast** — `/forecasts/v1/daily/5day/{locationKey}`
- **12-Hour Forecast** — `/forecasts/v1/hourly/12hour/{locationKey}`

All API calls use `VITE_ACCUWEATHER_API_KEY` from your `.env` file.

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── services/         # AccuWeather API calls
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Icons, images
│   ├── App.jsx
│   └── main.jsx
├── .env                  # Environment variables (not committed)
├── .gitignore
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧪 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add your `VITE_ACCUWEATHER_API_KEY` in the Vercel dashboard under **Project Settings → Environment Variables**.

### Deploy to Netlify

```bash
npm run build
# Then drag the `dist/` folder to Netlify, or connect your GitHub repo.
```

Add the environment variable in **Netlify → Site Settings → Environment Variables**.

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `VITE_ACCUWEATHER_API_KEY` | Your AccuWeather API key |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**HARI HANS HANSDAH**
- GitHub: [harihanshansdah](https://github.com/harihanshansdah)
- LinkedIn: [harihanshansdah](https://linkedin.com/in/harihanshansdah)

---

> Made with ❤️ using React + Vite
