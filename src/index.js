const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// add
app.post("/add", (req, res) => {
    //console.log(req.body.num1);
    let result = req.body.num1 + req.body.num2;
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        res.json({
            status: "error",
            message: "Invalid data types"
        });
    } else if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000) || (result < -1000000)) {
        res.json({
            message: "Underflow"
        });
    } else if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000) || (result > 1000000)) {
        res.json({
            message: "Overflow"
        });
    }
    else {
        res.json({
            status: "success",
            message: `the sum of given two numbers, 
            sum: ${result}`
        });
    }
});

// subtraction
app.post("/sub", (req, res) => {
    //console.log(req.body.num1);
    let result = req.body.num1 - req.body.num2;
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        res.json({
            status: "error",
            message: "Invalid data types"
        });
    } else if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000) || (result < -1000000)) {
        res.json({
            message: "Underflow"
        });
    } else if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000) || (result > 1000000)) {
        res.json({
            message: "Overflow"
        });
    } else {
        res.json({
            status: "success",
            message: `the difference of given two numbers, 
            difference: ${result}`
        });
    }
});

// multiply
app.post("/multiply", (req, res) => {
    //console.log(req.body.num1);
    let result = req.body.num1 * req.body.num2;
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        res.json({
            status: "error",
            message: "Invalid data types"
        });
    }
    else if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000) || (result < -1000000)) {
        res.json({
            message: "Underflow"
        });
    } else if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000) || (result > 1000000)) {
        res.json({
            message: "Overflow"
        });
    } else {
        res.json({
            status: "success",
            message: `The product of given numbers, 
            result: ${result}`
        });
    }
});

// divide
app.post("/divide", (req, res) => {
    //console.log(req.body.num1);
    let result = req.body.num1 / req.body.num2;
    if (req.body.num2 === 0) {
        res.json({
            status: "error",
            message: "Cannot divide by zero"
        });
    } else if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        res.json({
            status: "error",
            message: "Invalid data types"
        });
    }
    else if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000) || (result < -1000000)) {
        res.json({
            message: "Underflow"
        });
    } else if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000) || (result > 1000000)) {
        res.json({
            message: "Overflow"
        });
    } else {
        res.json({
            status: "success",
            message: `The division of given numbers, 
            result: ${result}`
        });
    }
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;