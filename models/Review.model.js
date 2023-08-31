const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model("Review", ReviewSchema);