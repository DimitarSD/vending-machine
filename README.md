## Getting Started

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/DimitarSD/vending-machine.git
   cd vending-machine
   ```

2. Install dependencies

   ```bash
   npm install
   ```

### Running the Project

1. Install `json-server` globally using npm:

   ```bash
   npm install -g json-server
   ```

2. Start the mocked API server

   ```bash
   npx json-server --watch db.json --port 3001
   ```

3. Start the React development server

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Accepted Coin Denominations

- 0.10 BGN
- 0.20 BGN
- 0.50 BGN
- 1.00 BGN
- 2.00 BGN
