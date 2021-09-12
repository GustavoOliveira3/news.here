const express = require('express');
const router = express.Router();
const Category= require('../models/Category');

// get a category by id 
router.get('/:id', async(req, res) => {
    try{
        let { id } = req.params;
        let categoria = await Categoria.findByPk(id);
        res.json({error: false, categoria});
    }catch(err){
        res.json({ error: true, message: err.message});
    }
});

// new news
router.post('/', async(req, res) => {
    try{
        let category = await Category.create(req.body);
        res.json({error: false, category});
    }catch(err){
        res.json({ error: true, message: err.message});
    }
});


module.exports = router;