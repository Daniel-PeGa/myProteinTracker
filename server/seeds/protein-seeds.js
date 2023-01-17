const { Protein } = require('../models');

const proteinData = [
    {
        protein_name: 'Premier Protein Shake',
        protein_content: 30,
        quantity: 1,
    },
    {
        protein_name: 'FitCrunch Bar',
        protein_content: 30,
        quantity: 1,
    },
    {
        protein_content: 'FairLife Premium',
        protein_content: 42,
        quantity: 1
    },
];

const seedProteins = () => Protein.bulkCreate(proteinData);

module.exports = seedProteins;