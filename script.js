var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

console.log("color1: "+color1.value);
console.log("color2: "+color2.value);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRndHex(min, max) {
	
	var number = (Math.floor(Math.random() * (max - min)) + min);
	if (number < 16) {
		return "0" + (number).toString(16)
	}else{
		return (number).toString(16)
	}
  }

function setDefaultGradient(){
	
	color1.value= "#" + getRndHex(0,256) + getRndHex(0,256) + getRndHex(0,256);
	color2.value= "#" + getRndHex(0,256) + getRndHex(0,256) + getRndHex(0,256);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
// I cannot introduce the ";" in the above sentence because previous concatenate
// is not saved in body.style.background.

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", setDefaultGradient)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);