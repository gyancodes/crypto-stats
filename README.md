# Cryptocurrency Data Aggregation Service

## Introduction

A server-side application built with Node.js and MongoDB that fetches real-time cryptocurrency data from the CoinGecko API and stores it in a MongoDB database hosted on MongoDB Atlas. It provides two APIs to retrieve the latest data and statistical deviation of cryptocurrency prices.

## Features

- Background job fetching current price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum every 2 hours.

- `/stats` API returning the latest data for a specified cryptocurrency.

- `/deviation` API calculating the standard deviation of the price for the last 100 records of a specified cryptocurrency.

## Prerequisites

- Node.js installed on your machine.

- A MongoDB Atlas account with a created cluster and database.

- Environment variables set for database connection and other configurations.

## Installation

1. Clone the repository:

```bash

git clone https://github.com/yourusername/crypto-stats.git

cd crypto-stats

```

2. Install dependencies:

```bash

npm install

```

3. Set up environment variables in a `.env` file:

```

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority

```

## Running the Project

Start the server:

```bash

node server.js

```

## API Documentation

### 1. `/stats`

- **Endpoint:** `GET /stats`

- **Query Parameters:**

- `coin` (required): The cryptocurrency ID (e.g., `bitcoin`, `matic-network`, `ethereum`).

- **Sample Request:**

```bash

curl "http://localhost:3000/stats?coin=bitcoin"

```

- **Sample Response:**

```json

{

"price": 40000,

"marketCap": 800000000,

"24hChange": 3.4

}

```

### 2. `/deviation`

- **Endpoint:** `GET /deviation`

- **Query Parameters:**

- `coin` (required): The cryptocurrency ID (e.g., `bitcoin`, `matic-network`, `ethereum`).

- **Sample Request:**

```bash

curl "http://localhost:3000/deviation?coin=bitcoin"

```

- **Sample Response:**

```json

{

"deviation": 4082.48

}

```



