// script.js

// Menu items categorized by time
const menu = {
    breakfast: ["Egg McMuffin", "Veg McMuffin", "Hash Browns", "Pineapple Stick"],
    lunch: ["McChicken", "Paneer Wrap", "Fries", "Coke"],
    dinner: ["Big Spicy Paneer Burger", "Big Spicy Chicken Wrap", "Hot Fudge Sundae", "McFlurry"],
    lateNight: ["Filet-O-Fish", "Chicken Maharaja Mac", "Oreo McFlurry"],
};

// Function to get the current time of day
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 11) return "breakfast";
    if (hour >= 11 && hour < 17) return "lunch";
    if (hour >= 17 && hour < 22) return "dinner";
    return "lateNight";
}

// Function to suggest a menu item
function getSuggestion() {
    const timeOfDay = getTimeOfDay();
    const suggestions = menu[timeOfDay];
    const randomItem = suggestions[Math.floor(Math.random() * suggestions.length)];
    const suggestionBox = document.getElementById("suggestion");
    suggestionBox.textContent = `You should try: ${randomItem}`;
}
