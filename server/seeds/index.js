const seedProteins = require('./protein-seeds');
const seedExcercises = require('./excercise-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('The Database has been Synced. This Worked!');
    await seedExcercises();
    console.log('The Excercises have been seeded. This worked!');
    await seedProteins();
    console.log('The Proteins have been seeded. This worked!');

    process.exit(0);
};

seedAll();