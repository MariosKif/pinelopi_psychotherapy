# Content Editing Guide — Anemi Therapy Studio

All text content is centralised in TypeScript files inside `src/data/`.
You do **not** need to edit components or pages to change copy.

---

## Where to change what

| What you want to change | File to edit |
|---|---|
| Practice name, therapist name, credentials | `src/data/site.ts` → `site.name`, `site.therapist` |
| Contact details (email, phone, address) | `src/data/site.ts` → `site.contact` |
| Office hours | `src/data/site.ts` → `site.hours` |
| Navigation links | `src/data/site.ts` → `site.nav` |
| Footer disclaimer & copyright | `src/data/site.ts` → `site.footer` |
| Crisis resources | `src/data/site.ts` → `site.crisisResources` |
| Social media links | `src/data/site.ts` → `site.social` |
| SEO site URL, default description | `src/data/site.ts` → `site.meta` |
| Home page copy (hero, steps, etc.) | `src/data/home.ts` |
| About page (bio, values, ethics) | `src/data/about.ts` |
| Services (titles, descriptions, durations) | `src/data/services.ts` |
| Approach (modalities, first session) | `src/data/approach.ts` |
| Fees (prices, policies) | `src/data/fees.ts` |
| FAQ questions & answers | `src/data/faq.ts` |
| Contact page form labels & messages | `src/data/contact.ts` |

---

## Changing images

| Image | Where to place it |
|---|---|
| Therapist photo | `public/images/therapist.jpg` — then update the path in `src/data/site.ts` → `therapist.photo` and update the `<img>` tags in `src/components/home/TherapistIntro.astro` and `src/pages/about.astro` |
| Open Graph image (social sharing) | `public/images/og-image.jpg` (1200×630px recommended) |
| Favicon | `public/favicon.svg` |

---

## Changing design tokens

All colours, fonts, shadows, and border radii are defined in one place:

**`src/styles/global.css`** → inside the `@theme { }` block.

| Token | Example value | What it controls |
|---|---|---|
| `--color-sage` | `#8B9F82` | Primary accent colour |
| `--color-clay` | `#C2AA8E` | Secondary warm accent |
| `--color-background` | `#FAFAF7` | Page background |
| `--color-surface` | `#FFFFFF` | Card / panel backgrounds |
| `--color-text` | `#2A2926` | Primary text colour |
| `--font-heading` | `"Cormorant Garamond"` | Heading typeface |
| `--font-body` | `"Inter"` | Body typeface |

If you change fonts, also update the Google Fonts `<link>` in `src/layouts/Layout.astro`.

---

## Connecting the contact form

The form currently simulates a successful submission. To connect it to a real service:

### Option A: Formspree (easiest)
1. Create a free form at [formspree.io](https://formspree.io)
2. Open `src/components/ContactForm.astro`
3. Find the `TODO: CONNECT TO YOUR EMAIL SERVICE` comment
4. Uncomment the `fetch` call and replace `YOUR_FORM_ID` with your Formspree ID
5. Remove the `await new Promise(...)` simulation line

### Option B: Resend (self-hosted)
1. `npm install resend`
2. Switch Astro to server/hybrid mode with an adapter
3. Create `src/pages/api/contact.ts` with Resend logic
4. Update the form fetch URL to `/api/contact`

---

## Adding Google Maps

1. Go to Google Maps → find your office → Share → Embed a map → Copy the `src` URL
2. Open `src/data/site.ts`
3. Paste the URL into `site.contact.mapEmbedUrl`

---

## Deployment (Vercel)

1. Push the project to a GitHub/GitLab repository
2. Go to [vercel.com](https://vercel.com) → Import project
3. Vercel auto-detects Astro — no configuration needed
4. Set your custom domain in Vercel's dashboard
5. Update `site` in `astro.config.mjs` and `siteUrl` in `src/data/site.ts` to match your domain
6. Update `public/robots.txt` sitemap URL

### Running locally

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # production build
npm run preview  # preview production build
```

---

## Adding new FAQ questions

Open `src/data/faq.ts` and add an entry to the `items` array:

```ts
{
  question: 'Your new question?',
  answer: 'Your answer here.',
},
```

To feature a new question on the home page, update `featuredIndices` in `src/data/home.ts` → `faqTeaser`.

---

## Adding new services

Open `src/data/services.ts` and add an entry to the `items` array:

```ts
{
  id: 'your-anchor-id',
  title: 'New Service',
  whoItsFor: 'Description of who this is for.',
  whatToExpect: 'What clients can expect.',
  duration: '50-minute sessions · Typically 12–20 sessions',
},
```

To show it on the home page, add a matching entry to `servicesOverview.services` in `src/data/home.ts`.

---

## Spam protection notes

The contact form includes:
- **Honeypot field**: A hidden field that bots fill in but humans don't see. If filled, submission is silently ignored.
- **Client-side validation**: Required fields are validated before submission.

For production, consider adding:
- **Rate limiting**: If using a server endpoint, add rate limiting (e.g., 5 submissions per IP per hour).
- **reCAPTCHA or Turnstile**: For high-traffic sites, add Cloudflare Turnstile (privacy-friendly) or Google reCAPTCHA.
