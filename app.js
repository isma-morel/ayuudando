//creando personajes como objetos
class Personajes {
  constructor(src, id, nombre, vida, poderAtt, poderDef, tipo) {
    this.src = src;
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = poderAtt;
    this.defensa = poderDef;
    this.tipo = tipo;
    this.id = id;
  }
  //informacion de personajes para identificarlos
  //agrego e como parametro para mostrar en el html y doy estilo en linea
  PersonjesInfo(e) {
    let info =
      /* `
    <div class="card">
    <p>ID= ${e.id}</p>    
    <p class="global p1">Nombre: ${e.nombre}</p>
    <p class="global p2">Vida: ${e.vida}</p>
    <p class="global p3">Ataque: ${e.ataque}</p>
    <p class="global p4">Defensa: ${e.defensa}</p>
    <p class="global p5">Tipo: ${e.tipo}</p>
    </div>
    

    `*/

      `
    <div class="card" style="width: 18rem;">
        <img src=${e.src} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5>ID:${e.id}</h5>
            <h5 class="card-title global">${e.nombre}</h5>
            <p class="card-text global p2">Vida: ${e.vida}</p>
            <p class="card-text global p3">Ataque: ${e.ataque}</p>
            <p class="card-text global p4">Defensa: ${e.defensa}</p>
            <p class="card-text global p5">Tipo: ${e.tipo}</p>
        </div>
    </div>
    
    
        `;
    return info;
  }
}

//personajes elegidos por el usuario
const personaje1 = new Personajes(
  "https://static.wikia.nocookie.net/marvel/images/1/17/Thor_-_AIW.png/revision/latest?cb=20190425002245&path-prefix=es",
  1,
  "thor",
  100,
  80,
  75,
  "electrico"
);
const personaje2 = new Personajes(
  "data:image/jpeg;base64,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",
  2,
  "hulk",
  100,
  100,
  80,
  "destructor"
);
const personaje3 = new Personajes(
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/iron-man-2332341.jpg?itok=OpnxllqM",
  3,
  "ironMan",
  100,
  75,
  90,
  "tecnologico"
);
//personajes para enfrentar al usuario
const adversario1 = new Personajes(1, "loki", 110, 75, 90, "magia");
const adversario2 = new Personajes(2, "thanos", 110, 75, 90, "magia");
const adversario3 = new Personajes(3, "magneto", 110, 75, 90, "magia");
//creando arrays de objetos y pusheados
const ListaPersonajes = [];
ListaPersonajes.push(personaje1, personaje2, personaje3);
console.log(ListaPersonajes);

//recorro el array con el forEach y genero el codigo HTML con el inner
ListaPersonajes.forEach((e) => {
  heroesPrint.innerHTML += e.PersonjesInfo(e);
});
const ListaAdversarios = [];
ListaAdversarios.push(adversario1, adversario2, adversario3);
console.log(ListaAdversarios);
//validacion para continuar jugando o abandonar el juego
const validacion = () => {
  let seguirJugando = confirm("quiere seguir jugando?");
  if (seguirJugando) {
    alert("Volviendo a pelear");
    return seguirJugando;
  } else {
    alert("Saliendo del programa");
    return seguirJugando;
  }
};
//primer comentario para ingresar a jugar
//este if valida continuar el juego despues de una partida
setTimeout(() => {
  let opcion = confirm("te animas a enfrentar a loki?");

  if (opcion) {
    while (opcion) {
      //usuario ingresa el dato para iniciar
      let adversario = prompt(
        "ìngrese el numero de su heroe para enfrentar a loki"
      );
      //verifico que sea un dato valido
      if (adversario != "esc" && adversario != "" && adversario != null) {
        juegoMarvel(adversario, ListaAdversarios);
        opcion = validacion();
      } else {
        //aviso que el dato no es valido y vuelvo a preguntar
        alert("dato invalido");
        opcion = validacion();
      }
    }
  } else {
    //si el dato "opcion" es false abandona el juego
    alert("Abandonando el juego");
  }
}, 2000);

function juegoMarvel(personaje, adversario) {
  //la variable loki cambia dependiendo del dato ingrsado por usuario
  let loki = adversario;
  switch (personaje) {
    case "1":
      console.log(`${loki[0].nombre} vs Thor`);
      alert(`loki te enfrentara disfrazado de ${loki[0].nombre}`);
      break;

    case "2":
      console.log(`${loki[1].nombre} vs Hulk`);
      alert(`loki te enfrentara disfrazado de ${loki[1].nombre}`);
      break;

    case "3":
      console.log(`${loki[2].nombre} vs IronMan`);
      alert(`loki te enfrentara disfrazado de ${loki[2].nombre}`);
      break;

    default:
      alert(`dato invalido`);
      break;
  }
}
