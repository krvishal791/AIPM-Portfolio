# Implementation Plan: AI Product Manager Minimalist Portfolio

## Overview
Transform the portfolio for **Vishal** into a minimalist, responsive portfolio for an aspiring **AI Product Manager** using the attached local video asset (`/assets/aistudio/avt_650fbc55.mp4`).

---

## 1. Hero Section & Video Tracking
- **Video Asset**:
  - Replace current video sources with `/assets/aistudio/avt_650fbc55.mp4`.
  - Disable autoplay/looping (`video.pause()`) so playback is purely driven by cursor position.
- **Headline Scaling**:
  - Change `"Hi, I am Vishal"` from huge viewport units (`14vw–17.5vw`) to a responsive, balanced heading (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl` or `clamp(2rem, 5vw, 4rem)`).
  - Ensures the headline sits cleanly across desktop, tablet, and mobile screens without wrapping awkwardly.
- **Video Container Sizing & Responsiveness**:
  - Constrain the video container size (`w-[260px] sm:w-[320px] md:w-[360px]`, `max-h-[48vh]`) so it no longer dominates the entire viewport.
  - Apply `object-contain` and protective aspect-ratio constraints so the character's face is never cropped or cut off on any mobile or desktop screen.
- **Lag-Free Cursor Tracking**:
  - Listen to `pointermove` and calculate normalized coordinates `normX` and `normY` (0 to 1).
  - Use `requestAnimationFrame` with lerp interpolation (`diff * 0.2`) to scrub `currentTime` smoothly across video duration without stutter, frame locking, or audio interference.
  - Subtle 3D card tilt aligned with cursor position to give depth.

---

## 2. "About Me" & Core Disciplines
- **Text Update**:
  - Strictly set the "About Me" description to: **"I am an AI product manager."**
  - Completely remove all dummy paragraphs, generic fluff, and extra placeholder cards (such as "Strategy & Discovery", "Metrics & Analytics", "AI Execution").
- **Core Disciplines Tag**:
  - Remove all existing placeholder tags.
  - Add exactly one tag: **"North Star Metric"**.
  - Keep the container clean for future skill additions.

---

## 3. Case Studies & Projects Showcase
- **Cleanup**:
  - Remove all four previous placeholder case studies, category filters, and "strategy and discovery" boilerplate.
- **Single Featured Project Card**:
  - Title: **"Late-Night School Run"**
  - Brand / Context: **Blinkit** (Speculative Commercial)
  - Duration: **1m 31s**
  - Description: Speculative AI-generated commercial exploring prompt engineering, multimodal video generation, narrative pacing, and product positioning for quick commerce.
- **Embedded Modal Player & Watch Link**:
  - Clicking "Watch Commercial" opens a responsive modal with an embedded video player plus a direct YouTube watch link button.
- **Micro-Tools Empty State**:
  - Clean, minimal placeholder grid slot reserved for future micro-tools and experiments.

---

## 4. Contact Section & Footer
- **Personal Showcase Reframing**:
  - Position the section around connecting with Vishal for AI Product Management opportunities, discussions, and collaborations (rather than agency client hiring).
- **Location & Response Text**:
  - Location updated strictly to **"India"**.
  - Remove "quick response within 24 hours" and any response time guarantees.
- **Contact Form**:
  - Leave all input placeholders completely blank (no "e.g. Sarah Connor" or "sarah@company.com").
- **Social Links**:
  - Keep **LinkedIn** and **GitHub**.
  - Replace Twitter/X with **YouTube**.
  - Completely remove **Substack**.
  - Update `ContactModal.tsx` to match the exact same personal PM framing and blank placeholders.

---

## 5. Verification Plan
1. **Compilation Check**: Run `compile_applet` and `lint_applet` to ensure zero TypeScript errors or missing imports.
2. **Visual & Responsive Verification**:
   - Check desktop layout: "Hi, I am Vishal" fits cleanly on a single line; hero video is neatly proportioned; video scrubs with cursor movement.
   - Check mobile layout: Character's face is 100% visible with zero clipping; layout flows naturally.
   - Check About Me: Strictly "I am an AI product manager." with single tag "North Star Metric".
   - Check Project Card: Blinkit "Late-Night School Run" displays, modal player works, YouTube watch link is accessible.
   - Check Contact: Location shows "India", blank placeholders, YouTube/LinkedIn/GitHub social links.
