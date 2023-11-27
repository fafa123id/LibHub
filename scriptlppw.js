document.getElementById('email').value=""

const pwbaru = document.getElementById('pwbaru')
const cekpwbaru = document.getElementById('pwbarukonfirm')
const emailterkirim = document.getElementById('emailkirim')
setInterval(() => {
    emailterkirim.innerHTML=document.getElementById('email').value
    console.log(document.getElementById('email').value)
}, 100);
const detikan=document.getElementById('p');
const mengsuksesf = document.getElementById('mengsuksesff');
var detik=0;
menit()
function menit(){
    setInterval(() => {
        if(detik>=0){
        detikan.innerHTML=detik;
        detik--
        }
        else{
        detikan.classList.add('hidden')
        mengsuksesf.classList.remove('hidden')
        }
    }, 1000);
}
function resetMenu(){
    detik=3;
    setTimeout(function(){
    alert("kode verifikasi telah terkirim")
    detikan.classList.remove('hidden')
    mengsuksesf.classList.add('hidden')
    }, 100);
}
function kliksubmit(){
    alert("Password terganti")
    window.location.reload(true);
}
     
const isicaptcha = document.getElementById('isicaptcha')
function backdulu(){
    
    isicaptcha.classList.remove('munculalus')
    isicaptcha.classList.add('ilangalus')
    setTimeout(function() {
        captchakun.classList.add('hidden')
        refreshCaptcha();
        captchaElementInput.value = ''
    },500);
}
function active(){
    
    isicaptcha.classList.add('munculalus')
    isicaptcha.classList.remove('ilangalus')
    
    if(uwah.classList.contains("bg-red-500")){
    captchakun.classList.remove('hidden');
    }
    else
    alert("Kamu sudah mengisi captcha!");
    
}
var message = document.getElementById('message');
message.style.display="none"
function muter(){
    const memutar = document.getElementById('memutar')
    memutar.classList.add('animate-spin')
    setTimeout(function() {
        memutar.classList.remove('animate-spin')
    },500);
}
const putar = document.getElementById('putar')
const captchakun = document.getElementById('captchakun')
var captchaElementInput = document.getElementById('captchainput')
const refresh = document.getElementById('memutar')
refresh.addEventListener('click',function(){
    setTimeout(function() {
        refreshCaptcha();
    },500);
})
function refreshCaptcha() {
        var captchaElement = document.getElementById('captchabox');
        var newCaptcha = generateRandomCaptcha();
        captchaElement.innerText = generateRandomCaptcha();
    }

    function generateRandomCaptcha() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var captcha = '';

        for (var i = 0; i < 6; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters.charAt(randomIndex);
        }

        return captcha;
    }
refreshCaptcha();

function cekcaptcha(){
    message.classList.add('bg-white')
    message.classList.remove('menghilang')
    message.classList.add('opacitykan')
    var captchaElementInput = document.getElementById('captchainput').value;
    var captchaElement = document.getElementById('captchabox');
    
    if(captchaElementInput==captchaElement.innerText.trim()){
        
        message.innerText="Captcha benar"
        message.classList.add('bg-green-600')
        message.style.display="block"
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.classList.remove('bg-green-600')
        message.style.display="none"
        uwah.classList.remove('bg-red-500')
        uwah.classList.add('active')
        captchakun.classList.add('hidden')
        },1500);
    }
    else if(captchaElementInput.trim()==''||captchaElementInput=='Masukkan di sini!'){
        message.innerText="Jangan dikosongkan"
        message.style.display="block"
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.style.display="none"
        },1500);
    }
    else{
        message.innerText="Masukkan yang benar!"
        message.classList.add('bg-red-400')
        message.style.display="block"
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.style.display="none"
        message.classList.remove('bg-red-400')
        },1500);
    }
}
const formb = document.getElementById('fff-form');
formb.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('/login', {
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
    if(pwbaru.value==cekpwbaru.value){
        alert("PW Terganti")
        window.location.href='login.html';
    }
    else{
        alert("Password Ga Sama")
    }
});
const gantikanf = document.getElementById('gantikanf');
const forma = document.getElementById('ff-form');
forma.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('/login', {
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
    gantikanf.classList.remove('hidden');
    gantikan.classList.add('hidden');
});
const gantikan = document.getElementById('gantikan');
const cek = document.getElementById('cek');
const form = document.getElementById('login-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('/login', {
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
    if(uwah.classList.contains("bg-red-500")){
        alert("ISI CAPTCHA NYA MASBRO!!")
    }
    else{
        cek.classList.add('hidden');
        gantikan.classList.remove('hidden');
    }
});
function klikds(){
    putar.classList.add('kebawah')
    putar.classList.remove('hidden')
    setTimeout(function()  {
        putar.classList.remove('kebawah')
        putar.classList.add('animate-spin')
    }, 200);
    setTimeout(function()  {
        document.getElementById('email').value=""
        window.location.href='register.html';
    }, 1000);
}
