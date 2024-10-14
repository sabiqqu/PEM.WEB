let display = document.getElementById("result");

function appendToDisplay(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;

    // Menangani operasi pangkat (^)
    expression = expression.replace(/(\d+)\^(\d+)/g, "Math.pow($1, $2)");

    // Menangani operasi modulus (%)
    expression = expression.replace(/(\d+)%(\d+)/g, "$1 % $2");

    let result = eval(expression); 

    // Memeriksa apakah hasil adalah angka yang valid
    if (isNaN(result) || !isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1); // Menghapus karakter terakhir
}
