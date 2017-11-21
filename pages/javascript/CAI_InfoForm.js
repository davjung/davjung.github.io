(function (global) 
{
    document.getElementById("infoForm-preview").addEventListener("click", function () 
    {
        global.localStorage.setItem("currName", document.getElementById("name").value);
        global.localStorage.setItem("currEmail", document.getElementById("email").value);
        global.localStorage.setItem("currAddress", document.getElementById("address").value);
        global.localStorage.setItem("currDesc", document.getElementById("description").value);
        global.localStorage.setItem("severity", document.getElementById("severity").value);
    }, false);
}(window));