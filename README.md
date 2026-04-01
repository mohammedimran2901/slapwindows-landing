# 👋 SlapWindows — Landing Page

> Slap your Windows laptop. It screams back. That's it. That's the app.

The official Next.js landing page and payment system for SlapWindows. Users pay once, receive a license key via email, download the `.exe`, and start slapping their laptop.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router) + TypeScript |
| Payment | Dodo Payments (one-time, $4) |
| Database | MongoDB Atlas (license key storage) |
| Email | Resend (license key delivery) |
| Deployment | Vercel |

---

## Project Structure

```
slapwindows/
├── app/
│   ├── page.tsx                      ← Landing page (hero, sound packs, pricing)
│   ├── success/
│   │   └── page.tsx                  ← Post-payment success page
│   └── api/
│       ├── checkout/
│       │   └── route.ts              ← Generate Dodo payment link
│       ├── webhook/
│       │   └── route.ts              ← Confirm payment + send license email
│       └── verify-license/
│           └── route.ts              ← Validate license key (used by .exe)
├── lib/
│   ├── mongodb.ts                    ← MongoDB connection helper
│   └── license.ts                   ← License key generator (SLAP-XXXX-XXXX-XXXX-XXXX)
├── models/
│   └── License.ts                   ← Mongoose schema
└── .env.local                       ← Secret environment variables
```

---

## Payment Flow

```
User enters name + email on landing page
          ↓
POST /api/checkout → Dodo payment link is generated
          ↓
User pays $4 on Dodo checkout page
          ↓
Dodo fires POST /api/webhook
          ↓
License key generated → saved to MongoDB
          ↓
Email sent via Resend → license key + download link
          ↓
User redirected to /success page
          ↓
User downloads .exe → enters key → ✅ Unlocked
```

---

## Getting Started

### 1. Install dependencies

```bash
npx create-next-app@latest slapwindows --typescript --tailwind --app
cd slapwindows
npm install dodopayments @dodopayments/nextjs mongoose resend
```

### 2. Copy project files

Place these files into your project:

```
app/page.tsx
app/success/page.tsx
app/api/checkout/route.ts
app/api/webhook/route.ts
app/api/verify-license/route.ts
lib/mongodb.ts
lib/license.ts
models/License.ts
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# Dodo Payments
DODO_PAYMENTS_API_KEY=your_dodo_api_key_here
DODO_PAYMENTS_WEBHOOK_KEY=your_webhook_secret_here
DODO_PAYMENTS_RETURN_URL=https://yourdomain.com/success
DODO_PAYMENTS_ENVIRONMENT=live_mode
DODO_PRODUCT_ID=prod_xxxxxxxxxxxxxxx

# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/slapwindows

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# .exe download link (GitHub Releases)
NEXT_PUBLIC_DOWNLOAD_URL=https://github.com/YOURNAME/slapwindows/releases/download/v1.0.0/SlapWindows.exe
```

### 4. Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 5. Verify build

```bash
npm run build
```

---

## Third-Party Setup

### Dodo Payments
1. Sign up at [dodopayments.com](https://dodopayments.com)
2. Complete business verification (1–2 days)
3. Create a product: **$4 one-time payment**
4. Copy `DODO_PAYMENTS_API_KEY` from the API Keys page
5. Go to Webhooks → New Endpoint:
   - **URL:** `https://yourdomain.com/api/webhook`
   - **Event:** only `payment.succeeded` ✅
   - Copy the signing secret → `DODO_PAYMENTS_WEBHOOK_KEY`

### MongoDB Atlas
1. Sign up at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free cluster (M0 — free forever)
3. Add a database user under **Database Access**
4. Allow all IPs under **Network Access** → `0.0.0.0/0`
5. Click **Connect** → copy the connection string → `MONGODB_URI`

### Resend
1. Sign up at [resend.com](https://resend.com)
2. Add your domain or use the free sandbox for testing
3. Generate an API key → `RESEND_API_KEY`
4. Update the `from` field in `app/api/webhook/route.ts` with your email

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

After deploying, go to **Vercel Dashboard → Settings → Environment Variables** and add all your `.env.local` values.

Then update your Dodo webhook URL to:
```
https://yourdomain.com/api/webhook
```

---

## License Key Format

```
SLAP-A1B2-C3D4-E5F6-G7H8
```

- Prefix: `SLAP-`
- Four groups of 4 uppercase hex characters
- Generated using Node.js `crypto.randomBytes`
- Stored in MongoDB on successful payment
- One payment = one key (duplicate protection built in)

---

## API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/checkout` | POST | Generate a Dodo Payments checkout URL |
| `/api/webhook` | POST | Handle payment confirmation and send license email |
| `/api/verify-license` | POST | Validate a license key (called by the .exe) |

### `POST /api/verify-license`

**Request:**
```json
{ "key": "SLAP-A1B2-C3D4-E5F6-G7H8" }
```

**Success response:**
```json
{ "valid": true, "email": "user@example.com" }
```

**Failed response:**
```json
{ "valid": false }
```

---

## Python App Integration

Set this URL in `license.py`:

```python
API_URL = "https://yourdomain.com/api/verify-license"
```

On first activation, the key's `activated` field is set to `true` in MongoDB.

---

## Additional Pages to Create

These pages are not included but are recommended:

| Page | Path | Notes |
|---|---|---|
| Privacy Policy | `app/privacy/page.tsx` | Required for payment processors |
| Terms of Service | `app/terms/page.tsx` | Covers no-refund policy |

Also add to `app/globals.css`:
```css
input::placeholder { color: #555; }
body { background: #0a0a0a; margin: 0; }
```

---

## Key Design Decisions

- **No refunds** — clearly stated on the pricing card, in the FAQ, and in the email footer. The webhook intentionally does not handle `refund` events.
- **Duplicate payment protection** — each `paymentId` can only generate one license key.
- **Offline fallback** — if the license server is unreachable, the `.exe` performs a local format check (`SLAP-XXXX-XXXX-XXXX-XXXX`) so users are not locked out.
- **Webhook-first** — license keys are generated on the webhook, not on the checkout redirect, ensuring reliability even if the user closes the tab during payment.
---

*Built with frustration by someone whose laptop had it coming* 👋