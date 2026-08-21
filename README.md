# Alike — Web3 Engineer Portfolio

A dark, editorial portfolio for Hammed Ali Oyeleye (Alike), a Web3 engineer in training from Lagos, Nigeria. The site is built with Next.js 14 App Router, Tailwind CSS, Framer Motion, React Icons, and `next/font`.

## Run locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Create a production build locally:

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js**.
5. Leave the build command and output settings at their defaults.
6. Click **Deploy**.
7. Each new push to the connected production branch will trigger a new deployment.

The project does not require environment variables.

## Connect a custom domain on Vercel

1. Open the project in Vercel.
2. Go to **Settings → Domains**.
3. Enter the domain you own and click **Add**.
4. Copy the DNS records Vercel displays.
5. Add those records at your domain registrar. Vercel commonly uses an `A` record for the apex domain and a `CNAME` record for `www`, but follow the exact values shown in your dashboard.
6. Return to Vercel and wait for DNS verification.
7. Choose the preferred domain and enable HTTPS after verification.

## Update portfolio content

- Edit project cards in [`data/projects.js`](./data/projects.js).
- Edit skill groups and labels in [`data/skills.js`](./data/skills.js).
- Edit the timeline in [`data/journey.js`](./data/journey.js).
- Edit the article list in [`components/Writing.jsx`](./components/Writing.jsx).
- Edit personal metadata in [`app/layout.js`](./app/layout.js).

## Exact terminal commands

Install all dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Deploy with the Vercel CLI:

```bash
npm install --global vercel
vercel login
vercel
vercel --prod
```

The alias is written as **Alike** throughout the portfolio.
