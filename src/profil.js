const form = document.getElementById('form');
const formtombol = document.getElementById('simpan');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("aa")
    const data = new FormData(form);
    fetch('/form', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    if(document.getElementById("email").value.trim()!=("")){
        localStorage.setItem('email',document.getElementById("email").value)
    }
    if(document.getElementById("name").value.trim()!=("")){
        localStorage.setItem('nama',document.getElementById("name").value)
    }
    if(document.getElementById("birthdate").value.trim()!=("")){
        localStorage.setItem('tanggallahir',document.getElementById("birthdate").value)
    }
    alert("Pengubahan berhasil")
    window.location.reload(true)
  });
function fetchmain(){
    var a=localStorage.getItem('email')
    var b=localStorage.getItem('nama')
    var c=localStorage.getItem('tanggallahir')
    document.getElementById('namaisi').innerHTML=b
    document.getElementById('emailisi').innerHTML=a
    document.getElementById('lahirisi').innerHTML=c
}
fetchmain();
function icon(){
  var isi=parseInt(localStorage.getItem("isiKeranjang"))
  if(isi==0){
    document.getElementById("icon").classList.add("hidden")
  }
  else{
    document.getElementById("icon").innerHTML=isi;
    document.getElementById("icon").classList.remove("hidden")
  }
}
icon();
  
