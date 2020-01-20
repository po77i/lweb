const numero= document.getElementById("numero");
const resultado= document.getElementById("resultado");

let n1= prompt("Ingrese el numero 1");
let n2= prompt("Ingrese el numero 2");
let n3= prompt("Ingrese el numero 3");


numero.textContent= `Los numero son ${n1} ${n2} ${n3}`;

if (n1 >= n2 && n1 >= n3){
    if(n2 >= n3){
        resultado.textContent = `El orden es ${n1} ${n2} ${n3}`
    }
    else{
        resultado.textContent = `El orden es ${n1} ${n3} ${n2}`
    }
}
else if(n2 >= n1 && n2 >= n3){
    if(n1 >= n3){
        resultado.textContent = `El orden es ${n2} ${n1} ${n3}`
    }
    else{
        resultado.textContent =`El orden es ${n3} ${n3} ${n1}`
    }

}
else if(n3 >= n1 && n3 >= n2){
    if (n1 >= n2){
        resultado.textContent = `El orden es ${n3} ${n1} ${n2}`
    }
    else{
        resultado.textContent = `El orden es ${n3} ${n2} ${n1}`
    }
}
    