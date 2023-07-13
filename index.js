/*Prestamos Express CA*/
alert("Le damos la bienvenida a Prestamos Express CA, registrese a continuacion!")

/*Registro*/
let usuario = prompt("Por favor ingrese un nombre de usuario con el que te deseas registrar!").toLowerCase()
let clave = parseInt(prompt("Por favor ingrese una constraseña!"))
alert("Excelente, a continuacion se le pedira su nombre de usuario y contraseña con la que se acaba de registrar")
let ingresoUsuario = prompt("Ingrese su nombre de usario")
let ingresoContraseña = prompt("Ingrese su contraseña")

/*Condicion registro*/
if (ingresoUsuario == usuario && ingresoContraseña == clave) {
  alert("Verificando datos ingresados!");
} while (ingresoUsuario != usuario || ingresoContraseña != clave) {
    alert("Datos incorrectos, intenta nuevamente por favor!")
  }
alert("Datos de usuario ingresados correctamente!")


/*Recoleccion de datos filtro excluyente*/
let bienvenida = prompt("Bienvenido a Prestamos Express CA. Por favor ingrese su nombre completo por favor")
alert(`Le damos la bienvenida ${bienvenida} nos da mucho gusto que desee ser nuestro cliente!`)

let filtro = prompt("Por favor ingrese su edad!")
if (filtro >= 18) {
  alert("Cumple con la mayoria de edad. Ahora por favor responda la siguiente encuesta. El objetivo de la misma es saber si su perfil es apto para un prestamo en nuestra empresa!")
} while (filtro <= 17) {
  alert("Lo sentimos no eres mayor de edad, por lo tanto no cumple con los requisitos para un prestamo en nuestra empresa!")
}

let encuestaSueldo = prompt("¿Cual es el monto de su sueldo actual?")
if (encuestaSueldo >= 80.000) {
  alert(`${encuestaSueldo} Es un monto apto. Prosigamos a la siguiente pregunta!`)
} while(encuestaSueldo <= 79.999) {
  alert("Lo sentimos no dispone de un sueldo neto apto para un prestamo en nuestra empresa!")
}

let encuestaAntiguedad = prompt("En cuanto a su antiguedad laboral, indiquenos cuantos meses lleva trabajando en la empresa a la que pertenece actualmente?")
if (encuestaAntiguedad >= 6) {
  alert(`${encuestaAntiguedad} meses, Perfecto cumple con la antiguedad laboral necesaria!`)
} while(encuestaAntiguedad <=5) {
  alert(`Lo sentimos ${bienvenida}, ${encuestaAntiguedad} meses no son suficientes, por lo tanto no cumple con los requisitos para un prestamo en nuestra empresa!`)
}
alert("Excelente. Hemos llegado al final de la encuesta, nuestro sistema esta evaluando sus respuestas!")

/*Cotizacion prestamo*/

if (encuestaSueldo <= 100.000) {
  alert(`Felicidades ${bienvenida}, usted puede disponer de un prestamo de 40.000 Pesos Argentinos`)
} else if (encuestaSueldo >= 101.000 && encuestaSueldo <= 130.000) {
  alert(`Felicidades ${bienvenida}, usted puede disponer de un prestamo de 60.000 Pesos Argentinos`)
} else if (encuestaSueldo >= 131.000 && encuestaSueldo <= 160.000) {
  alert(`Felicidades ${bienvenida}, usted puede disponer de un prestamo de 80.000 Pesos Argentinos`)
} else if (encuestaSueldo >= 161.000 && encuestaSueldo <= 190.000) {
  alert(`Felicidades ${bienvenida}, usted puede disponer de un prestamo de 100.000 Pesos Argentinos`)
} else if (encuestaSueldo >= 191.000 && encuestaSueldo <= 220.000) {
  alert(`Felicidades ${bienvenida}, usted puede disponer de un prestamo de 120.000 Pesos Argentinos`)
} else if (encuestaSueldo > 221.000) {
  alert(`Felicidades ${bienvenida}, usted puede disponer de un prestamo de 150.000 Pesos Argentinos`)
}

/*solicitud datos de contacto*/
alert("Por favor, a continuacion le pediremos algunos datos!")
let numeroContacto = prompt("Por favor indiquenos un numero de contacto!")
let correo = prompt("Por favor indiquenos un correo electronico")
let horario = prompt("Por favor indiquenos un horario en el que estara disponible para contactarle!")
alert(`Excelente, hemos recibido la siguiente informacion; numero de contacto ${numeroContacto}, correo ${correo} en el horario ${horario}. Nos comunicaremos con usted en la brevedad! Gracias.`)


/*valoracion de atencion*/
alert("A continuacion le dejaremos una breve encuensta!")
let valoracion = prompt("Por favor, valore nuestra atencion del 1 al 5!")

if (valoracion == 1){
  alert(`Su valoracion fue ${valoracion}, gracias por su observacion trabajaremos en mejorar nuestra atencion!`)
}else if(valoracion == 2){
  alert(`Su valoracion fue ${valoracion}, gracias por su observacion trabajaremos en mejorar nuestra atencion!`)
}else if(valoracion == 3){
  alert(`Su valoracion fue ${valoracion}, gracias por valroar nuestra atencion!`)
}else if(valoracion == 4){
  alert(`Su valoracion fue ${valoracion}, gracias por su tiempo y por darnos una buena puntuacion!`)
}else if(valoracion == 5){
  alert(`Su valoracion fue ${valoracion}, Nos alegra que este conforme con nuestra atencion. Gracias!`)
}