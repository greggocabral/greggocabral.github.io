---
title: Alquilonido
description: Direct booking pages for short-term rentals, with a calendar, an instant quote, and WhatsApp.
audience: Owners and small managers of temporary rentals — cabins, apartments, apart-hotels — who already get booking questions on Instagram, TikTok, or WhatsApp and want to close those stays themselves. One account can hold several properties, and an owner can invite collaborators onto a property.
problem: Those inquiries turn into a thread about which dates are free and what they cost, and a night already taken on Airbnb or Booking.com can still look open on the direct link. Alquilonido quotes the stay on the property page, keeps the inquiries, and syncs availability with those other calendars. Booking is direct, on a flat subscription, with no commission on the reservation.
features:
  - A public page per property, with photos, amenities, a map, house rules, an FAQ, and things to do nearby
  - A date picker that shows availability and the total for the stay before the guest writes
  - WhatsApp opens with that quote filled in (name, dates, guests, price). In-app browsers that can't open WhatsApp get a contact form instead
  - A manager calendar for pending, confirmed, and cancelled reservations, plus blocked dates
  - Pricing rules, discounts, and holiday rates
  - iCal export, and iCal import from Airbnb, Booking.com, VRBO, or another calendar, refreshed about every 10 minutes
  - Demand stats, including dates people ask about and don't book
  - Availability images for Instagram stories, and marketing emails
  - An optional finances view, team members, payment details for the guest, and a Facebook pixel
  - Sign-in with an email magic link or Google. A passkey is on the login screen when that option is enabled
stack:
  - React 18 and TypeScript
  - Vite
  - Tailwind CSS and shadcn/ui
  - React Router
  - Supabase (Postgres, Auth, Storage, Edge Functions)
  - Vercel
url: https://reservalink.vercel.app
repo: https://github.com/greggocabral/reservalink
order: 1
---

Alquilonido is a property rental and booking product for short-term stays. Each property gets a public link the owner can share. A guest picks dates, sees the total, and sends a request that already includes their name, the dates, how many people are coming, and the price. The owner confirms the stay in a manager panel, and those nights close on the calendar.

The screens guests and owners use are in Spanish.
