# X-Selenium

X-Selenium is a web automation project using Selenium for extracting and analyzing trending topics on X (formerly Twitter). The project is built with a React frontend and a Node.js backend, with MongoDB as the database.

## Features

- Automates login and data extraction from X using Selenium.
- Stores trending topics in MongoDB.
- Displays the trends on a React-based frontend.

---

## Project Setup

### Clone the Repository

```bash
git clone https://github.com/AtharvaEdlawar/X-Selenium.git


# Install Dependencies

Navigate to the project folder and install frontend dependencies
```bash
cd X-Selenium
npm install


Navigate to the backend folder and install backend dependencies:
bash
Copy code
cd backend
npm install
Configure Environment Variables
Inside the backend folder, create a .env file.
Add your X (Twitter) credentials to the .env file:
makefile
Copy code
X_USERNAME=your_username
X_EMAIL=your_email
X_PASSWORD=your_password

Project Structure
Frontend
Framework: React
Main Component: src/comp/trendlist.jsx
Backend
Files:
models/trend.js - Contains the MongoDB schema for trends.
routes/trends.js - Defines API routes for trend-related operations.
index.js - The main server file for handling backend logic and API endpoints.
selenium.js - Contains the Selenium automation logic.
Running the Project
Start the Frontend
Open a new terminal in the project root directory.
Run the following command:
bash
Copy code
npm run dev
Start the Backend
Open a new terminal and navigate to the backend directory:
bash
Copy code
cd backend
Start the backend server:
bash
Copy code
node index.js 
License
This project is licensed under the MIT License.

Contact
For any questions or feedback, you can reach out to Atharva Edlawar.

typescript
Copy code