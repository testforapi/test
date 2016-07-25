function do_sth(){
	loadJSON(function(response) {
  		// Parse JSON string into object
    	var actual_JSON = JSON.parse(response);
    	console.log("1245");
    	console.log(actual_JSON);
 	});
	var the_parent = document.getElementById("display");
	var the_div = document.createElement("div");
	var the_width = document.getElementById("104_dn_width").value;
	var the_amount = document.getElementById("104_dn_amount").value;
	//var the_height = document.getElementById("104_dn_height").value;
	the_div.style.border = "3px solid black";
	the_div.style.width = the_width + "px";
	for(var i = 0; i < parseInt(the_amount); i++){
		var child = create_ele(the_width);
		the_div.appendChild(child);
	}
	//the_div.style.height = the_height + "px";
	the_parent.appendChild(the_div);
}
function create_ele(width){
	var the_div = document.createElement("div");
	var the_title = document.createElement("div");
	var the_abstract = document.createElement("div");
	the_title.textContent = "百工的一天";
	the_title.style.fontSize = "120%";
	the_abstract.textContent = "初入社會的你也曾茫然無助，摸不清人生的目標和方向嗎？";
	the_abstract.style.marginBottom = "10px";
	the_div.appendChild(the_title);
	the_div.appendChild(the_abstract);
	//the_div.style.border = "1px solid indigo";
	the_div.style.width = parseInt(width) -10 + "px";
	the_div.style.height = "30px";
	the_div.style.margin = "20px auto";
	return the_div;
}
function init() {
 	loadJSON(function(response) {
  		// Parse JSON string into object
    	var actual_JSON = JSON.parse(response);
    	console.log("1245");
    	console.log(actual_JSON);
 	});
}
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}
