
let users = [];

const masuk = confirm("Selamat Datang Di Portofolio Saya");
if (masuk){
    const name = prompt("Siapa Nama Anda?");
    alert(`Hello ${name}`);
} else {
    alert("Bye Bye");
} 


function showabout() {
 window.location.href = "about.html"
};

function showporto(){
  window.location.href= "halaman.html"
}

