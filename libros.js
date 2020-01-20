class Libros{

    constructor(titulo,autor,ano,genero){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero

    }

    mostrar(){
        return `El titulo del libro es : ${this.titulo}, su autor es "${this.autor}", año: ${this.ano} y genero : ${this.genero}`

        }
}

 const p_nombre = () => {
     do {

        let nombre = prompt("Ingrese titulo del libro");

     }while(nombre == "");
    
    
    return nombre;
 }



//const libro_info = document.getElementById("libro_info");
const libro_info= document.querySelector('#libro_info'); // Seleccionar elemento por ID, otro metodo



let biblioteca = new Array();

for (const i=0;i<3;i++){
    
    let title = prompt("Ingrese titulo del libro: ");
    let auth = prompt("Ingrese el auto del libro: ");
    let age = prompt("Ingrese año del publicacion: ");
    let gen = prompt("Ingrese el genero: ");
    biblioteca[i] = new Libros(title,auth,age,gen);
    
}

libro_info.textContent = ` ${biblioteca[1].mostrar()} `;


