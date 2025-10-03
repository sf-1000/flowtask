const express = require("express")
const app = express();
const port = 3000;
const bodyparser = require("body-parser")
const { v4: uuidv4 } = require("uuid");


app.use(bodyparser.json());


const todos = []

//GET, POST, PUT, DELETE

app.get("/", (req, res, next) => {
    res.send("FlowTask Home")
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    console.log(req.params.id);
    let todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
});

app.post("/todos", (req, res) => {
    const body = req.body;

    if (!body.desc){
        return res.status(400).json({message: "Description is required"});
    }

    const newTodo = {
        id: uuidv4(),
        completed: false,
        ...body
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);

}) 

app.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body


    let todo = todos.find((todo) => todo.id == id);
    if(todo){
        Object.assign(todo, body);
        res.json(todo);
    } else {
        res.status(404).json({message: "Todo not found"});
    }
})

app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((t) => t.id == id);

    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1);
        res.json(deleted[0]);
    }else {
        res.status(404).json({message: "Todo not found"});
    }
})


app.listen(port, () => {
    console.log("App is listening on PORT:", port);
});