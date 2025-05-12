import { provider, ethersLib } from "./web3Provider.js";

export async function signAndSend(txObject) {
  const signer = provider.getSigner();
  const txResponse = await signer.sendTransaction(txObject);
  return txResponse.wait();
}

export function handleReceipt(receipt) {
  console.log("Transaction Receipt:", receipt);
}

export function handleError(error) {
  console.error("Transaction Error:", error);
}
