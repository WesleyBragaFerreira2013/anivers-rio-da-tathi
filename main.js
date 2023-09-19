window.onload = function() {
    resposta = confirm("Enquanto você estava fora o chrome atualizou");
    console.log(resposta);

    if (resposta == true) {
        window.location = "niver.html";
    }
}
