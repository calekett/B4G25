import { Client } from "@notionhq/client";
import dotenv from "dotenv";

function connectDB()
{
    dotenv.config();

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    try {
      const response = notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
      });

      console.log(response);
    } catch (error) {
      console.error(error.body);
    }
}

export default connectDB;

//   let currentStep = 1;
//   const totalSteps = 9; 
  
//   function adjustContainerHeight() {
//     const container = document.querySelector('.container');
//     const activeStep = document.querySelector('.form-step.active');
    
//     if (activeStep) {
//       // Get the height of the active step
//       const stepHeight = activeStep.offsetHeight;
//       // Set the container height to match (plus some padding)
//       container.style.minHeight = (stepHeight + 40) + 'px';
//     }
//   }
  
//   function updateProgressBar() {
//     const progressPercent = ((currentStep - 1) / totalSteps) * 100;
//     document.getElementById('progress').style.width = progressPercent + '%';
//   }
  
//   function showStep(stepNumber) {
//     // Hide all steps
//     document.querySelectorAll('.form-step').forEach(step => {
//       step.classList.remove('active');
//       step.classList.remove('previous');
//     });
    
//     // Show the current step
//     document.getElementById('step' + stepNumber).classList.add('active');
    
//     // Update progress bar
//     updateProgressBar();
    
//     // Adjust container height
//     adjustContainerHeight();
//   }
  
//   function nextStep(step) {
//     // Validate current step
//     if (step === 1 && (!document.getElementById('name').value || !document.getElementById('email').value)) {
//       alert('Please enter your name and email');
//       return;
//     } else if (step === 2 && !document.getElementById('weight').value) {
//       alert('Please enter your weight');
//       return;
//     } else if (step === 3 && !document.getElementById('height').value) {
//       alert('Please enter your height');
//       return;
//     } else if (step === 4 && !document.getElementById('age').value) {
//       alert('Please enter your age');
//       return;
//     }
    
//     // Mark current step as previous
//     document.getElementById('step' + step).classList.add('previous');
//     document.getElementById('step' + step).classList.remove('active');
    
//     // Show next step
//     currentStep = step + 1;
//     document.getElementById('step' + currentStep).classList.add('active');
    
//     updateProgressBar();
//     adjustContainerHeight();
//   }
  
//   function prevStep(step) {
//   // Mark current step as next (for animation)
//   if (step === 'results') {
//   document.getElementById('results-step').classList.remove('active');
//   currentStep = 10;
// } else {
//   document.getElementById('step' + step).classList.remove('active');
//   currentStep = step - 1;
// }

  
//   // Show previous step
//   document.getElementById('step' + currentStep).classList.remove('previous');
//   document.getElementById('step' + currentStep).classList.add('active');
  
//   updateProgressBar();
//   adjustContainerHeight();
// }

  
//   function toggle(source) {
//     const checkboxes = document.getElementsByName('territory');
//     for (let i = 0; i < checkboxes.length; i++) {
//       checkboxes[i].checked = source.checked;
//     }
//   }
  
//   function calculateMacros() {
//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const weight = parseFloat(document.getElementById('weight').value);
//     const height = parseFloat(document.getElementById('height').value);
//     const age = parseInt(document.getElementById('age').value);
//     const gender = document.getElementById('gender').value;
//     const activityLevel = document.getElementById('activityLevel').value;

//     if (!name || !email || !weight || !height || !age) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     // Calculate BMR using Mifflin-St Jeor Equation
//     let bmr;
//     if (gender === 'male') {
//       bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
//     } else {
//       // Convert to metric for female calculation
//       const weightKg = weight * 0.453592;
//       const heightCm = height * 2.54;
//       bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
//     }

//     // Adjust BMR based on activity level
//     const activityMultiplier = {
//       sedentary: 1.2,
//       lightly_active: 1.375,
//       moderately_active: 1.55,
//       very_active: 1.725
//     };

//     const tdee = bmr * activityMultiplier[activityLevel]; // Total Daily Energy Expenditure

//     // Calculate macros (example ratios)
//     const protein = Math.round((tdee * 0.3) / 4); // Protein in grams
//     const carbs = Math.round((tdee * 0.4) / 4);   // Carbs in grams
//     const fats = Math.round((tdee * 0.3) / 9);   // Fats in grams

//     // Display results
//     document.getElementById('user-info').textContent = `Results for ${name} (${email})`;
//     document.getElementById('calories').textContent = `Calories Needed Per Day: ${Math.round(tdee)} kcal`;
//     document.getElementById('protein').textContent = `Protein Needed Per Day: ${protein} g`;
//     document.getElementById('carbs').textContent = `Carbohydrates Needed Per Day: ${carbs} g`;
//     document.getElementById('fats').textContent = `Fats Needed Per Day: ${fats} g`;
    
//     // Show results step
//     document.querySelectorAll('.form-step').forEach(step => {
//       step.classList.remove('active');
//       step.classList.remove('previous');
//     });
//     document.getElementById('results-step').classList.add('active');
    
//     // Update progress bar to 100%
//     document.getElementById('progress').style.width = '100%';
    
//     // Adjust container height for results
//     adjustContainerHeight();
//   }
  
//   function resetForm() {
//     document.getElementById('macroForm').reset();
//     currentStep = 1;
//     showStep(1);
//   }
  
//   // Initialize
//   updateProgressBar();
//   adjustContainerHeight();
  
//   // Adjust container height when window is resized
//   window.addEventListener('resize', adjustContainerHeight);
//   // Array of motivational phrases
// const motivationalPhrases = [
//   "Every small step you take is a victory, and I'm here to cheer you on every single time!",
//   "It's okay to have tough days. Remember, you're never alone!",
//   "I believe in you!",
//   "Every small step forward is something to be proud of!",
//   "Your health and happiness matter, and you deserve to feel good in your own skin!",
//   "You are full of potential"
// ];

// // Function to display a random phrase in a chat bubble
// function showMotivationalBubble() {
//   // Select a random phrase from the array
//   const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
//   const phrase = motivationalPhrases[randomIndex];
  
//   // Create or update the chat bubble
//   const chatBubble = document.getElementById('motivational-bubble') || createChatBubble();
//   chatBubble.textContent = phrase;
  
//   // Show the bubble with animation
//   chatBubble.classList.add('show');
  
//   // Hide the bubble after 5 seconds
//   setTimeout(() => {
//     chatBubble.classList.remove('show');
//   }, 5000);
// }

// // Function to create the chat bubble element if it doesn't exist
// function createChatBubble() {
//   const bubble = document.createElement('div');
//   bubble.id = 'motivational-bubble';
//   bubble.className = 'talk-bubble tri-right round right-in';
  
//   const textContainer = document.createElement('div');
//   textContainer.className = 'talktext';
//   bubble.appendChild(textContainer);
  
//   document.body.appendChild(bubble);
//   return textContainer;
// }

// // Set random interval between 20-30 seconds
// function setRandomInterval() {
//   const minTime = 20000; // 20 seconds
//   const maxTime = 30000; // 30 seconds
//   const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  
//   showMotivationalBubble(); // Show first message immediately
  
//   setTimeout(() => {
//     showMotivationalBubble();
//     setRandomInterval(); // Set the next interval recursively
//   }, randomTime);
// }

// // Start the random interval when the page loads
// window.onload = setRandomInterval;