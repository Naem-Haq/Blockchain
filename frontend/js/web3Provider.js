import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.esm.min.js";

export const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
export const ethersLib = ethers;
