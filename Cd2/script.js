document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;

    if (nama.trim() === "") {
      alert("Semua data harus diisi");
      return;
    }

    if (email.trim() === "") {
      alert("Email harus diisi");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Email tidak valid");
      return;
    }

    if (alamat.trim() === "") {
      alert("Alamat harus diisi");
      return;
    }

    alert("Form berhasil disubmit!");
    this.reset();
  });

function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
