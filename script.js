var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.className = "item"
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeListClick(e) {
	console.log(e.target.tagName);
	if (e.target.tagName === "LI") {
		e.target.remove();
	}
}

button.addEventListener("click", addListAfterClick);
ul.addEventListener('click', removeListClick)

input.addEventListener("keypress", addListAfterKeypress);