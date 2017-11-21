function generateInfo(buttonId){
	var id = parseInt(buttonId);

	var name = localStorage.getItem("name" + id);
	var email = localStorage.getItem("email" + id);
	var address = localStorage.getItem("address" + id);
	var desc = localStorage.getItem("desc" + id);
	var category = localStorage.getItem("category" + id);

	if (name == "")
	{
		name = "Unknown"
	}
	if (email == "")
	{
		email = "Unknown"
	}
	if (address == "")
	{
		address = "Unknown"
	}
	if (desc == "")
	{
		desc = "Unknown"
	}


	// initialize sidebar header
	document.getElementById("category").innerHTML= "<h1 style=\"margin-top: 30px; border-bottom: solid whitesmoke; padding-bottom: 30px;\">"+ name +"'s request</h1>"


	// intialize the icon elements for the sidebar
	document.getElementById("name").innerHTML = "<div class=\"infoconfirm1\" style=\"margin-top: 0px\">Category</div> <div class = \"infoconfirm\">" + category + "</div>";
	document.getElementById("email").innerHTML = "<div class=\"infoconfirm1\">Email</div> <div class = \"infoconfirm\">" + email + "</div>";
	document.getElementById("address").innerHTML = "<div class=\"infoconfirm1\">Address</div> <div class = \"infoconfirm\">" + address + "</div>";
	document.getElementById("description").innerHTML = "<div class=\"infoconfirm1\" style=\"margin-left: 60px; margin-bottom: 0px\">Description</div> <div class = \"infoconfirm\" style=\"margin-left: 40px\">" + desc + "</div>";

	// create a back button
	document.getElementById("returnButton").innerHTML = "<button onclick=\"backToHomescreen()\" style=\"margin-top: -30px\"class=\"create-issue\">Back</button>";

	// "<div class=\"infoconfirm1\" style=\"margin-top: 0px\">" + "</div> <div class = \"infoconfirm\" id=\"name1\"></div>"
}

function backToHomescreen(){
	document.getElementById("name").innerHTML = "";
	document.getElementById("email").innerHTML = "<p style=\"margin-top: 150px; padding: 20px\">Welcome to Disaster Relief! Reach out to your community by clicking below to create an issue, or click on a map icon to start helping.</p><a href=\"./CAI_Category.html\"><button class=\"create-issue\">CREATE AN ISSUE</button></a>";
	document.getElementById("address").innerHTML = "";
	document.getElementById("description").innerHTML = "";
	document.getElementById("returnButton").innerHTML = "";
	document.getElementById("category").innerHTML = "";
}

function generateFilter(){
	document.getElementById("name").innerHTML = "";
	document.getElementById("email").innerHTML = "";
	document.getElementById("address").innerHTML = "";
	document.getElementById("description").innerHTML = "";
	document.getElementById("returnButton").innerHTML = "";

	// render sidebar header
	document.getElementById("category").innerHTML="<h1 style=\"margin-top: 30px; border-bottom: solid whitesmoke; padding-bottom: 30px;\">F I L T E R</h1>";

	// filter by SEVERITY
	document.getElementById("name").innerHTML += "<div class=\"infoconfirm1\" style=\"margin-top: 0px\">Filter By Severity</div> <div class=\"infoconfirm\" id=\"filterBySeverity\" style=\"width: 180px; text-align: left; height: 40px\"></div>";
		// render the severity buttons
		document.getElementById("filterBySeverity").innerHTML += "<button id = \"severity1\" style=\" background: url(../images/mapIcon0.svg);\" class=\"map-icon\" onclick=\"filterBySeverity(0)\"></button>";
		document.getElementById("filterBySeverity").innerHTML += "<button id = \"severity2\" style=\" margin-left: 50px; background: url(../images/mapIcon1.svg);\" class=\"map-icon\" onclick=\"filterBySeverity(1)\"></button>";
		document.getElementById("filterBySeverity").innerHTML += "<button id = \"severity3\" style=\" margin-left: 100px; background: url(../images/mapIcon2.svg);\" class=\"map-icon\" onclick=\"filterBySeverity(2)\"></button>";
		document.getElementById("filterBySeverity").innerHTML += "<button id = \"severity4\" style=\" margin-left: 150px; background: url(../images/mapIcon3.svg);\" class=\"map-icon\" onclick=\"filterBySeverity(3)\"></button>";	
		document.getElementById("filterBySeverity").innerHTML += "<button style=\" margin-left: 220px; margin-top: 0px; width: 80px; height: 40px;\" class=\"create-issue\" onclick=\"resetSeverity()\">RESET</button>";	

	// filter by CATEGORY
	document.getElementById("name").innerHTML += "<div class=\"infoconfirm1\" style=\"margin-top: 20px\">Filter By Category</div> <div id=\"filterByCategory\"></div>";
		// render the category buttons
		document.getElementById("filterByCategory").innerHTML += "<button onclick=\"filterByCategory(0)\" class=\"category\" style=\"cursor: hand; outline: none; width: 180px;\"href=\"./CAI_InfoForm.html\">Food</button>";
		document.getElementById("filterByCategory").innerHTML += "<button onclick=\"filterByCategory(1)\" class=\"category\" style=\"cursor: hand; outline: none; width: 180px; margin-top: 10px\"href=\"./CAI_InfoForm.html\">Supplies</button>";
		document.getElementById("filterByCategory").innerHTML += "<button style=\" margin-left: 220px; margin-top: -20px; width: 80px; height: 40px;\" class=\"create-issue\" onclick=\"resetSeverity()\">RESET</button>";	
		document.getElementById("filterByCategory").innerHTML += "<button onclick=\"filterByCategory(2)\" class=\"category\" style=\"cursor: hand; outline: none; width: 180px; margin-top: -10px\"href=\"./CAI_InfoForm.html\">Missing Person</button>";
		document.getElementById("filterByCategory").innerHTML += "<button onclick=\"filterByCategory(3)\" class=\"category\" style=\"cursor: hand; outline: none; width: 180px; margin-top: 10px\"href=\"./CAI_InfoForm.html\">Construction</button>";

	// create a back button
	document.getElementById("returnButton").innerHTML = "<button onclick=\"backToHomescreen()\" style=\"margin-top: -60px\"class=\"create-issue\">Back</button>";	
}

