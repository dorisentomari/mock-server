const express = require('express');
const route = express.Router();

const TodoModel = require('../mongodb/schemas/todo.schema');

route.post('/todo/create', async (req, res) => {
    const {content, title} = req.body;
    const result = await TodoModel.create({content, title});
    return res.json(result);
});

route.post('/todo/:id/finish', async (req, res) => {
    return changeTodoStatus(req, res, true);
});

route.post('/todo/:id/not-finish', async (req, res) => {
    return changeTodoStatus(req, res, false);
});

route.post('/todo/:id/update', async (req, res) => {
    const { content = '', title = '' } = req.body;
    return changeTodoContent(req, res, { content, title });
});

route.post('/todo/:id/delete', async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.remove(id);
    return res.json(result);
});

route.get('/todo/list', async (req, res) => {
    let {page = 1, pageSize = 5} = req.query;
    page = Number(page);
    pageSize = Number(pageSize);
    const params = {};
    const todoList = await TodoModel.find(params).limit(pageSize).skip(pageSize * (page - 1));
    const total = await TodoModel.find(params).count();
    return res.json({data: todoList, pages: {page, pageSize, total, currentCount: todoList.length}});
});

route.get('/todo/:id/get', async (req, res) => {
    const todoItem = await TodoModel.findOne({_id: req.params.id});
    return res.json({data: todoItem});
});


async function changeTodoStatus(req, res, status, content = null) {
    const id = req.params.id;
    const result = await TodoModel.update({_id: id}, {status, content});
    return res.json(result);
}

async function changeTodoContent(req, res, doc) {
    const id = req.params.id;
    const result = await TodoModel.update({_id: id}, doc);
    return res.json(result);
}

module.exports = route;
