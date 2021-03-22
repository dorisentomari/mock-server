const express = require('express');
const route = express.Router();

const request = require('../helper/request');
const utils = require('../helper/utils');

route.get('/todo/list', async (req, res) => {

    const list = [];

    for (let i = 0; i < 13; i++) {
        list.push({content: utils.randomStr(), title: utils.randomStr(), status: false});
    }
    for (let todo of list) {
        await request.post('/api/todo/todo/create', todo);
    }

    return res.json('mock todo list 完成');
});

module.exports = route;
