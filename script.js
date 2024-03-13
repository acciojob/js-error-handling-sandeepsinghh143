//your code here
class OutOfRangeError extends Error{
	constructor(message) {
    super(message);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error{
	constructor(message) {
    super(message);
    this.name = "InvalidExprError";
  }
}

function evalString(){
	const string = document.getElementById("text").value;
	if (string[0] == "+" || string[0] == "/" || string[0] == "*" string[0] == "-") {
		throw new 
	}
}

 const button = document.getElementById("btn");
button.addEventListener("click",evalString);