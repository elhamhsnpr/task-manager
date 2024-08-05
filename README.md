# Task Manager Project

## Table of Contents
- [Task Manager Project](#task-manager-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [User Routes](#user-routes)
    - [Task Routes](#task-routes)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)

## Introduction
The Task Manager Project is a backend application built with Node.js and Express.js. It allows users to create and manage their tasks. The project uses MongoDB as the database and includes user authentication and authorization using JSON Web Tokens (JWT).

## Features
- User registration and authentication
- User profile management
- Task creation, update, deletion, and retrieval
- Avatar upload and deletion

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-manager.git
    cd task-manager
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables:
   - For development and testing environments, you can create configuration files in the `/config` directory:
     - **Development Environment**: `config/dev.env`
       ```env
       PORT=3000
       MONGODB_URL=your_dev_mongodb_connection_string
       JWT_SECRET=your_dev_secret_key
       ```
     - **Test Environment**: `config/test.env`
       ```env
       PORT=3001
       MONGODB_URL=your_test_mongodb_connection_string
       JWT_SECRET=your_test_secret_key
       ```
1. Start the server:
    ```bash
    npm start
    ```

## Usage
- To start the application in development mode:
    ```bash
    npm run dev
    ```
- To run tests:
    ```bash
    npm test
    ```

## API Endpoints

### User Routes
- **Create User**: `POST /users`
- **Login User**: `POST /users/login`
- **Logout User**: `POST /users/logout`
- **Logout All Sessions**: `POST /users/logoutAll`
- **Read Profile**: `GET /users/me`
- **Update Profile**: `PATCH /users/me`
- **Delete Profile**: `DELETE /users/me`
- **Upload Profile Avatar**: `POST /users/me/avatar`
- **Delete Profile Avatar**: `DELETE /users/me/avatar`
- **Read Profile Avatar**: `GET /users/:id/avatar`

### Task Routes
- **Create Task for Authenticated User**: `POST /tasks`
- **Read All Tasks for Authenticated User**: `GET /tasks`
  - **Example Requests**:
    - Retrieve tasks that are completed:
      ```http
      GET /tasks?completed=true
      ```
    - Retrieve a paginated list of tasks (10 tasks per page, skip the first 20):
      ```http
      GET /tasks?limit=10&skip=20
      ```
    - Retrieve tasks sorted by creation date in descending order:
      ```http
      GET /tasks?sortBy=createdAt:desc
      ```
- **Read Specific Task for Authenticated User**: `GET /tasks/:id`
- **Update Specific Task for Authenticated User**: `PATCH /tasks/:id`
- **Delete Specific Task for Authenticated User**: `DELETE /tasks/:id`

## Dependencies
- **bcryptjs**
- **express**
- **jsonwebtoken**
- **mongodb**
- **mongoose**
- **multer**
- **sharp**
- **validator**

## Dev Dependencies
- **env-cmd**
- **jest**
- **nodemon**
- **supertest**
