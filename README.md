Car Inventory Management System
A full-stack web application for managing car inventory information, built with the MERN stack (MongoDB, Express, React, Node.js).
Overview
This Car Inventory System allows users to:

View a list of cars in the inventory
Add new cars with detailed information
Delete cars from the inventory
All data is stored in MongoDB Atlas cloud database

Tech Stack
Backend

Node.js with Express
MongoDB (Atlas) for database
Mongoose ODM for database operations
REST API for data operations

Frontend

React for the user interface
React Hooks for state management
Responsive design with CSS

Installation
Prerequisites

Node.js and npm installed
MongoDB Atlas account (or local MongoDB installation)

Setup

Clone the repository
git clone <https://github.com/TheShady14/carInventory.git>
cd car-inventory

Install dependencies for both server and client
npm run install-all

Create a .env file in the root directory with the following variables (or use the default values in the code):
MONGO_USERNAME=your_mongodb_username
MONGO_PASSWORD=your_mongodb_password
MONGO_CLUSTER=your_mongodb_cluster
MONGO_DBNAME=your_database_name
PORT=5001
NODE_ENV=development

Running the Application
Development Mode
To run both the server and client in development mode:
npm run dev
This will start:

Backend server on port 5001
React development server on port 3000

Running Backend Only
npm run server
Running Frontend Only
npm run client
Production Mode

Build the React application:
npm run build

Start the production server:
npm start

The application will be available at http://localhost:5001
API Endpoints
EndpointMethodDescription/api/carsGETFetch all cars/api/carsPOSTAdd a new car/api/cars/:idDELETEDelete a car by ID/api/testGETTest API functionality
Project Structure
car-inventory/
├── client/ # React frontend
│ ├── public/ # Static files
│ ├── src/ # React source code
│ │ ├── App.js # Main React component
│ │ ├── App.css # Styles
│ │ └── ...
├── server/ # Node.js backend
│ ├── app.js # Express application
│ ├── routes/ # API routes
│ │ └── carRoutes.js # Car-related endpoints
│ └── models/ # Mongoose models (assumed)
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
Features

Clean and intuitive user interface
Real-time data updates
Form validation
Responsive design that works on desktop and mobile devices
Confirmation dialogs for destructive actions

Development Notes

The application supports both development and production environments
In development, the React app runs on a separate server
In production, the Express server serves the built React application

License
ISC
