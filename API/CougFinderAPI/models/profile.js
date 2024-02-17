const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    email: String,
    weight: String,
    Height: String,
    Age: String,
    Chest: ["Bench press", " Incline Press (DB/BB)", " Pec Dec", " Cable fly"],
    Back: [" Pullup", "Pulldown", "T-Bar row", "Machine High Row"],
    ArmAndShoulders: ["Shoulder press","Lateral Raises", " Hammer Curl", "Preacher Curl"],
    Legs: ["Squats", "Calf Raises", "Lunges", "Deadlift", "Hacksquat", "Leg Press"],
    Cardio: ["Front Plank", "Situps", "Crunches", "Russian Twists" ],
    
});

module.exports = mongoose.model('Profile', profileSchema);