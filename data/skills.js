import { FiBox, FiCode, FiCpu, FiGitBranch, FiGlobe, FiLayers, FiTerminal } from "react-icons/fi";

export const skillGroups = [
  {
    label: "Languages and app development",
    icon: FiCode,
    skills: [
      ["JavaScript", FiCode],
      ["TypeScript", FiCode],
      ["Node.js", FiCpu],
      ["React / Next.js", FiLayers],
      ["HTML / CSS", FiCode]
    ]
  },
  {
    label: "Smart contracts and chains",
    icon: FiBox,
    skills: [
      ["Solidity", FiCode],
      ["Foundry", FiBox],
      ["Hardhat", FiLayers],
      ["ethers.js", FiBox],
      ["Ethereum / Celo", FiGlobe],
      ["HSK / Zcash / Nimiq", FiGlobe]
    ]
  },
  {
    label: "Backend and verification",
    icon: FiCpu,
    skills: [
      ["PostgreSQL", FiLayers],
      ["REST APIs", FiCode],
      ["Blockchain RPC", FiTerminal],
      ["Automated testing", FiBox],
      ["WebAuthn", FiCpu]
    ]
  },
  {
    label: "Workflow and tooling",
    icon: FiGitBranch,
    skills: [
      ["Git / GitHub", FiGitBranch],
      ["GitHub Actions", FiGitBranch],
      ["Linux", FiTerminal],
      ["MCP protocol", FiCpu],
      ["Deployment", FiGlobe]
    ]
  }
];
