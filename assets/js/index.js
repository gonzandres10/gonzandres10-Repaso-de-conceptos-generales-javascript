alert("You have to choose a letter, each letter will be added to the last one you chose");


let resultado = "";
// let docu = document.getElementById("overview").innerHTML



do {
	let cadena = prompt("Introduce a letter");

	if (Number(cadena)) {

		alert('It has to be a number');

	} else {

		if (resultado == "") {
			resultado = resultado + cadena;
		}
		else {
			resultado = resultado + " " + cadena;
		}

		let salir = true;

		if (isNaN(cadena)) {

			salir = true;

		} else {

			salir = false;

		}
	}
} while (confirm("Do you want to continue?"));

document.write(resultado)

// console.log(resolver())
// console.log(resultado)


// document.getElementById("texto").innerHTML = resolver()


function letras() {

	do {
		let cadena = prompt("Introduce a letter");

		if (resultado == "") {

			resultado = resultado + cadena;
		}
		else {
			resultado = resultado + cadena;
		}

	} while (confirm("Do you want to continue?"));
}

