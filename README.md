# wiissal-portfolio

Personal portfolio website built with **Next.js 14**, **GSAP**, and **Framer Motion** — showcasing my work as a Fullstack & Mobile Developer based in Morocco.

🌐 **Live:** [wiissal-portfolio.vercel.app](https://wiissal-portfolio.vercel.app)

---

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + Inline Styles |
| Animations | GSAP + ScrollTrigger + Framer Motion |
| Language | JavaScript (React) |
| Deployment | Vercel |

---

## Features

- Animated preloader with letter reveal and progress bar
- Fixed navbar with hamburger menu on mobile
- Hero section with CTA buttons and stats
- Projects section with category filter and GSAP stagger entrance
- Services & Technologies with alternating service blocks and tech stack cards
- Contact section with floating social icons and message form
- Hire Me slide-in modal panel triggered from navbar
- Footer with 3D flip animation on social icons
- Fully responsive across all screen sizes

---

## Project Structure

```
wiissal-portfolio/
├── public/
│   └── images/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Preloader.jsx
│       │   ├── Hero.jsx
│       │   ├── Projects.jsx
│       │   ├── Services.jsx
│       │   ├── Contact.jsx
│       │   ├── HireMe.jsx
│       │   └── Footer.jsx
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── next.config.mjs
└── package.json
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/wiissal/wiissal-portfolio.git

# Navigate to the project
cd wiissal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

Deployed on **Vercel** with automatic redeployment on every push to `main`.

---

## Author

**Wissal Ouboujemaa** — Fullstack & Mobile Developer, Agadir Morocco

