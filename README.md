# One And Done - Fantasy Golf App

A full-stack fantasy golf application where users pick one golfer per tournament each week. Whichever user's golfers earn the most money wins the season.

## Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Backend:** Express + Bun + TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Hosting:** Railway (database)

## Setup

### Prerequisites
- [Bun](https://bun.sh) installed
- PostgreSQL database (free tier on [Railway.app](https://railway.app))

### Installation

1. Clone the repo
```bash
git clone https://github.com/lomaxanthony/NewOneAndDone.git
cd OneAndDone
```

2. Set up the server
```bash
cd server
cp .env.example .env
# Add your DATABASE_URL to .env
bun install
bunx prisma generate
bunx prisma migrate dev
```

3. Start the server
```bash
bun run dev
```

The server runs on `http://localhost:3001`

### Set up the client (coming soon)
```bash
cd client
bun install
bun run dev
```

## Current Features

- ✅ Express API server
- ✅ PostgreSQL database with Prisma
- ✅ GET `/api/golfers` — fetch all golfers
- ✅ POST `/api/golfers` — create a golfer

## TODO

- [ ] User authentication (signup/login)
- [ ] Tournament management endpoints
- [ ] Pick submission endpoints
- [ ] Results/earnings tracking
- [ ] Leaderboard calculation
- [ ] React frontend
- [ ] Email reminders for picks

## API Endpoints

### Golfers
- `GET /api/golfers` — Get all golfers
- `POST /api/golfers` — Create a golfer
  ```json
  { "name": "Tiger Woods" }
  ```

More endpoints coming soon...

## Database Schema

- **User** — User accounts with authentication
- **Tournament** — Weekly tournaments
- **Golfer** — Professional golfers
- **Pick** — User's golfer selection per tournament
- **Result** — Tournament results and earnings

## License

MIT