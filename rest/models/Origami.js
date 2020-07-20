const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const origamiSchema = new Schema({

    question: {
        type: String,
        required: true,
    },

    answerA: {
        type: String,
        required: true,
    },

    answerB: {
        type: String,
        required: true,
    },

    answerC: {
        type: String,
        required: true,
    },

    answerD: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Origami', origamiSchema);