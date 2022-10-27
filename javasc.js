var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems= document.querySelectorAll("li");

/////////////////////////////////////////////////////
function inputLength(){
	return input.value.length;
}

function addItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);
    ul.appendChild(li);
	input.value = "";
}

function clickEnterByButton() {
	if(inputLength() > 0){
		addItem();
	}
}

function clickEnterByKey(event){
	if (inputLength() > 0 && event.code === "Enter"){
		addItem();
	}
}


function deleteItem(event){
	if(event.target.classList.contains("delete")){
		event.target.closest("li").remove();
	}
}

function lineThrough(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}


////////////////////////////////////////////////////

button.addEventListener('click',clickEnterByButton);
input.addEventListener('keypress',clickEnterByKey);
ul.addEventListener('click',lineThrough);
ul.addEventListener('click',deleteItem);
