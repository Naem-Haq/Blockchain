import { provider } from "./web3Provider.js";
import { loadBalances } from "./balanceChecker.js";

export async function connectWallet() {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById("address").innerText = address;
    document.getElementById("walletInfo").style.display = "block";
    document.getElementById("buySection").style.display = "block";
    loadBalances();
}

document.getElementById("connectWalletButton")
    .addEventListener("click", connectWallet);
