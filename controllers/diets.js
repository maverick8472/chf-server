
const {Diet, validatePost} = require('../models/diet');
const {User} = require('../models/user');

async function getDiet(req, res){
    const diet = await Diet.findById(req.params.id);
    if(!diet) return res.status(404).send('The user with that id was not found!');
    res.send(diet);
};

async function getAllDiets(req, res){
    const diets = await Diet.find().sort('_id');
    res.send(diets);
};

async function addDiet(req, res) {
    const {error} = validatePost(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const user = await User.findById(req.body.userId);
    if(!user) return res.status(404).send('The doctor with that id was not found!');

    const diet = new Diet({
        userId: req.body.userId,
        type: req.body.type,
        calories: req.body.calories,
    })

    await diet.save();
    res.send(diet);
};

exports.getDiet = getDiet;
exports.getAllDiets = getAllDiets;
exports.addDiet = addDiet;
