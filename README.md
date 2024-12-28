# X-Selenium

X-Selenium is a web automation project that uses Selenium to extract and analyze trending topics on X (formerly Twitter). The project includes a React-based frontend, a Node.js backend, and MongoDB as the database.

---

## Features

- Automates login and data extraction from X using Selenium.
- Stores trending topics in a MongoDB database.
- Displays trends on a user-friendly React frontend.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AtharvaEdlawar/X-Selenium.git
```
### 2.install Dependencies
For the Frontend
Navigate to the project root directory

```bash
cd X-Selenium
```
Install the required dependencies

```bash
npm install
```
### For the Backend
Navigate to the backend directory:
```bash
cd backend
```
Install the required dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Inside the backend directory,
Add the following credentials to the .env file
```bash
X_USERNAME=your_username
X_EMAIL=your_email
X_PASSWORD=your_password
```
Replace your_username, your_email, and your_password with your X (Twitter) account details.

## Project Structure
### Frontend
Framework: React

Main Component: src/comp/trendlist.jsx

## Backend
Key Files:
models/trend.js: Defines the MongoDB schema for storing trends.

routes/trends.js: Contains API routes for trend-related operations.

index.js: Main backend server file to handle API requests and logic.

selenium.js: Core script that implements Selenium automation.

## How to Run the Project

### 1. Start the Frontend
Open a terminal in the project root directory.
Run the following command
```bash
npm run dev
```
### 2.  Start the Backend
Open a new terminal and navigate to the backend directory
run the following command
```bash
node index.js
```

## Contact
atharva89edlawar@gmail.com

## Working video of the project