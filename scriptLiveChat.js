
const buttonya = document.getElementById('buttonya')
const tambahelemen = document.getElementById('spanchat');
var scrollContainer = document.getElementById('chatcontent');
var autoTengah = document.getElementById('containerpesan');

function clicktemp(button){
    const id = document.getElementById(button.id)
    
    var elemenBaru = document.createElement("span");
      elemenBaru.className = "bg-black text-white w-fit maxw2 p-4 rounded-3xl self-end";
      var teksElemenBaru = document.createTextNode(id.textContent);
      elemenBaru.appendChild(teksElemenBaru)
      tambahelemen.appendChild(elemenBaru);
      buttonya.classList.add('hidden');
      scrollContainer.scrollTop=scrollContainer.scrollHeight
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var isiText = (button.id=="buttA")?"Denda per hari: [Rp. 5000], Denda pelanggaran: [Rp. 500], Total yang harus dibayarkan / hari: [Rp. 5500]":
                      (button.id=="buttB")?"Kalau menghilangkan, mengganti sepenuhnya, kalau rusak membayar denda sesuai kondisi cacat buku":
                      (button.id=="buttC")?"Akan dialihkan ke menu reservasi, User akan mendapatkan notif ketika stok buku sudah tersedia":
                      (button.id=="buttD")?"Pengguna hanya boleh meminjam 1 buku dalam satu waktu":
                      (button.id=="buttE")?"Tunggu ya, menghubungkan mu dengan CS...":"";
        var teksElemenBaru = document.createTextNode(isiText);
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);
        scrollContainer.scrollTop=scrollContainer.scrollHeight
        if(button.id!="buttE"){
            buttonya.classList.remove('hidden');
        }
        else{
            function getRandomInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var randomValue = getRandomInteger(1, 5);
            var isiText = (randomValue==1)?"Dani":
                              (randomValue==2)?"Riady":
                              (randomValue==3)?"Seno":
                              (randomValue==4)?"Arpan":
                              (randomValue==5)?"Zidan":"";
            setTimeout(() => {
                var elemenBaru = document.createElement("span");
                elemenBaru.className = "bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start";
                
                var teksElemenBaru = document.createTextNode("Kamu terhubung dengan CS a.n Kak "+isiText);
                elemenBaru.appendChild(teksElemenBaru)
                tambahelemen.appendChild(elemenBaru);
                scrollContainer.scrollTop=scrollContainer.scrollHeight
            }, 500);
            setTimeout(() => {
                var elemenBaru = document.createElement("span");
                elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
                var teksElemenBaru = document.createTextNode("Halo dengan "+isiText+" disini, Ada yang bisa saya bantu?");
                elemenBaru.appendChild(teksElemenBaru)
                tambahelemen.appendChild(elemenBaru);
                scrollContainer.scrollTop=scrollContainer.scrollHeight
                classlive.classList.remove('hidden')
                classpesan.classList.remove('hidden')
            }, 500);
        }
        scrollContainer.scrollTop=scrollContainer.scrollHeight
    }, 500);
}
const classlive=document.getElementById('classlive')
const classpesan=document.getElementById('classpesan')
const texta=document.getElementById('texta')


function kirimpesan(){
    if(texta.value.trim()!=""){
    var elemenBaru = document.createElement("span");
    elemenBaru.className = "bg-green-600 text-white w-fit maxw2 p-4 rounded-3xl self-end";
     var teksElemenBaru = document.createTextNode(texta.value);
    elemenBaru.appendChild(teksElemenBaru)
    tambahelemen.appendChild(elemenBaru);
    scrollContainer.scrollTop=scrollContainer.scrollHeight
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode(". . .");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);  
        scrollContainer.scrollTop=scrollContainer.scrollHeight  
    }, 200);
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode("Ini adalah Jawaban");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);   
        scrollContainer.scrollTop=scrollContainer.scrollHeight 
    }, 500);
    texta.value="" 
    }
    
    
}
const login = document.getElementById("log")
var isLogin=localStorage.getItem("login")

function cekLogin(){
 
    if(isLogin=="true"){
      console.log(isLogin);
      document.getElementById("profil").classList.remove("hidden")
      document.getElementById("belum").classList.add("hidden")
      document.getElementById("sudah").classList.remove("hidden")
      login.classList.add("hidden")
      
    }
    else{
      console.log(isLogin);
      document.getElementById("profil").classList.add("hidden")
      login.classList.remove("hidden")
    }
  }
  cekLogin()
function keluarlive(){
    var elemenBaru = document.createElement("span");
    elemenBaru.className = "bg-green-600 text-white w-fit maxw2 p-4 rounded-3xl self-end";
    var teksElemenBaru = document.createTextNode("Keluar dari Live Chat");
    elemenBaru.appendChild(teksElemenBaru)
    tambahelemen.appendChild(elemenBaru);
    scrollContainer.scrollTop=scrollContainer.scrollHeight
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode("Terima kasih telah menggunakan layanan Live Chat");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru); 
        scrollContainer.scrollTop=scrollContainer.scrollHeight
    }, 400);
    setTimeout(() => {
        buttonya.classList.remove('hidden');
        classlive.classList.add('hidden')
        classpesan.classList.add('hidden')
        scrollContainer.scrollTop=scrollContainer.scrollHeight
    }, 500);
    
}
function wowilang(){
    aa.classList.remove('show')
    aa.classList.remove('maju')
    setTimeout(() => {
        texta.value=""
        tambahelemen.innerHTML=""
      }, 500);
}
  const aa = document.querySelector('.containerpesan')
  function wow(){
    tambahelemen.innerHTML=`<span class=" bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start">
    Ada yang bisa saya bantu?
    </span>`
    classlive.classList.add('hidden')
    classpesan.classList.add('hidden')
    buttonya.classList.remove('hidden');
    aa.classList.toggle('maju')
    autoTengah.scrollTop=autoTengah.scrollHeight/6;
      setTimeout(() => {
        aa.classList.toggle('show')
      }, 0);
  }
  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('[data-accordion-target]');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-accordion-target');
            const targetElement = document.querySelector(targetId);

            // Toggle the visibility of the target element
            targetElement.classList.toggle('hidden');
        });
    });
});
function logout(){
    localStorage.setItem("login",false); 
    window.location.href="index.html";
  }
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