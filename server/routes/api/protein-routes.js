const router = require('express').Router();
const { Protein, Excercise } = require('../../models');

router.get('/', (req, res) => {
    Protein.findAll({
        attributes: [
            'id',
            'protein_name',
            'protein_content',
            'quantity'
        ]
    }).then(dbProteinData => res.json(dbProteinData))
    .catch(err => {
        console.log(err);
        res.status(500).json(500);
    });
});

router.get('/:id', (req, res) => {
    Protein.findOne({
        where: {
            id: req.params.id
        },
        attributes:[
            'id',
            'protein_name',
            'protein_content',
            'quantity'
        ]
    }).then(dbProteinData => {
        if(!dbProteinData) {
            res.status(400).json({ message: 'No Protein Source found with this ID' });
            return;
        } res.json(dbProteinData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Figure out the POST
router.post('/', (req, res) => {
    Protein.create({
        protein_name: req.body.protein_name,
        protein_content: req.body.protein_content,
        quantity: req.body.quantity
    })
    .then(())
});

router.put('/:id', (req, res) => {
    Protein.update(req.body, {
        where: {
            id: req.params.id
        },
    }).then((product) => {
        return 
    })
})