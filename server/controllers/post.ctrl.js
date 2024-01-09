/** */
const Post = require('../models/Post')
const User = require('../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {
    addPost: (req, res, next) => {
        let { text, title, claps, description } = req.body
        //let obj = { text, title, claps, description, feature_img: _feature_img != null ? `/uploads/${_filename}` : '' }
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { text, title, claps, description, feature_img: result.url != null ? result.url : '' }
                savePost(obj)
                /*(new Student({...{url: result.url},...req.body})).save((err, newStudent) => {
                const cloud_res = {
                    url: result.url
                }
                const newS = newStudent.toObject()
                console.log({...{url: result.url},...req.body})
                if(err)
                    res.send(err)
                else if (!newStudent)
                    res.send(400)
                else
                    res.send({...newS,...cloud_res})
                next()
            })*/
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            savePost({ text, title, claps, description, feature_img: '' })
        }
        function savePost(obj) {
            new Post(obj).save((err, post) => {
                if (err)
                    res.send(err)
                else if (!post)
                    res.send(400)
                else {
                    return post.addAuthor(req.body.author_id).then((_post) => {
                        return res.send(_post)
                    })
                }
                next()
            })
        }
        /*let base64Data = null
        const _feature_img = req.body.feature_img
        _feature_img != null ? base64Data = _feature_img.replace(/^data:image\/png;base64,/, "") : null
        const _filename = `medium-clone-${Date.now()}.png`;

        let { text, title, claps, description } = req.body
        let obj = { text, title, claps, description, feature_img: _feature_img != null ? `/uploads/${_filename}` : '' }

        fs.writeFile(`/uploads/${_filename}`, base64Data, 'base64', function(err) {
            if(err)
                console.log(err)
            new Post(obj).save((err, post) => {
                if (err)
                    res.send(err)
                else if (!post)
                    res.send(400)
                else {
                    return post.addAuthor(req.body.author_id).then((_post) => {
                        return res.send(_post)
                    })
                }
                next()
            })
        })*/
        /*new Post(obj).save((err, post) => {
            if (err)
                res.send(err)
            else if (!post)
                res.send(400)
            else {
                return post.addAuthor(req.body.author_id).then((_post) => {
                    return res.send(_post)
                })
            }
            next()
        })*/

        /*var storage = multer.diskStorage({
            destination: function (req, file, callback) {
                callback(null, './uploads')
            },
            filename: function () {
                callback(null, )
            }
        })
        var upload = multer({
            storage: storage
        }).single('userFile')
        upload(req, res, function(err) {
        })*/
    },
    getAll: (req, res, next) => {
        Post.find(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, post)=> {
            if (err)
                res.send(err)
            else if (!post)
                res.send(404)
            else
                res.send(post)
            next()            
        })
    },

    /**
     * post_id
     */
    clapPost: (req, res, next) => {
        Post.findById(req.body.post_id).then((post)=> {
            return post.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * comment, author_id, post_id
     */
    commentPost: (req, res, next) => {
        Post.findById(req.body.post_id).then((post)=> {
            return post.comment({
                author: req.body.author_id,
                text: req.body.comment
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * post_id
     */
    getPost: (req, res, next) => {
        Post.findById(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, post)=> {
            if (err)
                res.send(err)
            else if (!post)
                res.send(404)
            else
                res.send(post)
            next()            
        })
    }
}