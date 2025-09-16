let arrayFrutas = [];

function adicionarFruta() {
    let listaHTML = document.getElementById("listaFrutas");
    let inputValue = document.getElementById("frutaInput").value;

    if (arrayFrutas.includes(inputValue)) {
        alert("Essa fruta já foi adicionada.");

    } else if (inputValue == "") {
        alert("Digite uma fruta.")
    } else {
        arrayFrutas.push(inputValue);

        listaHTML.innerHTML = ""; // limpa os li que serão recriados com o for
        for (let fruta of arrayFrutas) {
            let item = document.createElement("li");
            item.textContent = fruta;
            listaHTML.appendChild(item);
        }
    }

    document.getElementById("frutaInput").value = "";
    document.getElementById("frutaInput").focus();
}

btnAdicionar.onkeydown = e => {
    if (e.key === "Tab") {
        e.preventDefault();
        frutaInput.focus();
    }
};