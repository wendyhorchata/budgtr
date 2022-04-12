const express = require("express");
const app = express();
// let bodyParser = require('body-parser')
const port = 3000;


//              DATABASE

const budgets = require('../models/budget.js')

// let tags = []
// budgets.forEach(function(element) => {

// })
//              MIDDLEWARE
// 
// Adds form data to req.body so we can access it in the CREATE action:

app.use(express.urlencoded({
    extended: false
}));

// app.set('view engine', 'ejs')

// =======================================
//              ROUTES
// =======================================

app.get('/', (req, res) => {
    res.send('Welcome to Budgtr App!')
})

// Index
app.get('/budget', (req, res) => {
    res.render('index.ejs', {
        allBudget: budgets
    })
})

// New
app.get("/budget/new", (req, res) => {
    res.render('new.ejs');
});

// CREATE
app.post('/budget', (req, res) => {

    const date = req.body.date
    const name = req.body.name
    const amount = req.body.amount
    const from = req.body.from
    const tags = req.body.tags
    // budgets.push(req.body)

    budgets.push( {
        'date': date,
        'name': name,
        'amount': amount,
        'from': from,
        'tags': [tags]
    })

    res.redirect('/budget')
});

// SHOW 
app.get('/budget/:indexOfBudgetsArray', (req, res) => {
    res.render('show.ejs', {
        budget: budgets[req.params.indexOfBudgetsArray]
    });
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})