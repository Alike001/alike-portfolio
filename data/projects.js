export const projects = [
  {
    name: "Zecceipt",
    eyebrow: "Zcash · Payments & Verification",
    description: "Team-built merchant invoicing and payment receipts on Zcash Testnet. It checks transparent on-chain outputs and confirmations before issuing a verifiable receipt.",
    tech: ["Next.js", "Zcash RPC", "PostgreSQL", "Testing"],
    achievement: "1st place · Zcash Mini Hackathon (IRL), August 2026 · team",
    github: "https://github.com/Alike001/zecceipt",
    live: "https://zecceipt.vercel.app/",
    team: true,
    accent: "cyan"
  },
  {
    name: "ReserveRail",
    eyebrow: "HSK · Stablecoin Infrastructure",
    description: "Team-built issuer and reserve workflow for HSK Chain, with reserve-backed minting, holder redemptions and on-chain inspection. Testnet lifecycle verified; the mainnet pilot is unfunded.",
    tech: ["Solidity", "Foundry", "HSK Chain", "React"],
    achievement: "3rd place · EAG Hackathon, HSK track (IRL), August 2026 · team",
    github: "https://github.com/Alike001/reserverail-hsk",
    live: "https://alike001.github.io/reserverail-hsk/",
    team: true,
    accent: "indigo"
  },
  {
    name: "SaySure",
    eyebrow: "Payment Consent · Full Stack",
    description: "Built a buyer-controlled payment-request review workspace with separate buyer and helper accounts, passkey-backed consent and an isolated, testable demo. Consent is not a completed PayPal payment.",
    tech: ["Node.js", "WebAuthn", "PostgreSQL", "PayPal Sandbox"],
    status: "Public testing workspace · PayPal AI Hackathon",
    github: "https://github.com/Alike001/saysure",
    live: "https://saysure-staging-cnhm.onrender.com/app",
    accent: "cyan"
  },
  {
    name: "OyaCheck",
    eyebrow: "Digital Safety · Celo",
    description: "Built a link and forwarded-message checker that explains phishing warning signs in English and Nigerian Pidgin, backed by cited source material and a public Celo agent registration.",
    tech: ["JavaScript", "Celo", "Security", "Testing"],
    status: "Public checker · on-chain pilot evidence",
    github: "https://github.com/Alike001/oyacheck",
    live: "https://oyacheck-beta.onrender.com/app",
    accent: "indigo"
  },
  {
    name: "NimClaim",
    eyebrow: "Nimiq · Claims Workflow",
    description: "Created a contribution-reward claims flow with invitations, wallet-based claim verification and organiser review. Native live payouts remain disabled pending settlement controls.",
    tech: ["JavaScript", "Nimiq", "Wallets", "API Tests"],
    status: "Open-source project · payout controls in progress",
    github: "https://github.com/Alike001/nimclaim",
    accent: "cyan"
  },
  {
    name: "Signet",
    eyebrow: "Ledger · Agent Tooling",
    description: "Integrated Ledger hardware-wallet signing into an MCP-based agent workflow, putting wallet authorization into the transaction path.",
    tech: ["Node.js", "MCP", "Ledger SDK"],
    achievement: "$100 USDC bounty · Ledger N3XT Build & Show",
    github: "https://github.com/Alike001/signet",
    accent: "indigo"
  }
];
