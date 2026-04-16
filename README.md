# Premium MERN Stack Developer Portfolio Template

A high-end, professionally designed personal portfolio built specifically for Senior Developers, DevOps Engineers, and Tech Leads. This is a robust framework built on React and Vite meant to present your experience with elegance and speed. 

## Features

- **Blazing Fast**: Powered by Vite and React for instant load times and optimized hot module replacement.
- **Sleek UI/UX**: Includes advanced glassmorphism techniques mapped over a Deep Purple & Neon Blue theme.
- **AI Integration**: A pre-built custom floating AI Chatbot component perfectly designed to interact with your visitors.
- **Optimized for SEO**: Meta tags and Open Graph layout are baked in.
- **Component Driven**: Scalable logical directory hierarchy separating common UI elements from site sections. 
- **Production Ready**: Custom configurations configured for minification and optimal build chunk sizes.

## Folder Structure

```bash
src/
├── components/
│   ├── layout/        # Navbar, Footer, Cursor, Background elements
│   ├── sections/      # Home, About, Skills, Projects, Experience, Resume, Blog, Contact
│   └── ui/            # Granular components like the AIChatbot
├── App.jsx            # Main app container and routing emulation
├── main.jsx           # App mounting point
└── index.css          # Customized typography, spacing, and CSS variables
```

## Installation & Local Development

1. **Clone & Install Dependencies**
```bash
npm install
```

2. **Run Local Server**
```bash
npm run dev
```

3. **Build & Preview Production Output**
```bash
npm run build
npm run preview
```

## Deployment via Vercel

Vercel provides native and exceptionally optimized support for Vite + React applications.

1. **Push your code to GitHub**, ensuring all `.env` files and `node_modules` are excluded (handled by the provided `.gitignore`).
2. Log in to [Vercel.com](https://vercel.com/) and create a **New Project**.
3. Import your GitHub repository. Vercel will automatically detect `Vite`.
4. Ensure the Framework Preset is detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Vercel will provide you with a live domain in minutes!

## License

MIT License - feel free to customize and branch off this template for your own SaaS products or developer journeys!
