

# Enhancements for A2Z Laundry — Practical, No-Fluff

## What's missing from the current site

The site does pricing, services, turnaround, and QC well. What it lacks are the operational trust signals and practical tools that reduce friction for a returning customer in Ghatkopar.

---

## Proposed Additions

### 1. FAQ Section — Address Real Objections
A collapsible accordion section between Quality Control and Footer. Covers the questions customers actually ask before booking:
- "What if a garment is damaged or lost?" — State the policy plainly (replacement value, inspection on pickup).
- "What payment methods do you accept?" — Cash, UPI, etc.
- "Can I cancel or reschedule a pickup?" — State the window and process.
- "Do you handle delicate fabrics like silk or wool?" — Honest answer about what you will and won't take.
- "What areas do you deliver to?" — Define the service radius clearly.

Uses the existing Accordion component. No fluff — just direct answers.

### 2. Google Maps Embed in Footer
A small embedded map showing the shop location. Customers in Ghatkopar want to verify proximity before ordering. Replaces guesswork with a pin they can click for directions.

### 3. Mobile Navigation (Hamburger Menu)
The nav links are currently `hidden` on mobile (`hidden md:flex`). On a phone — where most local customers browse — they see only the logo and "Book Now." Adding a simple sheet/drawer menu so mobile users can jump to Pricing, Services, Turnaround, or Quality sections directly.

### 4. Sticky WhatsApp Floating Button (Mobile)
A fixed-position WhatsApp icon in the bottom-right corner on mobile screens. The "Book Now" button in the nav is small; a persistent floating CTA ensures the booking action is always one tap away regardless of scroll position.

### 5. Service Area Callout
A brief, explicit note (near pricing or as its own small section) stating the exact delivery coverage: "Free pickup & delivery within Ghatkopar East/West. Areas beyond Ghatkopar subject to additional charges — confirm via WhatsApp." Prevents wasted inquiries from out-of-range customers.

---

## Technical Summary

| Enhancement | Component/Approach | Files Modified |
|---|---|---|
| FAQ Section | Radix Accordion (already installed) | `Index.tsx` |
| Google Maps | `<iframe>` embed, no API key needed | `Index.tsx` |
| Mobile Nav | Sheet/Drawer component (already installed) | `Index.tsx` |
| Floating WhatsApp | Fixed-position button, shown below `md` breakpoint | `Index.tsx` |
| Service Area Callout | Text block near pricing section | `Index.tsx` |

All changes are in `Index.tsx`. No new dependencies. No backend. No new routes.

