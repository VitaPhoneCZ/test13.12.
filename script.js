const uctenka = [];
const cena = [];
const seznam = [];

document.getElementById("celkem-cena").innerHTML = "Cena celkem: 0 Kč";

function vypis(array, output) {
    const outputElement = document.getElementById(output);
    outputElement.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        outputElement.innerHTML += (i + 1) + ". " + array[i] + "<br>";
    }
}

function doUctenky() {
    const nazevVeci = document.getElementById("prid-neco").value;
    const cenaVeci = parseFloat(document.getElementById("priv-cena").value);

    if (nazevVeci && cenaVeci > 0) {
        uctenka.push(nazevVeci + " - " + cenaVeci + " Kč");
        cena.push(cenaVeci);
        vypis(uctenka, "uctenka");
        vypocCeny();
    } else {
        alert("Zadejte platný název a cenu věci.");
    }

    console.log("vypis do uctenky-----------------");
    console.log(nazevVeci);
    console.log(cenaVeci);
    console.log(uctenka);
    console.log(cena);
    console.log("vypis do uctenky-----------------");
}

function vysypUctenku() {
    uctenka.length = 0;
    cena.length = 0; 
    vypis(uctenka, "uctenka");
    document.getElementById("celkem-cena").innerHTML = "Cena celkem: 0 Kč";
    console.log("vysypani uctenky-----------------");
    console.log(uctenka);
    console.log(cena);
    console.log("vysypani uctenky-----------------");
}

function vypocCeny() {
    let celkovaCena = 0;
    for (let i = 0; i < cena.length; i++) {
        celkovaCena += cena[i];
    }
    document.getElementById("celkem-cena").innerHTML = "Cena celkem: " + celkovaCena + " Kč";
    console.log("vypocet ceny");
}
