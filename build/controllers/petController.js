"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.onePet = exports.allPets = exports.defaultPet = void 0;
const pet_1 = require("../models/pet");
const defaultPet = (req, res, next) => {
    res.redirect('/pets');
};
exports.defaultPet = defaultPet;
const allPets = async (req, res, next) => {
    let petList = await pet_1.Pet.findAll();
    res.render('all-pets', { petList });
};
exports.allPets = allPets;
const onePet = async (req, res, next) => {
    let itemId = req.params.petId;
    let petItem = await pet_1.Pet.findByPk(itemId);
    if (petItem) {
        res.render('pet-detail', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found.' });
    }
};
exports.onePet = onePet;
const addPetPage = (req, res, next) => {
    res.render('add-pet');
};
exports.addPetPage = addPetPage;
const addPet = async (req, res, next) => {
    let newPet = req.body;
    await pet_1.Pet.create(newPet);
    res.redirect('/pets');
};
exports.addPet = addPet;
const editPetPage = async (req, res, next) => {
    let itemId = req.params.petId;
    let petItem = await pet_1.Pet.findOne({
        where: { petId: itemId }
    });
    if (petItem) {
        res.render('edit-pet', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found.' });
    }
};
exports.editPetPage = editPetPage;
const editPet = async (req, res, next) => {
    let itemId = req.params.petId;
    let updatedItem = req.body;
    let [updated] = await pet_1.Pet.update(updatedItem, {
        where: { petId: itemId }
    });
    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated.' });
    }
};
exports.editPet = editPet;
const deletePet = async (req, res, next) => {
    let itemId = req.params.petId;
    let deleted = await pet_1.Pet.destroy({
        where: { petId: itemId }
    });
    if (deleted) {
        res.redirect('/pets');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet.' });
    }
};
exports.deletePet = deletePet;
