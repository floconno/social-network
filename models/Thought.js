const { Schema, model } = require('mongoose');

const thougthSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    username: {
        type: String,
        required: true,
    },
    
})

const Course = model('course', courseSchema);

module.exports = Course;
