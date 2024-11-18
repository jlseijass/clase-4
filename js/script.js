let arrayDeCervezas = [];

let opcionesDeCervezas;

function agregarCerveza() {
 let nuevaCerveza = prompt("Cuál quieres comprar");
arrayDeCervezas.push(nuevaCerveza);
};

function agregarPrecio() {
    let elprecioEs = parseInt(prompt("Cuál es el precio"));
   arrayDeCervezas.push(elprecioEs);
   };

function mostrarCerveza() {
 let dameMiCerveza = arrayDeCervezas.join("\n");
alert(dameMiCerveza);
};

while (opcionesDeCervezas!==0) 
  
  { opcionesDeCervezas = parseInt(prompt("Que vas a querer hoy? \n 1 agrega tu cerveza \n 2 Cuál es el precio? \n 3 para ver como va la lista. \n Si realmente no tomas cerveza marca 0"));

    if (opcionesDeCervezas === 0) {
      alert("Cómo que no te gusta la cerveza?");
    } else if (opcionesDeCervezas === 1) {
      agregarCerveza();
    } else if (opcionesDeCervezas === 2) {
      agregarPrecio();
    } else if (opcionesDeCervezas === 3) {
      mostrarCerveza();
    
    } else {
      alert("Te vas a ir sin tomar nada?");
    }
}



