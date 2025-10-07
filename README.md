# 🧬 SciBud Consulting Website

This repository contains the source code for the **SciBud Consulting** website — a minimalist, responsive site built with **Next.js** and **Tailwind CSS**.
It highlights consulting services for early-stage biotech companies, including **assay development**, **image analysis**, and **molecular design & animation**.

---

## 🚀 Overview

The site is organized into three main sections:

* **Hero** – concise introduction and call-to-action
* **Services** – clear breakdown of offered consulting areas
* **About** – professional biography and background

A single **“Contact me”** button in the header (in ornamental pepper color) routes visitors to the contact page.

---

## 🧩 Tech Stack

* **[Next.js](https://nextjs.org/)** – React-based framework for static and dynamic site rendering
* **[Tailwind CSS](https://tailwindcss.com/)** – utility-first CSS for modern, responsive design
* **[TypeScript / JavaScript (ES6)]** – component-driven logic
* **[Vercel](https://vercel.com/)** (optional) – deployment platform for fast global delivery

---

## 📁 Project Structure

```
scibud-consulting/
├── pages/
│   ├── index.tsx        # Homepage (hero, services, about)
│   ├── contact.tsx      # Contact form or link
│   └── _app.tsx         # Global styles and app config
├── public/
│   ├── logo.png         # SciBud Consulting logo
│   └── headshot.jpg     # Optional bio image
├── styles/
│   └── globals.css      # Tailwind base styles
├── tailwind.config.js   # Custom colors (pine, ornamental_pepper)
├── package.json         # Dependencies and scripts
└── README.md
```

---

## 🧰 Tools & Customization

In `tailwind.config.js`, two custom colors are defined:

```js
theme: {
  extend: {
    colors: {
      pine: '#0f1e1a',
      ornamental_pepper: '#d64b3b',
    },
  },
}
```

These are used throughout the design for a clean, modern palette.

---

## 💻 Development Setup

### 1. Install Node.js and npm

If you don’t already have Node installed:

```bash
# macOS (Homebrew)
brew install node
```

or visit [https://nodejs.org](https://nodejs.org) to download the latest LTS version.

Confirm installation:

```bash
node -v
npm -v
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🌐 Deployment

To deploy, push the repository to GitHub and connect it to **[Vercel](https://vercel.com/)**.
Vercel automatically detects the Next.js app and handles builds, previews, and production deployment.

---

## 🪶 License

This project is © SciBud Consulting.
All rights reserved.
