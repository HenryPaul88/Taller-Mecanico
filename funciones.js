
var sumadorIva4 = 0;
var valorIva4 = 0;
var sumadorIva10 = 0;
var valorIva10 = 0;
var sumadorIva21 = 0;
var valorIva21 = 0;
var sumadorImporte4 = 0;
var valorImporte4 = 0;
var sumadorImporte10 = 0;
var valorImporte10 = 0;
var sumadorImporte21 = 0;
var valorImporte21 = 0;
var sumadorTotal = 0;
var valorTotal = 0;
var nuevaFila=true;


//funciones de validacion del furmulario 
function mostrar(elemento) {
    elemento.style.display = "block";
}

function noMostrar(elemento) {
    elemento.style.display = "none";
}

function validarStringInside(elemento, min, max, capaerror) {
    if (!validarString(elemento.value, min, max)) {
        if (!esVacio(elemento)) {
            elemento.style.borderColor = "red";
            mostrar(capaerror);
        }

    } else {
        elemento.style.backgroundColor = "";
        elemento.style.borderColor = "green";
        noMostrar(capaerror);
    }
}

function validarDocumentoIndise(elemento, capaerror) {
    if (!validateDocumento(elemento.value)) {
        if (!esVacio(elemento)) {
            elemento.style.borderColor = "red";
            mostrar(capaerror);
        }
    } else {
        elemento.style.backgroundColor = "";
        elemento.style.borderColor = "green";
        noMostrar(capaerror);
    }
}

function validarNUmeroDigitosInside(elemento, min, max, capaerror) {
    if (!validarPC(elemento.value, min, max)) {
        elemento.style.borderColor = "red";
        mostrar(capaerror);
    } else {
        noMostrar(capaerror);
        elemento.style.borderColor = "green";
        elemento.style.backgroundColor = "";

    }
}

function validarProvincia() {
    var codigoPostal = document.getElementById("cp").value.substring(0, 2);
    var provincias = ["Álava", "	Albacete", "	Alicante", "Almería", "Ávila", "Badajoz", "Baleares", "Barcelona", "Burgos",
        "Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba", "La Coruña", "Cuenca", "Gerona", "Granada", "Guadalajara",
        "Guipúzcoa", "Huelva", "Huesca", "Jaén", "León", "Lérida", "La Rioja", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Orense",
        "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria", "Segovia",
        "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "	Ceuta", "Melilla"
    ];
    var numeropostal = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
        "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"
    ];
    for (var i = 0; i < provincias.length; i++) {
        if (numeropostal[i] == codigoPostal) {
            document.getElementById("provincia").value = provincias[i];
        }
    }
}

function validarEmailInside(elemento, capaerror) {
    if (!validarEmail(elemento.value)) {
        elemento.style.borderColor = "red";
        mostrar(capaerror);
    } else {
        noMostrar(capaerror);
        elemento.style.backgroundColor = "";
        elemento.style.borderColor = "green";
    }
}

function validarTelefonoInside(elemento, min, max, capaerror) {
    if (!validarTelefono(elemento.value, min, max)) {
        elemento.style.borderColor = "red";
        mostrar(capaerror);
    } else {
        noMostrar(capaerror);
        elemento.style.backgroundColor = "";
        elemento.style.borderColor = "green";
    }
}

function validarFechaInside(elemento, capaerror) {
    if (!validarFecha(elemento.value)) {
        elemento.style.borderColor = "red";
        mostrar(capaerror);
    } else {
        noMostrar(capaerror);
        elemento.style.borderColor = "green";
    }
}

function validarDocumentoIndise(elemento, capaerror) {
    if (!validateDocumento(elemento.value)) {
        if (!esVacio(elemento)) {
            elemento.style.borderColor = "red";
            mostrar(capaerror);
        }
    } else {
        elemento.style.borderColor = "green";
        noMostrar(capaerror);
    }
}

