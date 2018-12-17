var mysql = require("mysql");
var inquirer = require("inquirer");

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

    items = JSON.stringify(res);
    items = JSON.parse(items);

    //parse response in an array
    //pass that data to mainMenu
    mainMenu(items);
  });
}

function mainMenu(items) {
  console.log(items);
  inquirer
    .prompt([
      {
        name: "Buy",
        type: "list",
        message: "What is the ID of the product you would like to buy?",
        //choices are create dynamically using data from the database
        choices: function() {
          var products = [];
          for (var product of items) {
            products.push(product.product_name);
          }
          return products;
        }
      },
      {
        name: "HowMany",
        type: "input",
        message: "How Many?"
      }
    ])
    .then(function(answers) {
      console.log(answers);
      var choice = {};
      for (var product of items) {
        if (product.product_name === answers.Buy) {
          choice = product;
        }
      }
      if (answers.HowMany <= choice.stock_quantity) {
        console.log(
          "Congratulations, the product you requested is in stock and we are placing the order."
        );

        var updateProducts =
          "UPDATE products SET stock_quantity = " +
          (choice.stock_quantity - answers.HowMany) +
          " WHERE id = " +
          answers.Buy;
        //^Pretty positive this is where my error is coming from?

        connection.query(updateProducts, function(err) {
          if (err) throw err;

          console.log("Your oder has been placed!");

          connection.end();
        });
      } else {
        console.log(
          "Insufficient quantity, your order can not be placed as is."
        );
      }
    });
}
