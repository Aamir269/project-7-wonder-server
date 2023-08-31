const { Schema, model } = require('mongoose');

const ReviewSceham = new Schema({
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model("Review", ReviewSceham);