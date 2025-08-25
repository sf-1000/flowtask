const express = require("express")
const app = express(cors);
const port = 3000;




app.get("/", (req, res, next) => {
    res.send("<h1>FlowTask Home</h1>")
})




app.listen(port, () => {
    console.log("App is listening in PORT: ", port);
});