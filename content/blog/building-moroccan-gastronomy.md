---
title: "Building Moroccan Gastronomy: the decisions behind my first real product"
date: "2026-11-28"
summary: "How I took a Moroccan food website from a React + Vite prototype to a live Next.js 16 site on its own domain, and the choices I made along the way: stack, design, workflow and email."
tags: ["nextjs", "tailwind", "project", "build in public"]
draft: false
---

[Moroccan Gastronomy](https://www.gastromoroccan.com) is a website about Moroccan recipes, food culture and ingredients, built for a worldwide audience. It's my first real product: live, on its own domain, and built in public on LinkedIn.

Coming from a pastry kitchen, I wanted a project close to my heart. But this article isn't about recipes. It's about the decisions: what I chose, what I changed my mind about, and why.

## Decision 1: starting over on a different stack

The first version was built with **React and Vite**. It worked, but I stopped and asked myself a question: *what does this site actually need?*

A food website lives on content and search engines. People find recipes on Google. A client-rendered React app makes that harder. So I made a tough call: **restart from scratch on Next.js 16**, keeping the same design.

The new stack:

- **Next.js 16** with the App Router, for server rendering and SEO
- **React 19** and **JavaScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

It's also a stack in high demand, so every hour spent on this project made me more employable. Restarting felt like going backwards at first. It wasn't: the second build was faster and cleaner, because I already understood the problem.

## Decision 2: Tailwind, but not everywhere

When I moved to Tailwind, I didn't force everything into utility classes. I went **hybrid**: Tailwind for most of the styling, and plain CSS for the complex animations where classes would become unreadable.

Tools should make code clearer, not prove a point.

## Decision 3: the design changed, and that's fine

My first inspiration was the luxury feel of the Royal Mansour website. As the project grew, I rebranded to a **forest green, white and black** palette inspired by Visit Marrakech: calmer, more natural, closer to food and to Morocco.

I also simplified the name and the navigation. The brand became **Moroccan Gastronomy**, with four clear sections: **Recipes · Food Culture · Ingredients · About**. Fewer choices, easier to explore.

## Decision 4: working like a team, even alone

I built the site the way a professional team would:

- **one Git branch per section**
- **one commit per file or change**, so the history tells the story of the project
- pull requests before merging

Nobody reviewed my code, but this discipline made it easy to find bugs, undo mistakes and see exactly what changed and when.

I also used an AI coding assistant for the first time on this project, as a pair-programmer: to explain concepts, review my code and help me debug, while I kept writing and committing the code myself.

## Decision 5: a real address, a real inbox

A real product needs a real way to be contacted. I set up **contact@gastromoroccan.com**, forwarding to a dedicated brand inbox, and planned the recipe feedback form with **Next.js Server Actions and Resend**, so messages are handled on the server and no secret key ever reaches the browser.

## Going live

The site is deployed on **Vercel** and connected to **gastromoroccan.com** through DNS records on Namecheap. Seeing my own domain load my own code for the first time is a feeling I won't forget.

I shared the build in public on LinkedIn, part by part. Writing about it forced me to understand what I was doing well enough to explain it.

## What's next

Version 1 is done, but the project isn't:

- **Reviews and ratings** with Supabase, my next learning challenge
- **Stories** about Moroccan gastronomy and its history
- **Experiences**: where to taste Moroccan food and where to take cooking classes
- Long term, a platform that helps **restaurants and food businesses** get discovered

## What I learned

- **Know what your project needs before choosing a stack.** For a content site, SEO decided everything.
- **Restarting isn't failing** when you restart with better understanding.
- **Professional habits pay off even when you work alone.**
- **Ship it, then improve it.** A live version 1 teaches more than a perfect version that never launches.