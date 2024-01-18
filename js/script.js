function calculate() {
    // Get input value
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    // Validate input
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Sila masukkan nombor positif yang sah untuk panjang sisi.");
        return;
    }

    // Calculate luas and keliling
    var luas = sideLength * sideLength;
    var keliling = 4 * sideLength;

    // Display results
    document.getElementById("luasResult").innerText = luas.toFixed(2);
    document.getElementById("kelilingResult").innerText = keliling.toFixed(2);
}

function resetForm() {
    // Reset input and results
    document.getElementById("sideLength").value = "";
    document.getElementById("luasResult").innerText = "-";
    document.getElementById("kelilingResult").innerText = "";
}
