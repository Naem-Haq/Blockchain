# HaqTuah Ticketing DApp

A decentralized ticketing application built on Ethereum's Holesky testnet. This DApp allows users to create wallets, purchase tickets, transfer tickets, and verify ticket ownership.

## Features

- **Wallet Creation**: Create and download encrypted Ethereum wallets
- **Ticket Purchase**: Buy tickets using ETH
- **Balance Checking**: View ticket balances for any address
- **Ticket Transfer**: Transfer tickets to other addresses
- **Doorman Check**: Verify ticket ownership for event entry
- **Remaining Tickets**: Check how many tickets are still available

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MetaMask browser extension
- Holesky testnet ETH (for testing)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd haqtuah-dapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
HOLESKY_RPC_URL=https://ethereum-holesky.publicnode.com
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
VENDOR_ADDRESS=your_vendor_wallet_address
TICKET_PRICE_ETH=0.001
INITIAL_SUPPLY=1000000
CONTRACT_ADDRESS=0x017D2E757228843D03Af332677ecED1d330A777d
```

## Smart Contract Deployment

1. Deploy the contract to Holesky testnet:
```bash
npx hardhat run scripts/deploy.js --network holesky
```

2. The contract will be deployed and the address will be displayed in the console.

## Frontend Setup

1. The frontend is located in the `frontend` directory
2. All contract addresses and RPC URLs are configured in the HTML files
3. The ABI is stored in `frontend/js/abi.js`

## Usage

1. **Create a Wallet**:
   - Navigate to the "Create Wallet" page
   - Enter a password
   - Click "Create Wallet" to create on-chain
   - Download the keystore file for future use

2. **Purchase Tickets**:
   - Upload your keystore file
   - Enter your password
   - Select the number of tickets (1-10)
   - Click "Purchase Tickets"

3. **Check Balance**:
   - Enter a wallet address or upload your keystore
   - View the ticket balance

4. **Transfer Tickets**:
   - Upload your keystore
   - Enter recipient address
   - Select number of tickets
   - Click "Transfer"

5. **Doorman Check**:
   - Enter a wallet address
   - Verify ticket ownership

## Development

- Smart contracts are in the `contracts` directory
- Frontend code is in the `frontend` directory
- Deployment scripts are in the `scripts` directory
- Tests are in the `test` directory

## Testing

Run the test suite:
```bash
npx hardhat test
```

## Security

- Never share your private key or keystore file
- Always use a strong password for wallet creation
- Keep your `.env` file secure and never commit it to version control

## License

[Add your license here]

## Contact

[Add your contact information here]
