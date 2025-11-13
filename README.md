# Testing and Debugging MERN Applications

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

You will:
1. Set up testing environments for both client and server
2. Write unit tests for React components and server functions
3. Implement integration tests for API endpoints
4. Create end-to-end tests for critical user flows
5. Apply debugging techniques for common MERN stack issues

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Tech Stack
Frontend: React, JavaScript, CSS

Backend: Node.js, Express

Database: MongoDB (Mongoose)

Authentication: JWT

Testing: Jest, Supertest, React Testing Library

Debugging: console logs, breakpoints, error handling middleware


## Getting Started

Prerequisites
Node.js >= 18
npm >= 9
MongoDB

# Installation

Clone the repository:

git clone <your-repo-url>

cd <project-root>

Install dependencies for server and client:

cd server

npm install

cd ../client

npm install

Create .env files for server and client with appropriate variables (e.g., MONGO_URI, JWT_SECRET).

# Run the application:

Run server
 
cd ../server

npm run dev

Run client

cd ../client

npm start

## Testing Strategy

# Unit Tests

# Client:

Test React components for rendering, props, and event handling using React Testing Library.

   Components Covered:
Button Component – Render, variant, size, disabled state, and click handler.
App Component – Render of main heading and core functionality.

 Approach:
Used @testing-library/react to simulate user interactions.
Ensured components render correctly with default props and custom variations.
Verified click events trigger expected behavior. 

# Server: 

Test functions and utilities in isolation using Jest.

      Endpoints Covered:
POST /api/posts – Create new posts
GET /api/posts – Fetch all posts with pagination and category filters
GET /api/posts/:id – Fetch single post by ID
PUT /api/posts/:id – Update post (only by author)
DELETE /api/posts/:id – Delete post (only by author)

# Approach:

Authentication Testing
Verified that requests without valid JWT tokens return 401 Unauthorized.
Verified that only the author can update or delete their posts; other users receive 403 Forbidden.

Validation Testing
Checked that missing required fields (e.g., title, content) return 400 Bad Request.

Functional Testing
Created, updated, and deleted posts programmatically using test scripts.
Confirmed the API returns the expected status codes (200, 201, 404, etc.) and data structure.

# Integration Tests

Test API endpoints using Supertest.
Verify authentication, authorization, and CRUD operations

# End-to-End Tests

Test critical user flows from frontend to backend.
Use tools like Cypress or Playwright (optional).

Example:
User logs in → Creates a post → Updates the post → Deletes the post

# Debugging Techniques

Use console.log() to trace values and flow.
Apply error handling middleware on server.
Check authentication/authorization failures carefully.
Use breakpoints in VS Code for step-by-step debugging.

# Test Coverage

Client: Unit and integration tests for components and pages.
Server: Integration tests for all API endpoints.
Coverage reports generated with Jest.

# gitignore

Include:
/node_modules
/client/node_modules
/server/node_modules
/client/.env
/server/.en

# Screenshots



# Author

Kiplagat Faith Jerop : student, Mern stack Developer ,PLP

