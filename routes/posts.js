const express = require('express');
const router = express.Router();
const multer = require("multer");
const Posts = require('../models/posts');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./frontend/public/uploads/");
    }, 
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//request get all posts
router.get('/', (req, res) => {
        Posts.find()
            .then(post => res.json(post))
            .catch(err => res.status(400).json(`Error: ${err}`));
    });

    //request add new post
    router.post('/add', upload.single('post_img'), (req, res) => {
        const newPost = new Posts({
            title: req.body.title,
            post_content: req.body.post_content,
            post_img: req.file.originalname,
        });

        newPost.save().then(() => res.json("The new post posted successfully!"))
            .catch(err => res.status(400).json(`error: ${err}`));
    });


    //request find post by id
    router.get('/:id', (req, res) => {
        Posts.findById(req.params.id)
            .then(post => res.json(post))
            .catch(err => res.status(400).json(`Error: ${err}`));
    });

    //request find post by id and update
    router.put('/update/:id', upload.single("post_img"), (req, res) => {
        Posts.findById(req.params.id)
            .then(post => {
                post.title = req.body.title;
                post.post_content = req.body.post_content;
                post.post_img = req.file.originalname;

                post.save()
                    .then(() => res.json("The post updated successfully!"))
                    .catch(err => res.status(400).json(`Error: ${err}`));
            })
            .catch(err => res.status(400).json(`Error: ${err}`));

    });

    //request find post by id and delete
    router.delete('/delete/:id', (req, res) => {
        Posts.findByIdAndDelete(req.params.id)
            .then(() => res.json("The post deleted successfully!"))
            .catch(err => res.status(400).json(`Error: ${err}`));

    });

    module.exports = router;
