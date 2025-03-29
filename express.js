const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('@notionhq/client');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function connectDB() {
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        });
        console.log("Connected to Notion Database:", response);
    } catch (error) {
        console.error("Notion API Error:", error.body);
    }
}

// Call database connection on server start


// Sample API endpoint for macro calculation
app.post('/calculate', (req, res) => {
    const { weight, height, age, gender, activityLevel, calorieEstimate } = req.body;

    if (!weight || !height || !age || !gender || !activityLevel || !calorieEstimate) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Simple macro calculation logic (you may want to adjust this)
    const protein = Math.round(weight * 0.8); // Example: 0.8g per pound of weight
    const fats = Math.round(calorieEstimate * 0.25 / 9); // 25% of total calories
    const carbs = Math.round((calorieEstimate - (protein * 4) - (fats * 9)) / 4);

    res.json({ calories: calorieEstimate, protein, carbs, fats });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
