const mongoose = require('mongoose')

let PostSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);
PostSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
PostSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
PostSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
PostSchema.methods.getUserPost = function (_id) {
    Post.find({'author': _id}).then((post) => {
        return post
    })
}
module.exports = mongoose.model('Post', PostSchema)