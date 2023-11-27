document.getElementById('username').value=""
document.getElementById('password').value=""
const isicaptcha = document.getElementById('isicaptcha')
history.pushState(null, null, window.location.href);
function backdulu(){
    
    isicaptcha.classList.remove('munculalus')
    isicaptcha.classList.add('ilangalus')
    setTimeout(function() {
        captchakun.classList.add('hidden')
        refreshCaptcha();
        captchaElementInput.value = ''
    },500);
}
bener.style.display ="none"
const captchakun = document.getElementById('captchakun')
var captchaElementInput = document.getElementById('captchainput')

function muter(){
    const memutar = document.getElementById('memutar')
    memutar.classList.add('animate-spin')
    setTimeout(function() {
        memutar.classList.remove('animate-spin')
    },500);
}
var message = document.getElementById('message');
message.style.display="none"

salah.style.display ="none"
const uwah = document.getElementById('uwah')

function active(){
    
    isicaptcha.classList.add('munculalus')
    isicaptcha.classList.remove('ilangalus')
    
    if(uwah.classList.contains("bg-red-500")){
    captchakun.classList.remove('hidden');
    }
    else
    alert("Kamu sudah mengisi captcha!");
    
}
const login = document.getElementById('salah')
const benar = document.getElementById('bener')
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
    var datausn = document.getElementById("username").value
    var datapw=document.getElementById("password").value
    if(uwah.classList.contains("bg-red-500")){
        alert("ISI CAPTCHA NYA MASBRO!!")
    }
    else{
        if(datausn==("admin") && datapw==("admin123")){
            document.getElementById('username').value=""
            document.getElementById('password').value=""
            bener.style.display="block"
            localStorage.setItem("login",true);
            //Menyambungkan login berhasil disini tod
            setTimeout(function() {
                benar.classList.remove('opacitykan')
                benar.classList.add('menghilang')
            }, 1000);
            setTimeout(function() {
                bener.style.display ="none"
                benar.classList.remove('menghilang')
                benar.classList.add('opacitykan')
                window.location.href="index.html";
            }, 1200);
        }
        else{
            document.getElementById('username').value=""
            document.getElementById('password').value=""
            salah.style.display="block"
            uwah.classList.remove('active')
            uwah.classList.add('bg-red-500')
            refreshCaptcha();
            captchaElementInput.value = ''
            setTimeout(function() {
                login.classList.remove('opacitykan')
                login.classList.add('menghilang')
            }, 1000);
            setTimeout(function() {
                salah.style.display ="none"
                login.classList.remove('menghilang')
                login.classList.add('opacitykan')
            }, 1200);
        }
    }
    
});

function kliklp() {
    putar.classList.add('kebawah')
    putar.classList.remove('hidden')
    setTimeout(function()  {
        putar.classList.remove('kebawah')
        putar.classList.add('animate-spin')
    }, 200);
    setTimeout(function()  {
        document.getElementById('username').value=""
        document.getElementById('password').value=""
        window.location.href='lupapw.html';
    }, 1000);
    
}
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
const putar = document.getElementById('putar')
function klikds(){
    putar.classList.add('kebawah')
    putar.classList.remove('hidden')
    setTimeout(function()  {
        putar.classList.remove('kebawah')
        putar.classList.add('animate-spin')
    }, 200);
    setTimeout(function()  {
        document.getElementById('username').value=""
        document.getElementById('password').value=""
        window.location.href='register.html';
    }, 1000);
}