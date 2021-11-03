const express = require('express');
const router = express.Router();
const News = require('../models/News');
const Category = require('../models/Category');
const formidable = require('formidable');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// get list of last news, limited by param qtd
router.get('/:qtd', async (req, res) => {
    try{
        let { qtd } = req.params;
        let news = await News.findAll({
            where:  { status: 'A' },
            include: [{
                model: Category,
                required: true,
                attributes: ['descricao']
            }],
            order: [
                ['id', 'DESC']
            ],
            limit: parseInt(qtd) 
        });
        res.json({error: false, news});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

// for post new news
router.post('/', async (req, res) => {
    try{
        let news = await News.create(req.body);
        res.json({error: false, id: news.id });
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

// to put image to a news
router.put('/midia/:idNews', async(req, res) => {
    try{
        let { idNews } = req.params;
        let news = await Noticia.findByPk(idNews);
        if(news){ // checks if the news exists in the database by id
            let id = crypto.randomBytes(20).toString('hex'); // name for image on storage (local)
            const form = new formidable.IncomingForm();
            form.parse(req, (err, fields, files) => {          
                const oldPath = files.image.path;
                const type = files.image.type.split('/')[1];
                const newPath = path.join(__dirname, '../imgs', id + '.' + type);
                let imgPath = id + '.' + type;
                fs.rename(oldPath, newPath, () => {
                    Noticia.update({ midia: imgPath }, {
                        where:{
                            id: idNews
                        }
                    });
                    res.json({error: false, message: 'Midia attached successfully!'});
                });
            });
        }else{
            res.json({error: true, message: 'News not find!'});
        }
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

module.exports = router;
