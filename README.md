Overview

This wallet application provides a secure way for users to manage their financial transactions. It authenticates and authorizes users to access certain endpoints in the database, ensuring that only authorized users can perform sensitive operations.

Features

- User authentication and authorization
- Secure access to database endpoints
- Transaction management (deposit, withdraw, transfer)
- Account balance management

Technical Requirements

- Node.js (version 14 or higher)
- Express.js (version 4 or higher)
- MongoDB (version 4 or higher)
- JSON Web Tokens (JWT) for authentication

Installation

1. Clone the repository: `git clone (link unavailable)
2. Install dependencies: npm install
3. Set environment variables: cp .env.example .env and update with your MongoDB URI and JWT secret
4. Start the server: npm start

Endpoints

- /api/auth/login: Login endpoint for users
- /api/auth/register: Registration endpoint for new users
- /api/transactions: Endpoint for managing transactions (deposit, withdraw, transfer)
- /api/balance: Endpoint for retrieving account balance

Authorization

- All endpoints require a valid JWT token in the Authorization header
- Users can only access endpoints that they are authorized to access

Database Schema

- Users: _id, username, password (hashed), role
- Transactions: _id, user_id, type (deposit/withdraw/transfer), amount, date
- Balances: _id, user_id, balance

Security

- Passwords are hashed using bcrypt
- JWT tokens are signed with a secret key
- All sensitive data is encrypted in transit using HTTPS

Contributing
Contributions are welcome! Please submit a pull request with your changes.
