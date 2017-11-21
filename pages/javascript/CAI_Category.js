(function (global) 
{
    document.getElementById("category-food").addEventListener("click", function () 
    {
        global.localStorage.setItem("currCategory", "Food");
    }, false);
    document.getElementById("category-supplies").addEventListener("click", function () 
    {
        global.localStorage.setItem("currCategory", "Supplies");
    }, false);
    document.getElementById("category-missing").addEventListener("click", function () 
    {
        global.localStorage.setItem("currCategory", "Missing Person");
    }, false);
    document.getElementById("category-construction").addEventListener("click", function () 
    {
        global.localStorage.setItem("currCategory", "Construction");
    }, false);

}(window));