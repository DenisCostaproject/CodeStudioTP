var noia = window.document.getElementById("noia")
var veia = window.document.getElementById("veia")
var gordo = window.document.getElementById("gordo")
var etv1 = window.document.getElementById("etv1")
var etv2 = window.document.getElementById("etv2")
var SetaDireita = window.document.getElementById("setad")
var SetaEsquerda = window.document.getElementById("setae")
function GoRight() {
    noia.style = "display:none"
    veia.style = "display:none"
    gordo.style = "display:none"
     etv1.style = "display:flex"
     etv2.style = "display:flex"
     SetaDireita.style = "display:none"
     SetaEsquerda.style = "display:flex"
     }
     function GoLeft () {
        etv1.style = "display:none"
        etv2.style = "display:none"
        noia.style = "display:flex"
        veia.style = "display:flex"
        gordo.style = "display:flex"
        SetaEsquerda.style = "display:none"
        SetaDireita.style = "display:flex"
     
}
