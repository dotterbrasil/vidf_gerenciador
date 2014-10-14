function consulta(botao) {

if (document.formulario.serial.value=="")
	{
	document.formulario.submit();
	}
	else {
		caminho = "http://v-id.net/demo/farma/"+document.formulario.anvisa.value+"/"+document.formulario.lote.value+"/"+document.formulario.serial.value+".vid";
		}

document.tracking.location.href = caminho;

}

function abre_vid(anvisa,lote,serial) {

document.location.href = anvisa+"/"+lote+"/"+serial+".vid";

}

function seleciona(anvisa, lote, serial) {

document.getElementById("tracking").visible = true;
document.getElementById("resultado").src = "../"+anvisa+"/"+lote+"/"+serial+".vid";

//document.location.href = "../"+anvisa+"/"+lote+"/"+serial+".vid";

}

function alertas() {

caminho = "http://v-id.net/demo/farma/alertas/log_de_erros.txt";

document.tracking.location.href = caminho;

}