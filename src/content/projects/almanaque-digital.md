---
title: Almanaque Digital
description: A panoramic calendar that shows many weeks at once, for planning across months.
audience: People planning months ahead — a semester, a long trip, a project — who want the rest of the year in view while they place a date.
problem: A one-month grid hides how a date sits against the rest of the year, so trips, exams, and deadlines collide until you flip into that month. Almanaque keeps that longer span on a single screen.
features:
  - A continuous grid of weeks, about a year at a time (52 by default), on one scrollable screen
  - Events with a title, an optional subtitle, and a start and end date
  - Drag across empty days to create an event, or drag an event to another day to move it, keeping its length
  - Several calendars at once, each with a color, that you can show or hide
  - Share a calendar with a Gmail address, as an editor or view-only
  - Subscribe to public calendars, including Argentine public holidays for 2026
  - Emoji suggestions while naming an event
  - Sample student and traveler calendars you can browse before signing in
  - Spanish and English
  - Installable as a progressive web app
  - Google sign-in for your own calendars
stack:
  - Next.js (App Router) and React 19
  - TypeScript
  - Tailwind CSS
  - Postgres, with hand-written SQL typed by PgTyped
  - Zustand
  - Auth.js with Google
  - Vercel
url: https://calendar-app-v2-nine.vercel.app
repo: https://github.com/greggocabral/calendar-app-v2
order: 2
---

Almanaque Digital is a panoramic calendar for medium- and long-term planning. In the app it's called Almanaque. It shows many weeks on one screen, so trips, exams, weddings, and project milestones stay in context. It's a TypeScript and Next.js port of an earlier ClojureScript app.

The live site opens on two sample years, a student and a traveler, and the interface switches between Spanish and English.
