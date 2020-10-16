const sequelize = require("../database")
const postModel = require("../models/post.model")

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

module.exports = class PostController {
    constructor() {
        postModel.sync().then((model) => {
            this.model = model
        })
    }

    async create(title, description, author, postImage) {
        var postId = makeid(8)
        await this.model.create({
            title,
            description,
            author,
            postId,
            postImage
        })
        return postId
    }
}