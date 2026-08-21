# Alike — Web3 Engineer Portfolio

Personal portfolio for Hammed Ali Oyeleye (Alike), a Web3 engineer in training from Lagos, Nigeria.

The site presents selected Solidity, blockchain tooling, MCP, deployment, writing, and competition work. It is built with Next.js 14 App Router, Tailwind CSS, Framer Motion, React Icons, and `next/font`.

## Local development

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the production checks locally:

```bash
npm run lint
npm run build
npm run start
```

No environment variables are required.

## Deploy to Vercel

### Vercel CLI

```bash
npm install --global vercel
vercel login
vercel
vercel --prod
```

### Vercel dashboard

1. Open [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repository.
3. Keep the detected framework as **Next.js**.
4. Leave the default build settings unchanged.
5. Select **Deploy**.

New pushes to the connected production branch can trigger deployments automatically.

## Add a custom domain

1. Open the project in Vercel and go to **Settings → Domains**.
2. Add the domain you own.
3. Copy the DNS records Vercel provides into your domain registrar.
4. Wait for verification, then select the preferred domain.

## Update the portfolio

- Projects: [`data/projects.js`](./data/projects.js)
- Skills: [`data/skills.js`](./data/skills.js)
- Timeline: [`data/journey.js`](./data/journey.js)
- Articles: [`components/Writing.jsx`](./components/Writing.jsx)
- Personal metadata and SEO: [`app/layout.js`](./app/layout.js)

Each section is a separate component under [`components/`](./components/).

## Links

- GitHub: https://github.com/Alike001
- Live site: https://portfolio-five-alpha-cor4xs15f8.vercel.app
