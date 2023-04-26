const spoonacular = "https://api.spoonacular.com";
const key = process.env.x_api_key;
const walmart = "https://api.bluecartapi.com";
const key2 = process.env.BlueCartKey;


/*
 * Functions for spoonacular API requests.
 */
async function getRecipes(){
    let reqUrl = `${spoonacular}/recipes/search?query=pasta&apiKey=${key}`;

    var response = await fetch(
        reqUrl,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    //the JSON response data will be found in response.json()
    return await response.json();
}

async function getInfo(recipeId){
    let reqUrl = `${spoonacular}/recipes/${recipeId}/information?apiKey=${key}`;
    var response = await fetch(
        reqUrl,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}

async function getInstruction(recipeId){
    let reqUrl = `${spoonacular}/recipes/${recipeId}/analyzedInstructions?apiKey=${key}`;
    var response = await fetch(
        reqUrl,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}

async function getIngredients(recipeId){
    let reqUrl = `${spoonacular}/recipes/${recipeId}/ingredientWidget.json?apiKey=${key}`;
    var response = await fetch(
        reqUrl,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}

async function getCard(recipeId){
    let reqUrl = `${spoonacular}/recipes/${recipeId}/card?apiKey=${key}`;
    var response = await fetch(
        reqUrl,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}

/*
 * Functions for BlueCart API requests.
 */
async function getPrice(Ingredient){
    let reqUrl = `${walmart}/request?api_key=${key2}&type=search&search_term=${Ingredient}&sort_by=best_seller`;
    var response = await fetch(
        reqUrl,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}


module.exports = {
    getRecipes,
    getInfo,
    getInstruction,
    getIngredients,
    getCard,
    getPrice

};
