# ssedworkshop-2 CLI Tool

A versatile and feature-rich Command Line Interface (CLI) application built using Node.js and TypeScript.

This CLI offers 13 custom commands, ranging from basic mathematical operations and random number generation, to fetching real-time cryptocurrency prices, country details, and public IP information using external APIs.

## Prerequisites

Before getting started, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (installed with Node.js)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jadu07/ssedworkshop-2.git
   cd ssedworkshop-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile TypeScript to JavaScript**
   ```bash
   npx tsc
   ```

4. **Link the CLI tool locally (Optional but recommended)**
   This allows you to run the tool from anywhere using the `mycli` command.
   ```bash
   npm link
   ```

## Available Commands

Here is a list of all available commands:

| Command | Description | Example Usage |
|---------|-------------|---------------|
| `add <n1> <n2>` | Add two numbers | `mycli add 5 10` |
| `subtract <n1> <n2>` | Subtract second number from first | `mycli subtract 20 8` |
| `interest <principal> <rate> <time>` | Calculate simple interest | `mycli interest 1000 5 2` |
| `validate-phone <phone>` | Validate 10-digit phone number | `mycli validate-phone 1234567890` |
| `validate-email <email>` | Validate email address format | `mycli validate-email test@example.com` |
| `time` | Get the current local time | `mycli time` |
| `file-info <filepath>` | Display file details and content | `mycli file-info ./package.json` |
| `random <min> <max>` | Generate a random number within range | `mycli random 1 100` |
| `encode-base64 <data>` | Convert string or number to base64 | `mycli encode-base64 "hello world"` |
| `decode-base64 <data>` | Decode base64 string back to text | `mycli decode-base64 "aGVsbG8gd29ybGQ="` |
| `crypto <coin>` | Get real-time cryptocurrency price (USD) | `mycli crypto bitcoin` |
| `country <name>` | Get country information | `mycli country india` |
| `ip` | Get your current public IP address | `mycli ip` |

## Example Usage

If you haven't linked the package using `npm link`, you can run the commands using `node dist/index.js` or `npx ts-node index.ts`.

```bash
# Get the current price of Ethereum
mycli crypto ethereum
# Output: Current price of ethereum: $3500

# Get country information for Canada
mycli country canada
# Output: 
# Name: Canada
# Capital: Ottawa
# Region: Americas
# Population: 38,000,000

# Calculate simple interest on $5000 at 4% for 3 years
mycli interest 5000 4 3
# Output: 600
```

## Help
To see the full list of options and commands at any time, run:
```bash
mycli --help
```
