const express = require("express")
const app = express();
const port = 3000;
const bodyparser = require("body-parser")
const { v4: uuidv4 } = require("uuid");


app.use(bodyparser.json());


const todos = [
    {
        id: 1,
        desc: "Finish Assignment 1",
        completed: false
    },
    {
        id: 2,
        desc: "Go to doctor's appointment",
        completed: false
    }
]

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
    let body = req.body;
    console.log(body);
    todos.push({id: uuid.v4(), ...body});
    res.json(todos);
}) 

app.put("/todos/:id", (req, res) => {
    res.json([])
})

app.delete("/todos/:id", (req, res) => {
    res.json([])
})



app.listen(port, () => {
    console.log("App is listening on PORT:", port);
});