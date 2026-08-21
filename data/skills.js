import { FiBox, FiCode, FiCpu, FiGitBranch, FiGlobe, FiLayers, FiTerminal } from "react-icons/fi";

export const skillGroups = [
  {
    label: "Smart contracts",
    icon: FiBox,
    skills: [
      ["Solidity", FiCode],
      ["Hardhat", FiLayers],
      ["Foundry", FiBox],
      ["Remix IDE", FiTerminal]
    ]
  },
  {
    label: "Languages",
    icon: FiCode,
    skills: [
      ["JavaScript", FiCode],
      ["Node.js", FiCpu],
      ["HTML", FiCode],
      ["CSS", FiLayers]
    ]
  },
  {
    label: "Tools",
    icon: FiCpu,
    skills: [
      ["ethers.js", FiBox],
      ["Git", FiGitBranch],
      ["GitHub", FiGitBranch],
      ["Linux", FiTerminal],
      ["MCP Protocol", FiCpu]
    ]
  },
  {
    label: "Networks",
    icon: FiGlobe,
    skills: [
      ["Ethereum", FiGlobe],
      ["Celo", FiGlobe],
      ["Mantle", FiGlobe],
      ["Solana", FiGlobe],
      ["Monad", FiGlobe]
    ]
  }
];
