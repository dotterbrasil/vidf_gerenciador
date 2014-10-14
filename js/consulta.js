function consulta(botao) {

if (document.formulario_origem.serial.value=="")
	{

	document.tracking.location.href = "";

	var iframeDoc = document.getElementById("tracking").contentWindow.document;
	iframeDoc.open();
	iframeDoc.write("<FORM NAME='formulario' action='funcoes/lista_iums.php' method='POST'><INPUT TYPE='hidden' NAME='anvisa' id='anvisa' maxlength='13'><INPUT TYPE='hidden' NAME='lote' id='lote' maxlength='20' size='25'><INPUT TYPE='hidden' NAME='serial' id='serial' maxlength='20' size='24'></FORM>");
	iframeDoc.close();
	parent.tracking.formulario.anvisa.value = document.getElementById("anvisa").value;
	parent.tracking.formulario.lote.value = document.getElementById("lote").value;
	parent.tracking.formulario.submit();
	}
	else {
		caminho = "http://v-id.net/demo/farma/"+document.formulario_origem.anvisa.value+"/"+document.formulario_origem.lote.value+"/"+document.formulario_origem.serial.value+".vid";
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