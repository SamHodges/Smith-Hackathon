const paste = document.createElement('button');
paste.innerText = "PASTE";
paste.id = "paste";

const copy = document.createElement('button');
copy.innerText = "COPY";
copy.id = "copy";

var titles;
var titles_dict;

document.querySelector('body').appendChild(paste);
document.querySelector('body').appendChild(copy);

paste.addEventListener('click', pasting);

copy.addEventListener('click', () => {
	chrome.runtime.sendMessage({message: 'yo check the storage'});
	console.log("I SENT THE MESSAGE");
	//open new window
	var newWindow = window.open('https://docs.google.com/document/create');
	
	//INSERT WAITING HERE

	//pasting();

});

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
	console.log(request.message)
});


function pasting(){
	var i;
	var insert = ""; 
	//var x = document.getElementsByClassName("goog-inline-block kix-lineview-text-block");
	var page = document.getElementsByClassName("kix-page-column")[0];
	var first = page.getElementsByTagName("div")[0];
	var second = first.getElementsByTagName("div")[0];
	var third = second.getElementsByTagName("div")[0];

	var child = third.getElementsByClassName("kix-paragraphrenderer")[0];
	var parent = third;

	titles = ["title", "header 1", "header 2", "header 3", "header 4", "normal"];
	// titles_dict={
	// 	"navigation-item-content navigation-item-title navigation-item-level-0" : ["title"],
	// 	"navigation-item-content navigation-item-level-0" : ["header 1"],
	// 	"navigation-item-content navigation-item-level-1":["header 2"],
	// 	"navigation-item-content navigation-item-level-2":["header 3"],
	// 	"navigation-item-content navigation-item-level-3":["header 4"],
	// 	"navigation-item-content navigation-item-detected navigation-item-level-1": ["normal"]
	// };
	for (i = 0; i < titles.length; i++) {
  		

  		let div1 = document.createElement("div");
  		div1.setAttribute("class", "kix-paragraphrenderer");
  		div1.setAttribute("id", "h.kaic51ddshji");
  		div1.setAttribute("style", "padding-top: 0px; padding-bottom: 10px;");
  		parent.insertBefore(div1, child);

  		let div2 = document.createElement("div");
  		div2.setAttribute("class", "kix-lineview kix-lineview-z-index");
  		div2.setAttribute("id", "h.c92l828wc4ib");
  		div2.setAttribute("style", "height: 19px; direction: ltr; text-align: left;");
  		let fake_child_1 = undefined;
  		div1.insertBefore(div2, fake_child_1);

  		let div3 = document.createElement("div");
  		div3.setAttribute("class", "kix-lineview-content");
  		div3.setAttribute("style", "margin-left: 0px; padding-top: 0px; top: -1px;");
  		let fake_child_2 = undefined;
  		div2.insertBefore(div3, fake_child_2);


  		let span1 = document.createElement("span");
  		span1.setAttribute("style", "display: inline-block; position:relative; top: -9986.242838541666px;");
  		let fake_child_3 = undefined;
  		div3.insertBefore(span1, fake_child_3);

  		let span2 = document.createElement("span");
  		span2.setAttribute("style", "display: inline-block; height: 10000px");
  		div3.insertBefore(span2, span1);

  		let span3 = document.createElement("span");
  		span3.setAttribute("class", "goog-inline-block kix-lineview-text-block");
  		span3.setAttribute("style", "width: 87px; padding-left: 0px;");
  		let fake_child_4 = undefined;
  		span1.insertBefore(span3, fake_child_4);

  		let span4 = document.createElement("span");
  		span4.setAttribute("class", "kix-wordhtmlgenerator-word-node");

  		if(titles_dict["navigation-item-content navigation-item-title navigation-item-level-0"].includes(titles[i])){
	  		span4.setAttribute("style", "margin-left: 0px;font-size:34.666666666666664px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;");
			//title
	  	}
		else if(titles_dict["navigation-item-content navigation-item-level-0"].includes(titles[i])){
  			span4.setAttribute("style", "margin-left: 30px;font-size:26.666666666666664px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;");	  			
  			//1	  		
  		}
	  	else if(titles_dict["navigation-item-content navigation-item-level-1"].includes(titles[i])){
	 		span4.setAttribute("style", "margin-left: 60px;font-size:21.333333333333332px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;");
	 		//2
  		}
  		else if(titles_dict["navigation-item-content navigation-item-level-2"].includes(titles[i])){
	  		span4.setAttribute("style", "margin-left: 90px;font-size:20px;font-family:Arial;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;");
	 		//3
	 	}
  		else if(titles_dict["navigation-item-content navigation-item-level-3"].includes(titles[i])){
  			span4.setAttribute("style", "margin-left: 120px;font-size:18.666666666666664px;font-family:Arial;color:#434343;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;");
			//4
	  	}
	  	else{
	  		span4.setAttribute("style", "margin-left: 150px;font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;");
	  		//normal text
	  	}


  		let fake_child_5 = undefined;
  		span3.insertBefore(span4, fake_child_5);

  		let text = document.createTextNode(titles[i]);
        span4.appendChild(text);


  		let span5 = document.createElement("span");
  		span5.setAttribute("class", "goog-inline-block");
  		span5.setAttribute("style", "width:7.877604007720947px;height:16.865234375px");
  		let fake_child_6 = undefined;
  		span4.insertBefore(span5, fake_child_6);


	}
	}




  		


  		
