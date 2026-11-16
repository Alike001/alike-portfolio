# Alike — Software & Web3 engineering portfolio

Personal portfolio of **Hammed Ali Oyeleye (Alike)**, a Nigeria-based software builder with a Physics background.

Built with Next.js 14 App Router, Tailwind CSS, Framer Motion, React Icons, and `next/font`.

## Featured work

- **Zecceipt:** Zcash Testnet payment verification and public receipts. Team project; first place at the in-person Zcash Mini Hackathon (August 2026).
- **ReserveRail:** Reserve-backed stablecoin issuance on HSK Chain. Team project; third place, EAG Hackathon HSK track (August 2026). Mainnet pilot is unfunded.
- **SaySure:** Buyer-owned, passkey-backed request review; no public PayPal payment execution.
- **OyaCheck:** Link and forwarded-message safety explanations in English and Nigerian Pidgin.
- **NimClaim:** Wallet-verified claims and organiser review; live payouts disabled.
- **Signet:** Ledger/MCP agent-signing integration; $100 USDC Ledger N3XT bounty.

The site links to the respective public source repositories and live deployments where available. Hackathon placements are team achievements, not individual awards.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npm run build
```

## Update content

- Projects: [`data/projects.js`](./data/projects.js)
- Skills: [`data/skills.js`](./data/skills.js)
- Journey: [`data/journey.js`](./data/journey.js)
- Awards and open source: [`components/Awards.jsx`](./components/Awards.jsx)
- Articles: [`components/Writing.jsx`](./components/Writing.jsx)
- SEO metadata: [`app/layout.js`](./app/layout.js)

Each section is a component in `components/`.

## Custom domain: iamalikex.tech

The original portfolio README records a Vercel deployment at:

https://portfolio-five-alpha-cor4xs15f8.vercel.app

To connect the new domain, someone with access to the **correct Vercel project** and the registrar/DNS provider must:

1. In Vercel, open the portfolio project → **Settings → Domains**.
2. Add both `iamalikex.tech` and (optionally) `www.iamalikex.tech`. Choose the apex domain as canonical and redirect `www` to it.
3. Check Vercel's **exact DNS record recommendations** for each name. If DNS is managed elsewhere, add those records in the registrar's DNS panel.
4. Verify both domains in Vercel and confirm the automatically provisioned HTTPS certificate.
5. Open `https://iamalikex.tech` on mobile and desktop, test project/contact links, and only then update any canonical site URL/portfolio links and the Mercor portfolio field.

Vercel's generic starting example for an apex A record is `@` → `76.76.21.21`, but use the project-specific values shown in Vercel's Domains panel. Avoid changing nameservers unnecessarily; changing nameservers may affect other records such as email.

**Domain purchase alone does not connect the site.** This repository cannot alter the registrar's DNS records or assign the Vercel project domain.

Official guide: https://vercel.com/docs/domains/set-up-custom-domain

## Links

- GitHub: https://github.com/Alike001
- LinkedIn: https://www.linkedin.com/in/ali-hammed-9b5347255/
- Original deployment (from previous README): https://portfolio-five-alpha-cor4xs15f8.vercel.app
