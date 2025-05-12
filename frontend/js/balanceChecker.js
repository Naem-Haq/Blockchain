import { provider, ethersLib } from "./web3Provider.js";

const tokenAddress = "YOUR_CONTRACT_ADDRESS_HERE";
const tokenAbi = [
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)"
];
const tokenContract = new ethersLib.Contract(tokenAddress, tokenAbi, provider);

export async function loadBalances() {
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    const ethBalance = await provider.getBalance(address);
    document.getElementById("ethBalance").innerText = ethersLib.utils.formatEther(ethBalance);

    const rawTokenBalance = await tokenContract.balanceOf(address);
    const decimals = await tokenContract.decimals();
    document.getElementById("tokenBalance").innerText =
        ethersLib.utils.formatUnits(rawTokenBalance, decimals);
}
