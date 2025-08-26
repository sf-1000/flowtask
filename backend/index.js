const express = require("express")
const app = express();
const port = 3000;


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


app.listen(port, () => {
    console.log("App is listening on PORT:", port);
});

app.get("/", (req, res, next) => {
    res.send("<h1>FlowTask Home</h1>")
});

app.get("/todos", (req, res) => {
    res.json(todos);
});