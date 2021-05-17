function validarString(cadena, min, max) {
	var res = false;
	if (min == 0 && max != null) {
		if ((isNaN(cadena) && cadena.length <= max) || cadena == "")
			res = true;
	}
	if (min > 0 && max == null) {
		if (isNaN(cadena) && cadena.length >= min)
			res = true;
	}
	if (min == 0 && max == null) {
		if (isNaN(cadena) || cadena == "")
			res = true;
	}
	if (min > 0 && max != null) {
		if (isNaN(cadena) && cadena.length >= min && cadena.length <= max)
			res = true;
	}
	return res;
}

function esVacio(valor) {
	if (valor == "") {
		return true;
	} else {
		return false;
	}

}
function validateDocumento(value) {
	var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
	var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var str = value.toString().toUpperCase();
  
	if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
  
	var nie = str
	  .replace(/^[X]/, '0')
	  .replace(/^[Y]/, '1')
	  .replace(/^[Z]/, '2');
  
	var letter = str.substr(-1);
	var charIndex = parseInt(nie.substr(0, 8)) % 23;
  
	if (validChars.charAt(charIndex) === letter) return true;
  
	return false;
  }
  function validarPC(cadena,min,max){
	if(!isNaN(cadena) && cadena.length >= min && cadena.length <= max){
		return true;
	}else{
		
		return false;
	}
}
function validarTelefono(cadena,min,max){
	if(cadena.substring( 0, 1 ) == 6 || cadena.substring( 0, 1 ) == 7
	|| cadena.substring( 0, 1 ) == 9){
		if(!isNaN(cadena) && cadena.length >= min && cadena.length <= max){
			return true;
		}else{		
			return false;
		}
	}else{
		return false;
	}
}
function validarEmail(valor){
	if(valor!=""){
		var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(!expresion.test(valor)){
			return false;
		}else{
			return true;
		}
	}
}
function validarFecha(fecha){
    var RegExPattern = /^\d{1,4}\/\d{1,2}\/\d{2,2}$/;
    if ((fecha.match(RegExPattern)) && (fecha!='')) {
        var array = fecha.split("/");
        var dia = array[2];
        var mes = array[1];
        var ano = array[0];
        if(mes<13){
            var validar = new Date(ano,mes,'0');
            if((dia-0)>(validar.getDate()-0)){
                return false;
            }else{
                var fechaN=new Date();
                fechaN.setDate(dia);
                fechaN.setMonth(mes-1);
                fechaN.setFullYear(ano);

                var hoy=new Date();
                hoy.getDate();
                hoy.getMonth()+1;
                hoy.getFullYear();
                if(fechaN>hoy){
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return false;
        }
}else {
    return false;
}
}
function crearCaptcha(){

    var num1=Math.round(Math.random()*9);
    var num2=Math.round(Math.random()*9);
    
    document.getElementById("num1").innerHTML=num1.toString();
    document.getElementById("num2").innerHTML=num2.toString();
    
}
function validarCaptcha(elemento){

    var num1=document.getElementById("num1").innerHTML;    
    var num2=document.getElementById("num2").innerHTML;
    var resultado;
    resultado=parseInt(num1)+parseInt(num2);   

    if(resultado != elemento){
        return false;
    }else{
        return true;
    }
}