function validarCaptchaIndise(elemento, capaerror) {
    if (!validarCaptcha(elemento.value)) {
        if (!esVacio(elemento)) {
            elemento.style.borderColor = "red";
            mostrar(capaerror);
        }
    } else {
        elemento.style.borderColor = "green";
        noMostrar(capaerror);
    }
}
// funcion para crear las filas de la tabla
function crearFila() {

   
    var table = document.getElementById("tabla");
    var fila = table.insertRow(1);
    var optionArray = ["", "4", "10", "21"];

    //input cantidad
    var cantidad = document.createElement("INPUT");
    var cantidadLabel = document.createElement("LABEL");
    var descripcion = document.createElement("INPUT");
    var descripLabel = document.createElement("LABEL");
    var precioLabel = document.createElement("LABEL");
    var precio = document.createElement("INPUT");
    cantidad.setAttribute("type", "number");
    cantidad.setAttribute("id", "cantidad");
    //Labelcantidad
    cantidadLabel.setAttribute("id", "errorcantidadLabel");
    cantidadLabel.setAttribute("class", "obligatorio");
    cantidadLabel.innerHTML = ("cantidad obligatorio")
    //input descripcion
    descripcion.setAttribute("type", "text");
    descripcion.setAttribute("id", "descripcion");
    //Label descripcion
    descripLabel.setAttribute("id", "errordescripLabel");
    descripLabel.setAttribute("class", "obligatorio");
    descripLabel.innerHTML = ("descripcion obligatorio")
    //input precio
    precio.setAttribute("type", "number");
    precio.setAttribute("id", "precio");
    //Labelprecio
    precioLabel.setAttribute("id", "errorprecioLabel");
    precioLabel.setAttribute("class", "obligatorio");
    precioLabel.innerHTML = ("precio obligatorio")

    descripcion.onblur = function () {
        validarStringInside(this, 2, 50, errordescripLabel)
    }
    cantidad.onblur = function () {

        validarNUmeroDigitosInside(this, 1, 3, errorcantidadLabel)
    }
    precio.onchange = function () {
        calcularImporte()
    };
    precio.onblur = function () {
        validarNUmeroDigitosInside(this, 1, 3, errorprecioLabel)
    }
    //insertar select
    var ivaPorCiento = document.createElement("SELECT");
    ivaPorCiento.setAttribute("id", "ivaPorCiento");
    ivaPorCiento.setAttribute("name", "ivas");
    ivaPorCiento.onchange = function () {
        calcularIva(), calcularTotal(), ivatotales()
    }
    for (var i = 0; i < optionArray.length; i++) {
        var option = document.createElement("OPTION");
        option.text = optionArray[i];
        option.value = optionArray[i];
        ivaPorCiento.appendChild(option);
    }
    //input iva disable
    var iva = document.createElement("INPUT");
    iva.setAttribute("type", "number");
    iva.setAttribute("id", "ivaInputTable");
    iva.disabled = true;
    //input importe disable
    var importe = document.createElement("INPUT");
    importe.setAttribute("type", "number");
    importe.setAttribute("id", "importe");
    importe.disabled = true;
    //input total disable
    var total = document.createElement("INPUT");
    total.setAttribute("type", "disabled");
    total.setAttribute("id", "total");
    total.disabled = true;
    total.onchange = function () {
        ivatotales()
    }
    //boton borrar
    var borrar = document.createElement("BUTTON");
    borrar.setAttribute("type", "button");
    borrar.setAttribute("id", "borrar");
    borrar.setAttribute("class", "btn btn-block btn-outline-danger");
    borrar.innerHTML = "Borrar";
    borrar.onclick = function () {
        borrarUnaFila(this)
    };
    
    if(nuevaFila){
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);
    var celda7 = fila.insertCell(6);
    var celda8 = fila.insertCell(7);
    celda1.appendChild(cantidad);
    celda1.appendChild(cantidadLabel);
    celda2.appendChild(descripcion);
    celda2.appendChild(descripLabel);
    celda3.appendChild(precio);
    celda3.appendChild(precioLabel);
    celda4.appendChild(ivaPorCiento);
    celda5.appendChild(iva);
    celda6.appendChild(importe);
    celda7.appendChild(total);
    celda8.appendChild(borrar);
        
    }
            
}

function calcularImporte() {
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var resultado = 0;
    if (cantidad != "" && precio != "") {
        resultado = cantidad * precio;

        document.getElementById("importe").value = resultado;

    }
}

