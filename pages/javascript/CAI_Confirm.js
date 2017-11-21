(function (global) 
{
    document.getElementById("confirm-name").innerHTML = "" + global.localStorage.getItem("currName");
    document.getElementById("email1").innerHTML = "" + global.localStorage.getItem("currEmail");
    document.getElementById("address1").innerHTML = "" + global.localStorage.getItem("currAddress");
    document.getElementById("description1").innerHTML = "" + global.localStorage.getItem("currDesc");

	// take newIconCount and set it equal to the current iconCount
	var newIconCount = parseInt(global.localStorage.getItem("iconCount"));
	// initialize icon variables as localStoraged stuff
	var iconName = "" + global.localStorage.getItem("currName");
	var iconEmail = "" + global.localStorage.getItem("currEmail");
    var iconAddress = "" + global.localStorage.getItem("currAddress");
    var iconDesc = "" + global.localStorage.getItem("currDesc");
	var severity = parseInt(global.localStorage.getItem("severity")) - 1;
	var category = global.localStorage.getItem("currCategory");

	if (severity != 0 && severity != 1 && severity != 2 && severity != 3)
	{
		var severity = (Math.random() * 100) % 4;
	}

	// calculate random coordinates in units of pixels
	var xCoor = (Math.random() * 10000) % 1051;
	var yCoor = (Math.random() * 10000) % 441;
	

    // intialize icon data by ID
	global.localStorage.setItem("xcoor" + newIconCount, xCoor);
	global.localStorage.setItem("ycoor" + newIconCount, yCoor);
	global.localStorage.setItem("name" + newIconCount, iconName);
	global.localStorage.setItem("email" + newIconCount, iconEmail);
	global.localStorage.setItem("address" + newIconCount, iconAddress);
	global.localStorage.setItem("desc" + newIconCount, iconDesc);
	global.localStorage.setItem("severity" + newIconCount, severity);
	global.localStorage.setItem("category" + newIconCount, category);

    // if the user decides to confirm the addition of their issue...
    document.getElementById("confirm-submit").addEventListener("click", function () 
    {
        // increment total icon count
        global.localStorage.setItem("iconCount", newIconCount + 1);
        window.alert("We've received your request! Check it out on the map or sit back and relax, we'll email you updates.")
    }, false);

    // render the new icon
    var i = newIconCount;
	// adjust for coordinates
	var xCoor = 400 + parseInt(global.localStorage.getItem("xcoor" + i));
	var yCoor = 180 + parseInt(global.localStorage.getItem("ycoor" + i));
	var severity = parseInt(global.localStorage.getItem("severity" + i));

	// the button we're going to add to our addToMapString
	var currButton = "<button id = \"" + i + "\"" + " style=\" background: url(../images/mapIcon" + severity + ".svg); left:" + xCoor +"; top:" + yCoor + "\"" + " class=\"map-icon\"></button>";
	document.getElementById("test").innerHTML = currButton;

}(window));