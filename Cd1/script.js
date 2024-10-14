function hitung() {
  const bil1 = parseFloat(document.getElementById("bil1").value);
  const bil2 = parseFloat(document.getElementById("bil2").value);

  if (isNaN(bil1) || isNaN(bil2)) {
    alert("Mohon masukkan angka yang valid");
    return;
  }

  const hasil = bil1 + bil2;
  document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}

function reset() {
  document.getElementById("bil1").value = "";
  document.getElementById("bil2").value = "";
  document.getElementById("hasil").textContent = "Hasil: ";
}