function calcularIva() {
    var select = document.getElementById("ivaPorCiento");
    var indice = select.selectedIndex;
    var iva = select.options[indice].value;
    var importe = document.getElementById("importe").value;
    var resultado = 0;

    resultado = (iva * importe) / 100;
    document.getElementById("ivaInputTable").value = resultado.toFixed(2);
}

function calcularTotal() {
    var iva = document.getElementById("ivaInputTable").value;
    var importe = document.getElementById("importe").value;
    var resultado = (parseFloat(iva) + parseFloat(importe));
    document.getElementById("total").value = resultado.toFixed(2);
}

function borrarUnaFila(elemento) {
    var parentRowIndex = elemento.parentNode.parentNode.rowIndex;
    document.getElementById("tabla").deleteRow(parentRowIndex);
   
}

function ivatotales() {
    var ivaInputTable = document.getElementById("ivaInputTable").value;
    var total = document.getElementById("total").value;
    var importe = document.getElementById("importe").value;
   

    var combo = document.getElementById("ivaPorCiento");
    var selected = combo.options[combo.selectedIndex].text;

    if (selected == 4) {
        //iva4
        sumadorIva4 = parseFloat(ivaInputTable);
        valorIva4 = valorIva4 + sumadorIva4;
        document.getElementById("Iva4").value = valorIva4;
        //importe4
        sumadorImporte4 = parseFloat(importe);
        valorImporte4 = valorImporte4 + sumadorImporte4;
        document.getElementById("baseIva4").value = valorImporte4.toFixed(2);
    }if (selected == 10) {
        //iva10
        sumadorIva10 = parseFloat(ivaInputTable);
        valorIva10 = valorIva10 + sumadorIva10;
        document.getElementById("Iva10").value = valorIva10.toFixed(2);
        //importe10
        sumadorImporte10 = parseFloat(importe);
        valorImporte10 = valorImporte10 + sumadorImporte10;
        document.getElementById("baseIva10").value = valorImporte10.toFixed(2);
    }if (selected == 21) {
        //iva21
        sumadorIva21 = parseFloat(ivaInputTable);
        valorIva21 = valorIva21 + sumadorIva21;
        document.getElementById("Iva21").value = valorIva21.toFixed(2);
        //importe21
        sumadorImporte21 = parseFloat(importe);
        valorImporte21 = valorImporte21 + sumadorImporte21;
        document.getElementById("baseIva21").value = valorImporte21.toFixed(2);
    }
    if (selected == 10 || selected == 4 || selected == 21) {
        sumadorTotal = parseFloat(total);
        valorTotal = valorTotal + sumadorTotal;
        document.getElementById("totales").value = valorTotal.toFixed(2);
    }
}

function validarFormularioExamen() {
    var res = true;
    var mensajeError = "";
    var mensajeCorrecto = "Formulario Exitoso!!";

    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var idAlumno = document.getElementById("idAlumno").value;
    var nombre = document.getElementById("nombre").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;

    if (!validarFecha(fecha)) {
        mensajeError += "fecha: campo obligatorio y tener formato pedido.- \n";
        res = false;
    }
    if (!validarHora(hora)) {
        mensajeError += "hora: campo obligatorio y tener formato pedido.- \n";
        res = false;
    }
    if (!validarPC(idAlumno, 1, 4)) {
        mensajeError += "idAlumno: campo obligatorio y tener entre 1 y 4 caracteres.- \n";
        res = false;
    }
    if (!validarString(nombre, 2, 100)) {
        mensajeError += "Nombre: campo obligatorio y tener entre 2 y 100 caracteres.- \n";
        res = false;
    }
    if (!validateDocumento(dni)) {
        mensajeError += "Documento obligatorio NIE o NIF o CIF.- \n";
        res = false;
    }

    if (!validarEmail(email)) {
        mensajeError += "Email: campo de email. obligatorio.- \n";
        res = false;
    }

    if (res == false)
        document.getElementById("texto").innerHTML = mensajeError;

    else

        document.getElementById("texto").innerHTML = mensajeCorrecto;
}