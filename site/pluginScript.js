window.addEventListener("load", loadJSON, false);
var response;

function loadJSON() { 
	var url = '//plus.s104.com.tw/ajax/activity/getPersonalRiverHot?productKey=10400&pid=104150&offset=4&limit=5&callback=mycallback';
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName("body")[0].appendChild(script);

}
function mycallback(data){
	response = data;
	do_sth();
}

function do_sth(){

	//get values from p104_dn data attributes
	var the_parent = document.getElementById("p104_dn");
	var the_width = the_parent.getAttribute("data-width");
	var the_amount = the_parent.getAttribute("data-num");
	var the_img_checkbox = the_parent.getAttribute("data-img");
	var the_abs_checkbox = the_parent.getAttribute("data-abs");
	var the_type = the_parent.getAttribute("data-type");
	var the_param = the_parent.getAttribute("data-param");

	the_parent.style.border = "2px solid orange";
	the_parent.style.padding = "0.8em 0";
	the_parent.style.width = the_width + "px";
	the_parent.style.fontFamily = "sans-serif,Microsoft JhengHei";

	for(var i = 0; i < parseInt(the_amount); i++){
		//var child = create_ele(the_type,the_param,the_width,the_img_checkbox,the_abs_checkbox,
			//actual_JSON.articles[i].title,actual_JSON.articles[i].abstract,actual_JSON.articles[i].img);
		var child = create_ele(the_type,the_param,the_width,the_img_checkbox,the_abs_checkbox,
			response.activityList[i].title,response.activityList[i].content,"http://static.104.com.tw/logo/104logo_o_76x76_appletouchicon.png");
		the_parent.appendChild(child);
	}
}
function create_ele(type,param,width,chk_img,chk_abs,title,abs,img){
	//create single "news"
	var the_div = document.createElement("div");
	the_div.style.fontSize = "0.8em";
	the_div.style.width = parseInt(width) -30 + "px";
	the_div.style.overflow = "hidden";
	the_div.style.margin = "0.5em auto";

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