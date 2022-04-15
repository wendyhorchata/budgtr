const express = require("express");
const app = express();
const PORT = 8080;
const budget = require("./models/budget");
const methodOverride = require(`method-override`);

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static(`public`));
app.use(methodOverride(`_method`))


// Index
app.get("/budget/", (req, res) => {
    res.render("index.ejs", { allBudgets: budgets, title: "Budgets - Index Page"});
  });

// Show
app.get("/budget/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", { budget: budgets[req.params.indexOfBudgetsArray], title: "First - Show Page" });
  });

//New
app.get("/budget/new", (req, res) => {
    res.render("new.ejs", {title: "Budget - New Page"});
  });

//Create
app.post("/budget", (req, res) => {
    budgets.push(req.body)
  res.redirect("/budget")
  });



app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})