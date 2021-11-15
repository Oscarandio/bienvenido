//Creamos los meses del año para dar un mejor formato a la fecha

const mes = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

//Creamos las variables que nos proporcionarán la fecha y la hora del día actual

var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var date = today.getDate();

//Creamos el script que nos dará un mensaje de bienvenida distinto dependiendo de la hora del día actual

var greeting;

if (hourNow > 19) {
  greeting = "¡Buenas noches!";
} else if (hourNow > 12) {
  greeting = "¡Buenas tardes!";
} else if (hourNow > 6) {
  greeting = "¡Buenos dias";
} else {
  greeting = "¡Buenas noches! ¿No deberias estar durmiendo?";
}

//Por último, escribimos el mensaje que queremos que aparezca en pantalla

document.write(
  "<p>" +
    greeting +
    "<br> Son las " +
    (hourNow<10?"0":"") +
    hourNow +
    ":" +
    (minutesNow<10?"0":"") +
    minutesNow +
    " del " +
    (today.getDate<10?"0":"") +
    today.getDate() +
    " de " +
    mes[today.getMonth()] +
    " de " +
    today.getFullYear() +
    " </p> "
);
