"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.onePet = exports.allPets = exports.defaultPet = void 0;
const coffee_1 = require("../models/coffee");
const defaultPet = (req, res, next) => {
    res.redirect('/coffee');
};
exports.defaultPet = defaultPet;
const allPets = async (req, res, next) => {
    let coffeeList = await coffee_1.Coffee.findAll();
    res.render('all-coffee', { coffeeList });
};
exports.allPets = allPets;
const onePet = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let coffeeItem = await coffee_1.Coffee.findByPk(itemId);
    if (coffeeItem) {
        res.render('coffee-detail', { foundCoffee: coffeeItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
};
exports.onePet = onePet;
const addPetPage = (req, res, next) => {
    res.render('add-coffee');
};
exports.addPetPage = addPetPage;
const addPet = async (req, res, next) => {
    let newCoffee = req.body;
    await coffee_1.Coffee.create(newCoffee);
    res.redirect('/coffee');
};
exports.addPet = addPet;
const editPetPage = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let coffeeItem = await coffee_1.Coffee.findOne({
        where: { coffeeId: itemId }
    });
    if (coffeeItem) {
        res.render('edit-coffee', { foundCoffee: coffeeItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
};
exports.editPetPage = editPetPage;
const editPet = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let updatedItem = req.body;
    let [updated] = await coffee_1.Coffee.update(updatedItem, {
        where: { coffeeId: itemId }
    });
    if (updated === 1) {
        res.redirect('/coffee');
    }
    else {
        res.render('error', { message: 'Coffee could not be updated' });
    }
};
exports.editPet = editPet;
const deletePet = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let deleted = await coffee_1.Coffee.destroy({
        where: { coffeeId: itemId }
    });
    if (deleted) {
        res.redirect('/coffee');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
};
exports.deletePet = deletePet;