function filterBySeverity(buttonSeverity){
	// empty the map before adding the buttons while letting the user know what filter is being applied
	document.getElementById("test").innerHTML = "<div style=\"border-radius: 5px; padding-top: 10px; display: inline-block; background-color: whitesmoke; width: 300px; height: 30px; color: red\">Currently filtering by severity level " + (1 + buttonSeverity) + "</div>";

	// initialize our count
	var count = parseInt(localStorage.getItem("iconCount"));

	for (var i = 0; i < count; i++)
	{
		// adjust for coordinates
		var xCoor = 400 + parseInt(localStorage.getItem("xcoor" + i));
		var yCoor = 180 + parseInt(localStorage.getItem("ycoor" + i));
		var severity = parseInt(localStorage.getItem("severity" + i));

		// if loop to apply the filter
		if (severity == buttonSeverity)
		{
			// the button we're going to add to our addToMapString
			currButton = "<button id = \"" + i + "\"" + " style=\" background: url(../images/mapIcon" + severity + ".svg); left:" + xCoor +"; top:" + yCoor + "\"" + " class=\"map-icon\"" + " onclick=\"generateInfo(" + i + ")\"" + "></button>";
			document.getElementById("test").innerHTML += currButton;
		}
	}
}

function filterByCategory(buttonCategory){
	// empty the map before adding the buttons while letting the user know what filter is being applied
	var currCategory = "";

	switch(buttonCategory) {
	    case 0:
	        currCategory = "Food";
	        break;
	    case 1:
	    	currCategory = "Supplies";
	        break;
	    case 2:
	    	currCategory = "Missing Person";
	        break;
	    case 3:   
	    	currCategory = "Construction";
	        break; 
	    default:
	        currCategory = "Food";
	}

	document.getElementById("test").innerHTML = "<div style=\"border-radius: 5px; padding-top: 10px; display: inline-block; background-color: whitesmoke; width: 350px; height: 30px; color: red\">Currently filtering by category: " + currCategory	 + "</div>";


	// initialize our count
	var count = parseInt(localStorage.getItem("iconCount"));

	for (var i = 0; i < count; i++)
	{
		// adjust for coordinates
		var xCoor = 400 + parseInt(localStorage.getItem("xcoor" + i));
		var yCoor = 180 + parseInt(localStorage.getItem("ycoor" + i));
		var severity = parseInt(localStorage.getItem("severity" + i));
		var category = localStorage.getItem("category" + i);

		// if loop to apply the filter
		if (category == currCategory)
		{
			// the button we're going to add to our addToMapString
			currButton = "<button id = \"" + i + "\"" + " style=\" background: url(../images/mapIcon" + severity + ".svg); left:" + xCoor +"; top:" + yCoor + "\"" + " class=\"map-icon\"" + " onclick=\"generateInfo(" + i + ")\"" + "></button>";
			document.getElementById("test").innerHTML += currButton;
		}
	}	
}

