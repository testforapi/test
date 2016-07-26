function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    	xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://testforapi.github.io/test/site/data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

function do_sth(){

	var the_parent = document.getElementById("p104_dn");
	//var the_div = document.createElement("div");
	//var the_width = document.getElementById("104_dn_width").value;
	var the_width = the_parent.getAttribute("data-width");
	//var the_amount = document.getElementById("104_dn_amount").value;
	var the_amount = the_parent.getAttribute("data-num");
	var the_img_checkbox = the_parent.getAttribute("data-img");
	var the_abs_checkbox = the_parent.getAttribute("data-abs");
	
	the_parent.style.border = "3px solid orange";
	the_parent.style.width = the_width + "px";
	the_parent.style.fontFamily = "sans-serif,Microsoft JhengHei";
	loadJSON(function(response) {
  		// Parse JSON string into object
    	var actual_JSON = JSON.parse(response); 
    	for(var i = 0; i < parseInt(the_amount); i++){
			var child = create_ele(the_width,the_img_checkbox,the_abs_checkbox,actual_JSON.articles[i].title,actual_JSON.articles[i].abstract,actual_JSON.articles[i].img);
			the_parent.appendChild(child);
		}
 	});	
	//the_parent.appendChild(the_div);
}

function btn_preview(){

	var the_parent = document.getElementById("p104_dn");
	var the_sc = document.getElementById("p104_sc");
	console.log(the_sc);
	while(the_parent.firstChild){
		the_parent.removeChild(the_parent.firstChild);
	}
	while(the_sc.firstChild){
		the_sc.removeChild(the_sc.firstChild);
	}
	var the_width = document.getElementById("104_dn_width").value;
	var the_amount = document.getElementById("104_dn_amount").value;
	var the_img_checkbox =  document.getElementById("104_dn_img");
	var the_abs_checkbox =  document.getElementById("104_dn_abs");
	var the_img_checkbox = the_img_checkbox.checked.toString();
	var the_abs_checkbox = the_abs_checkbox.checked.toString();
	
	the_parent.style.border = "3px solid orange";
	the_parent.style.width = the_width + "px";
	loadJSON(function(response) {
  		// Parse JSON string into object
    	var actual_JSON = JSON.parse(response); 
    	for(var i = 0; i < parseInt(the_amount); i++){
			var child = create_ele(the_width,the_img_checkbox,the_abs_checkbox,actual_JSON.articles[i].title,actual_JSON.articles[i].abstract,actual_JSON.articles[i].img);
			the_parent.appendChild(child);
		}
 	});	

}

function create_ele(width,chk_img,chk_abs,title,abs,img){
	
	var the_div = document.createElement("div");
	//the_div.style.border = "1px solid indigo";
	the_div.style.fontSize = "0.8em";
	the_div.style.width = parseInt(width) -30 + "px";
	the_div.style.overflow = "hidden";
	the_div.style.margin = "0.7em auto";

	//var the_img_checkbox =  document.getElementById("104_dn_img");
	//var the_abs_checkbox =  document.getElementById("104_dn_abs");

	if(chk_img === "true"){
		var the_img = document.createElement("img");
		the_img.src = img;
		the_img.style.height = "90%";
		the_img.style.float = "left";
		if(chk_abs !== "true"){
			the_div.style.height = "1.5em";
			the_img.style.paddingRight = "0.3em";
		}
		else{
			the_div.style.height = "3em";
			the_img.style.paddingRight = "0.8em";
		}
		the_div.appendChild(the_img);
	}
	var the_title = document.createElement("div");
	the_title.textContent = title;
	//the_title.style.fontSize = "0.9em";
	the_title.style.fontWeight = "bolder";
	the_title.style.overflow = "hidden";
	the_title.style.whiteSpace = "nowrap";
	the_title.style.textOverflow = "ellipsis"; 
	the_div.appendChild(the_title);

	
	if(chk_abs === "true"){
		the_div.style.height = "4em";
		var the_abstract = document.createElement("div");
		the_abstract.textContent = abs;
		the_abstract.style.fontSize = "0.7em";
		//the_abstract.style.height = "30px";
		//the_abstract.style.textOverflow = "ellipsis"; 
		the_div.appendChild(the_abstract);
	}
	return the_div;
}

function btn_getCode(){

	var the_parent = document.getElementById("p104_sc");
	var the_width = document.getElementById("104_dn_width").value;
	var the_amount = document.getElementById("104_dn_amount").value;
	var the_img_checkbox =  document.getElementById("104_dn_img");
	var the_abs_checkbox =  document.getElementById("104_dn_abs");
	var the_img_checkbox = the_img_checkbox.checked.toString();
	var the_abs_checkbox = the_abs_checkbox.checked.toString();
	the_parent.textContent = "<div id=\"p104_dn\" data-width=\""+ the_width + "\" data-num=\"" + the_amount + "\" data-img=\""+ the_img_checkbox + "\" data-abs=\"" +the_abs_checkbox+ "\"></div>"
	/*the_parent.setAttribute("data-width",the_width);
	the_parent.setAttribute("data-num",the_amount);
	the_parent.setAttribute("data-img",the_img_checkbox.checked);
	the_parent.setAttribute("data-abs",the_abs_checkbox.checked);*/
}
