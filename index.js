let listaMenu = document.getElementById("listaMenu")


const PAQUETE = [],
VUELO = [
      { opcion: "Miami", precio: 150000},
      { opcion: "Londres", precio: 200000},
      { opcion: "Toronto", precio: 190000},
      ],
      HOSPEDAJE = [
      { opcion: "Hotel 5 estrellas (x noche)", precio: 150000 },
      { opcion: "Departamento (x noche)", precio : 75000},
      { opcion: "Hostel (x noche)", precio: 50000},
      ],
      TRANSLADO = [
      { opcion: "Auto Privado", precio: 20000},
      { opcion: "Micro Compartido", precio : 10000},
      { opcion: "Metro",precio: 2000},
      ],
      ASISTENCIA = [
      { opcion: "Asistencia Plata plus", precio: 4998 },
      { opcion: "Asistencia Oro plus ", precio: 6725 },
      { opcion: "Asistencia Diamente plus", precio: 8692 },
      ],
      NINGUNO = [{ opcion: "No se eligio", precio: 0 }]


const consultar = (mensaje) => {
      dato = parseInt(prompt(mensaje))
      while (dato <= -1 || dato >= 4 || isNaN(dato)) {
            alert("Por favor ingrese una opcion correcta")
            dato = parseInt(prompt(mensaje))
      }
      return dato
};


const menu = (menu, nombre) => {
      let precios = menu.map((opcion) => opcion.precio),
            total = precios.reduce((a, b) => a + b, 0),
            precioDolares = total / 260
      let liNombre = document.createElement("li")
      liNombre.innerHTML = "Nombre: " + nombre
      listaMenu.append(liNombre)
      let liVuelos = document.createElement("li")
      liVuelos.innerHTML =
            "Vuelo con destino a : " + menu[0].opcion + " $" + menu[0].precio
      listaMenu.append(liVuelos)
      let liHospedajes = document.createElement("li")
      liHospedajes.innerHTML =
            "Hospedaje en : " + menu[1].opcion + " $" + menu[1].precio
      listaMenu.append(liHospedajes)
      let liTranslados = document.createElement("li")
      liTranslados.innerHTML =
            "Translado en : " + menu[2].opcion + " $" + menu[2].precio
      listaMenu.append(liTranslados)
      let liAsistencias = document.createElement("li")
      liAsistencias.innerHTML =
            "Asistencia medica : " + menu[3].opcion + " $" + menu[3].precio
      listaMenu.append(liAsistencias)
      let liTotal = document.createElement("li")
      liTotal.innerHTML = "TOTAL EN PESOS : $" + total
      listaMenu.append(liTotal)
      let liDolares = document.createElement("li")
      liDolares.innerHTML = "TOTAL EN DOLARES : $" + Math.round(precioDolares)
      listaMenu.append(liDolares)

      return
}

validacion = (valor, array) => {
      if (valor != 3) {
            PAQUETE.push({
                  opcion: array[valor].opcion,
                  precio: array[valor].precio,
            })
      } else {
            PAQUETE.push({
                  opcion: NINGUNO[0].opcion,
                  precio: NINGUNO[0].precio,
            })
      }
}

let nombre = prompt("Ingrese su nombre")

let mensajeVuelo = "Elija un destino \n 0. Miami \n 1. Londres \n 2. Toronto"

let mensajeHospedaje = "Elija un hospedaje \n 0. Hotel 5 Estrellas \n 1. Departamento \n 2. Hostel \n 3. Ninguno"

let mensajeTranslado = "Elija un translado \n 0. Auto Privado \n 1. Combi compartida \n 2. Metro \n 3. Ninguno"

let mensajeAsistencia = "Elija una asistencia: \n 0. Asistencia Plata Plus \n 1. Asistencia Oro Plus \n 2. Asistencia Diamante Plus \n 3. Ninguno"


let vuelo = consultar(mensajeVuelo)

validacion(vuelo, VUELO)

let hospedaje = consultar(mensajeHospedaje)

validacion(hospedaje, HOSPEDAJE)

let translado = consultar(mensajeTranslado)

validacion(translado, TRANSLADO)

let asistencia = consultar(mensajeAsistencia)

validacion(asistencia, ASISTENCIA)

menu(PAQUETE, nombre)