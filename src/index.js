const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const studentArray = require('./InitialData');
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

// Fetching all students data

app.get('/api/student', async (req, res) => {
    res.send(studentArray);
})

// Fetching the data of the given student Id

app.get('/api/student/:id', async (req, res) => {
    //console.log(req.params.id);
    const index = studentArray.findIndex(el => el.id == req.params.id);
    // console.log(index)
    // res.send("ok")
    if (index >= 0 && index <= studentArray.length) {
        res.json(studentArray[index]);
    }
    else {
        res.status(404).send("Page Not Found");
    }
})

// To add a new record to the db

app.post("/api/student", (req, res) => {
    const id = (studentArray.length) + 1;
    req.body.id = id;
    console.log(req.body);
    studentArray.push(req.body);
    //console.log(studentArray);
    res.send(studentArray);
})

// To update a record

app.put("/api/student/:id", (req, res) => {
    const index = studentArray.findIndex(el => el.id == req.params.id);
    if (index >= 0 && index <= studentArray.length) {
        studentArray[index] = req.body;
        res.send(studentArray);
    }
    else {
        res.status(404).send("Page Not Found");
    }
})

// To delete a record

app.delete("/api/student/:id", (req, res) => {
    const index = studentArray.findIndex(el => el.id == req.params.id);
    if (index >= 0 && index <= studentArray.length) {
        studentArray.splice(index, 1);
        res.send(studentArray);
    } else {
        res.status(404).send("Not Found");
    }

});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   