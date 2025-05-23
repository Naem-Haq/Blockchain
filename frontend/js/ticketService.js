import { provider, ethersLib } from "./web3Provider.js";
import { loadBalances } from "./balanceChecker.js";

const contractAddress = "0xb927f3EdEda09B9A6708349b771e41e03518fa96";
const abi = [
    "function buyToken() payable",
    "function pricePerToken() view returns (uint256)",
    "function decimals() view returns (uint8)"
];

const signer = provider.getSigner();
const contract = new ethersLib.Contract(contractAddress, abi, signer);

export async function buyTokens(amountEth) {
    const tx = await contract.buyToken({
        value: ethersLib.utils.parseEther(amountEth.toString())
    });
    await tx.wait();
    loadBalances();
}

document.getElementById("buyButton")
    .addEventListener("click", async () => {
        const amount = document.getElementById("buyAmountEth").value;
        try {
            await buyTokens(amount);
            alert("Tokens purchased!");
        } catch (err) {
            console.error(err);
            alert("Purchase failed");
        }
    });
