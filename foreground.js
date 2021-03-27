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
	var x = document.getElementsByClassName("goog-inline-block");
	for (i = 0; i < titles.length; i++) {
  		insert = title[i] + "<br>";
  		//sort according to header types
	}
	x[0].innerHTML = insert;
	console.log(insert);
}