import { FiBox, FiCode, FiCpu, FiGitBranch, FiGlobe, FiLayers, FiTerminal } from "react-icons/fi";

export const skillGroups = [
  {
    label: "Languages & frontend",
    icon: FiCode,
    skills: [
      ["JavaScript", FiCode],
      ["TypeScript", FiCode],
      ["React / Next.js", FiLayers],
      ["HTML / CSS", FiCode]
    ]
  },
  {
    label: "Smart contracts",
    icon: FiBox,
    skills: [
      ["Solidity", FiCode],
      ["Foundry", FiBox],
      ["Hardhat", FiLayers],
      ["ethers.js", FiBox]
    ]
  },
  {
    label: "Backend & testing",
    icon: FiCpu,
    skills: [
      ["Node.js", FiCpu],
      ["PostgreSQL", FiLayers],
      ["REST APIs", FiTerminal],
      ["Automated tests", FiBox]
    ]
  },
  {
    label: "Tools & ecosystems",
    icon: FiGlobe,
    skills: [
      ["Git / GitHub", FiGitBranch],
      ["GitHub Actions", FiGitBranch],
      ["Linux", FiTerminal],
      ["MCP", FiCpu],
      ["Ethereum / Celo", FiGlobe]
    ]
  }
];