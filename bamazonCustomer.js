var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",

    port: 3307,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  
  function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);

    inquirer
      .prompt([
    {
        name: "Buy",
        type: "rawlist",
        message: "What is the ID of the product you would like to buy?",
        choices: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
      },
    {
        name: "HowMany",
        type: "input",
        message: "How Many?"
      }],
      )}
      )};



