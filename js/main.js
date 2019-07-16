/*
*@author Carlos Henrique
*
*/
var etanol, gasolina;

function calcular(){

    etanol=parseFloat(frmGuia.txtEtanol.value.replace(",","."));
    gasolina=parseFloat(frmGuia.txtGasolina.value.replace(",","."));
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="./imagens/etanol.png";
        
    } else {
        document.getElementById("status").src="./imagens/gasolina.png";
        
    }
}
