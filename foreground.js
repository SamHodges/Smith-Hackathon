const paste = document.createElement('button');
paste.innerText = "PASTE";
paste.id = "paste";

const copy = document.createElement('button');
copy.innerText = "COPY";
copy.id = "copy";

var titles;

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

	

	titles = ["header 1", "header 2", "header 3"];
	for (i = 0; i < titles.length; i++) {
  		insert = insert
  		+ '<div class="kix-paragraphrenderer" id="" style="padding-top: 0px; padding-bottom: 0px;">'
  		+ '<div class="kix-lineview kix-lineview-z-index" style="height: 19px; direction: ltr; text-align: left;">'
  		+ '<div class="kix-lineview-content" style="margin-left: 0px; padding-top: 0px; top: -1px;">'
  		+'<span style="display: inline-block; height: 10000px">'
  		+'</span>'
  		+'<span style="display: inline-block; position:relative; top: -9986.242838541666px;">'
  		+'<span class="goog-inline-block kix-lineview-text-block" style="width: 87px; padding-left: 0px;">'
  		+'<span class="kix-wordhtmlgenerator-word-node" style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">' 
  		+ titles[i] 
  		+ '<span class="goog-inline-block" style="width:7.877604007720947px;height:16.865234375px">'
  		+' &nbsp;</span>‌</span></span></span></div></div></div>';
  		//sort according to header types
	}
	third.innerHTML = insert 
	//<div class="kix-paragraphrenderer" id="" style="padding-top: 0px; padding-bottom: 0px;"><div class="kix-lineview kix-lineview-z-index" style="height: 19px; direction: ltr; text-align: left;"><div class="kix-lineview-content" style="margin-left: 0px; padding-top: 0px; top: -1px;"><span style="display: inline-block; height: 10000px"></span><span style="display: inline-block; position:relative; top: -9986.242838541666px;"><span class="goog-inline-block kix-lineview-text-block" style="width: 87px; padding-left: 0px;"><span class="kix-wordhtmlgenerator-word-node" style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">Hu‌ ‌frnio3jifj3r‌<span class="goog-inline-block" style="width:7.877604007720947px;height:16.865234375px">&nbsp;</span>‌</span></span></span></div></div></div>
}

