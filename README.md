# Js Backend HandsOn

Learning-focused Node.js backend project built with Express, MongoDB, and Mongoose.

## Project Overview

This repository currently contains the base backend setup for a MERN-style application. The project is configured to:

- load environment variables with `dotenv`
- connect to MongoDB with `mongoose`
- keep the database name in a shared constants file
- separate the backend into folders for controllers, routes, models, middleware, utilities, and database setup

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- Nodemon

## Project Structure

- `src/index.js` - application entry point and DB bootstrap
- `src/db/db.js` - MongoDB connection logic
- `src/constants.js` - shared constants such as the database name
- `src/app.js` - app layer placeholder for the Express server
- `src/controllers/` - controller layer for request handling
- `src/routes/` - route definitions
- `src/models/` - Mongoose models
- `src/middleware/` - custom middleware
- `src/utils/` - utility helpers
- `public/temp/` - temporary public assets folder

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a local env file with at least the MongoDB connection string and port.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8000
```

### 3. Run the project

```bash
npm run dev
```

## Project Progress

### DAY 1

- Created the backend project scaffold.
- Added the main source folders for controllers, routes, models, middleware, utils, and database code.
- Installed the core dependencies needed for a Node.js backend.
- Set up environment variable loading with `dotenv`.
- Created the MongoDB connection helper in `src/db/db.js`.
- Defined the database name as `PlayTube` in `src/constants.js`.
- Wired the entry file so the app connects to MongoDB on startup.
- Added a placeholder `src/app.js` for the Express application layer.

## Notes

- The Express server routes and application logic are still in progress.
- The current codebase is focused on backend foundation and database connectivity.

## Next Steps

- Build the Express app in `src/app.js`.
- Add route files and controllers.
- Create Mongoose models for the first feature set.
- Add middleware for error handling and request processing.
