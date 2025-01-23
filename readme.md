# Game Backend

##### API URL: https://game-backend-uesu.onrender.com

##### Health Check: https://game-backend-uesu.onrender.com/health

##### Check out the game here: https://game-frontend-alpha.vercel.app/

A game where you have 3 cops and guess the location of the criminal. Given the 5 locations and 3 vehicles to choose from if the location is correct and the vehicle has enough range to make a round trip and the vehicle is available (i.e., count > 0) you win else you lose

## Backend

This is the backend the frontend is in https://github.com/manishdoley23/game-frontend.git

### Tech Stack

#### Core Technologies

- **Language:** typescript
- **Framework:** express
- **Testing:** jest + supertest
- **Development:** nodemon and yarn

#### Project Structure

```bash
src/
├── controllers/   # Route controllers
├── routes/        # API routes
├── entities/      # Data models
├── app.ts         # Express app setup
└── server.ts      # Connect to server

Test Coverage (Overall: 83%):
Statements: 83.33%
Branches: 70.9%
Functions: 76.47%
Lines: 83.2%
```

```bash
Clone the repository
git clone https://github.com/manishdoley23/game-backend.git

cd game-backend

# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run test
yarn test

# Run test with coverage
yarn test:coverage
```
