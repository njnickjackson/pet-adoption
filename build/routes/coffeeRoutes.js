"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coffeeController_1 = require("../controllers/coffeeController");
const router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/', coffeeController_1.allPets);
// GET /coffee/add - render the add coffee item page
router.get('/add', coffeeController_1.addPetPage);
// POST /coffee/add - add coffee item to array
router.post('/add', coffeeController_1.addPet);
// GET /coffee/edit/:coffeeId - render the edit coffee page
router.get('/edit/:coffeeId', coffeeController_1.editPetPage);
// POST /coffee/edit/:coffeeId - render the edit coffee page
router.post('/edit/:coffeeId', coffeeController_1.editPet);
// POST /coffee/delete/:coffeeId - delete coffee item
router.post('/delete/:coffeeId', coffeeController_1.deletePet);
// GET /coffee/:coffeeId - render the coffee item requested
router.get('/:coffeeId', coffeeController_1.onePet);
exports.default = router;
