//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const spoonacular = require("./modules/apis/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let recipes = await spoonacular.getRecipes();
  console.log(recipes);
  response.render("index", { title: "Home", recipe: recipes });
});

app.get("/recipes", async (request, response) => {
  let recipeId = request.query.id;
  let infoList = await spoonacular.getInfo(recipeId);
  let instructionList = await spoonacular.getInstruction(recipeId);
  let ingredientList = await spoonacular.getIngredients(recipeId);
  let cardList = await spoonacular.getCard(recipeId);
  console.log(recipeId);
  response.render("instructions",{ title: "Recipes", info: infoList, instructions: instructionList, ingredients: ingredientList, card: cardList});
});

app.get("/price", async (request, response) => {
  let Ingredient = request.query.ingredient;
  let priceList = await spoonacular.getPrice(Ingredient);
  console.log(Ingredient);
  console.log(priceList);
  response.render("price",{ title: "Price",  price: priceList});
});



//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


