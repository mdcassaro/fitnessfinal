const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcersiseSchema = new Schema({
  type: String,
  name: String,
  totalDistance: Number,
  totalDuration: Number,
  totalReps: Number,
  totalSets: Number,
  numExercise: Number,
  totalWeight: Number,

});

const Excercise = mongoose.model("Exercise", ExcersiseSchema);

module.exports = Excercise;
