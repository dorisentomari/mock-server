const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commonFields = require('../comonFields');
const utils = require('../../helper/utils');

const todoSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, default: '' },
    status: { type: Boolean, default: false },
    ...commonFields,
}, {
    toObject: {
        transform(doc, ret) {
            ret.createTime = utils.formatDate(ret.createTime);
            ret.updateTime = utils.formatDate(ret.updateTime);
            delete ret.__v;
            delete ret.password;
        }
    }
});

const TodoModel = model('todo', todoSchema);

module.exports = TodoModel;
