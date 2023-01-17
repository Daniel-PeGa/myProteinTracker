const { Excercise } = require('../models');

const excerciseData = [
    {
        excercise_name: 'Regular Curls',
        weight_used: 20,
        excercise_repetitions: 10,
        repetitions_repetitions: 3,
    },
    {
        excercise_name: 'Bar Curls',
        weight_used: 30,
        excercise_repetitions: 20,
        repetitions_repetitions: 3,
    },
    {
        excercise_name: 'Ab crunches',
        weight_used: 80,
        excercise_repetitions: 50,
        repetitions_repetitions: 3,
    },
    {
        excercise_name: 'Shoulder push',
        weight_used: 40,
        excercise_repetitions: 10,
        repetitions_repetitions: 3
    }
];

const seedExcercises = () => Excercise.bulkCreate(excerciseData);

module.exports = seedExcercises;