function resetSeverity(){
	// reset the map to ground zero
	document.getElementById("test").innerHTML = "";

	// initialize our count
	var count = parseInt(localStorage.getItem("iconCount"));

	// re-render the map
	for (var i = 0; i < count; i++)
		{
			// adjust for coordinates
			var xCoor = 400 + parseInt(localStorage.getItem("xcoor" + i));
			var yCoor = 180 + parseInt(localStorage.getItem("ycoor" + i));
			var severity = parseInt(localStorage.getItem("severity" + i));

			// the button we're going to add to our addToMapString
			currButton = "<button id = \"" + i + "\"" + " style=\" background: url(../images/mapIcon" + severity + ".svg); left:" + xCoor +"; top:" + yCoor + "\"" + " class=\"map-icon\"" + " onclick=\"generateInfo(" + i + ")\"" + "></button>";
			document.getElementById("test").innerHTML += currButton;
			
		}
}

function reset(){
	

	var count = localStorage.getItem("iconCount");
	for (var i = 0; i < count; i++) 
	{
		localStorage.setItem("xcoor" + i, null);
		localStorage.setItem("ycoor" + i, null);
		localStorage.setItem("name" + i, null);
		localStorage.setItem("email" + i, null);
		localStorage.setItem("address" + i, null);
		localStorage.setItem("desc" + i, null);
	}

	localStorage.setItem("mapIcons", null);
	localStorage.setItem("iconCount", 2);
}


(function (global) 
{
	// if our mapIcons (array storing icon objects) doesn't exist yet, create it. We come back to the
	// homescreen multiple times, so we can't just set this every time automatically, or we'll lose data.
	if (global.localStorage.getItem("mapIcons")+ "" == "null")
	{
		// our initial icon in the form of coordinates, name, email, address, description
		global.localStorage.setItem("xcoor0", "100");
		global.localStorage.setItem("ycoor0", "100");
		global.localStorage.setItem("name0", "Billy");
		global.localStorage.setItem("email0", "billy@gmail.com");
		global.localStorage.setItem("address0", "2000 Sherman Ave, Evanston IL 60201");
		global.localStorage.setItem("desc0", "Yeah so we just need some food thanks fam");
		global.localStorage.setItem("severity0", 3);
		global.localStorage.setItem("category0", "Food")

		global.localStorage.setItem("xcoor1", "356");
		global.localStorage.setItem("ycoor1", "280");
		global.localStorage.setItem("name1", "JJ");
		global.localStorage.setItem("email1", "JJSherbert@gmail.com");
		global.localStorage.setItem("address1", "1002 Sherman Ave, Evanston IL 60201");
		global.localStorage.setItem("desc1", "Help me rebuild my house please, the roof is kicked in");
		global.localStorage.setItem("severity1", 1);
		global.localStorage.setItem("category1", "Construction")


		// initialize our iconCount to 2
		global.localStorage.setItem("iconCount", 2);
		// make sure mapIcons isn't null anymore!
		global.localStorage.setItem("mapIcons", "we gucci fam");
	}

	// initialize the string we're going to insert into the map div using document.getElementById().innerHTML;
	var addToMapString = "";
	var count = parseInt(global.localStorage.getItem("iconCount"));
	var currButton = "";
	// initialize all our icons
	for (var i = 0; i < count; i++)
	{
		// adjust for coordinates
		var xCoor = 400 + parseInt(global.localStorage.getItem("xcoor" + i));
		var yCoor = 180 + parseInt(global.localStorage.getItem("ycoor" + i));
		var severity = parseInt(global.localStorage.getItem("severity" + i));

		// the button we're going to add to our addToMapString
		currButton = "<button id = \"" + i + "\"" + " style=\" background: url(../images/mapIcon" + severity + ".svg); left:" + xCoor +"; top:" + yCoor + "\"" + " class=\"map-icon\"" + " onclick=\"generateInfo(" + i + ")\"" + "></button>";
		addToMapString = addToMapString + currButton;
		document.getElementById("test").innerHTML += currButton;

	}

	// render the icons!
	// document.getElementById("test").innerHTML = global.localStorage.getItem("email0");

}(window));