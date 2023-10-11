// Referencio objetos del DOM
const txtNombreAlumno = document.getElementById('txtNombreAlumno');
const listaNotas = document.getElementById('listaNotas');
const cajaItems = document.querySelector('.items');
const cajaPromedio = document.getElementById('promedio');
const cajaNotaMasAlta = document.getElementById('notaMasAlta');
const cajaAplazos = document.getElementById('aplazos');
const btnIniciar= document.getElementById('btnIniciar');
const btnNuevo= document.getElementById('btnNuevo');


// Variables Globales
let nombreAlumno;
let notasArray = [];
let notas='';
let promedio = 0;
let operacion='';
let notaMayor=0;
let hayAplazos= ' ';



// Función que solicita nombre del estudiante
const solicitarNombre = () =>{
  nombreAlumno = prompt('Ingresa Nombre de alumno: ');
  txtNombreAlumno.textContent=nombreAlumno;
}

// Función que solicita las notas del estudiante
const solicitarNotas = () =>{
  for(let i=1;i<=5;i++){
    let nota = parseFloat(prompt(`Ingresa Nota ${i}: `));
    notasArray.push(nota);
  }
}

// Función que muestra las notas ingresadas
const mostrarNotas = () =>{
  for(let i=0;i<5;i++){
    notas+=`<li>${notasArray[i]}</li>`;
  }
  return notas;
}

// Función que calcula el promedio
const calcularPromedio = () =>{
  let sumaNotas=0;
  for(let x of notasArray){
    sumaNotas+=x;
    promedio=sumaNotas/5;
  }
  return promedio.toFixed(1);
}

// Función que calcula la nota  mas alta
const mostrarNotaMasAlta = () =>{
  for(let x of notasArray){
    notaMayor=(x>notaMayor)?x:notaMayor;
  }
  return notaMayor;
}

// Función que determina si hay Aplazos
const verificarAplazos = () =>{
  for(let x of notasArray){
    if(x>4){
      hayAplazos='No';
    }else{
      hayAplazos='Si';
      break;
    }
  }
  return hayAplazos;

}

// Programa Principal

btnNuevo.addEventListener('click',()=>{
  location.reload();
})

btnIniciar.addEventListener('click', ()=>{
  solicitarNombre();
  solicitarNotas();
  listaNotas.innerHTML=mostrarNotas();
  cajaItems.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
      operacion = event.target.textContent;
      if(operacion==='Calcular promedio')cajaPromedio.textContent=calcularPromedio();
      if (operacion === "Mostrar nota más alta")
        cajaNotaMasAlta.textContent = mostrarNotaMasAlta();
      if (operacion === "Consultar Aplazos")
        cajaAplazos.textContent = verificarAplazos();
    }
  })

})








