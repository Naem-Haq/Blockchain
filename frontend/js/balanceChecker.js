import { provider, ethersLib } from "./web3Provider.js";

const tokenAddress = "0xb927f3EdEda09B9A6708349b771e41e03518fa96";
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
