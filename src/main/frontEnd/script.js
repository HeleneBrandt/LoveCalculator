function calculateLove() {
    let yName = document.getElementById("yName").value.trim();
    let sName = document.getElementById("sName").value.trim();

    if (yName === "" || sName === "") {
        document.getElementById("display").innerText = "Skriv inn begge navn!";
        return;
    }

    let loveScore = Math.floor(Math.random() * 100) + 1; // Genererer tall mellom 1 og 100

    // Oppdaterer kalkulatorens display med kjærlighetsscore
    document.getElementById("display").innerText = `❤️ ${loveScore}% ❤️`;

    // Valgfri konsollutskrift
    if (loveScore > 70) {
        console.log("Dere elsker hverandre som Kanye elsker Kanye! 😍");
    } else if (loveScore > 30) {
        console.log("Det kan gå! 💕");
    } else {
        console.log("Dere passer som olje og vann... 🥲");
    }
}
