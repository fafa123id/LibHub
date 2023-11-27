var contohDiv = document.getElementById("contohDiv");
document.getElementById('email').value=""
document.getElementById('password').value=""
document.getElementById('name').value=""

// Menambahkan event listener untuk mendeteksi perubahan ukuran window
window.addEventListener("resize", function() {
    // Mendapatkan lebar dan tinggi window saat ini
    var lebarWindow = window.innerWidth;
    var tinggiWindow = window.innerHeight;
    
    // Menampilkan informasi ukuran window pada elemen div
   console.log(lebarWindow)
   contoh.style.transform+="translatey(20px)"
});
const contoh = document.getElementById('pk')

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
function muter(){
  const memutar = document.getElementById('memutar')
  memutar.classList.add('animate-spin')
  setTimeout(function() {
      memutar.classList.remove('animate-spin')
  },500);
}
var message = document.getElementById('message');
message.style.display="none"
function active(){
    
  isicaptcha.classList.add('munculalus')
  isicaptcha.classList.remove('ilangalus')
  
  if(uwah.classList.contains("bg-red-500")){
  captchakun.classList.remove('hidden');
  }
  else
  alert("Kamu sudah mengisi captcha!");
  
}
const uwah = document.getElementById('uwah')
const captchakun = document.getElementById('captchakun')
var captchaElementInput = document.getElementById('captchainput')
var a = document.getElementById("gerakmang")
    var x = document.getElementById("snk")
    var duar = document.getElementById("duar")
    const form = document.getElementById('register-form');
    const berhasil=document.getElementById('berhasil')
    const mode = document.getElementById('wow')
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const data = new FormData(form);
      fetch('/register', {
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
        berhasil.classList.remove('hidden')
        const ok = document.getElementById('ok')
        }
    });
    
    ok.addEventListener('click',function(){
      ilangdonk();
    });
    const email = document.getElementById('email')
    
    function centang(){
      var checkbox = document.getElementById("check");
      checkbox.checked=true;
    }
    function animasikan(){
      if(a.classList.contains('kokjauh')){
        a.removeEventListener('animationend',dump)
        a.classList.remove('kokjauh')
      }
      a.classList.add('animated-element');
      
    }
    
    function kliksnk(){
      x.removeEventListener('animationend',wadidaw);
      
      
      mode.classList.remove('hidden')
      x.classList.add('kiri')
      duar.addEventListener('click',kanankh)
    }
    function kliksa(){
      putar.classList.add('kebawah')
      putar.classList.remove('hidden')
      setTimeout(function()  {
          putar.classList.remove('kebawah')
          putar.classList.add('animate-spin')
      }, 200);
      setTimeout(function()  {
        document.getElementById('email').value=""
        document.getElementById('password').value=""
        document.getElementById('name').value=""
          window.location.href='login.html';
      }, 1000);
  }
    function kanankh(){
      x.classList.remove('kiri');
      x.classList.add('kanan')
      x.addEventListener('animationend',wadidaw);
    }
    function wadidaw(){
      mode.classList.add('hidden')
      centang();
      x.classList.remove('kanan')
    }
    function Batalcentang(){
      var checkbox = document.getElementById("check");
      checkbox.checked=false;
    }
    function setelahIlangdonkSelesai() {
    berhasil.classList.add('hidden');
    setTimeout(function() {
      document.getElementById('regis2').classList.remove('hidden')
    }, 500);
    }
    function ilangdonk(){
      a.classList.remove('animated-element');
      a.classList.add('kokjauh')
      if(a.classList.contains('kokjauh')&&!a.classList.contains('animated-element'))
      a.addEventListener('animationend', dump);
    }
    function dump(){
      a.style.visibility = 'visible';
      a.style.display = 'block';
      setelahIlangdonkSelesai();
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
        captchaElementInput.value=''
        refreshCaptcha();
        },1500);
    }
    else if(captchaElementInput.trim()==''||captchaElementInput=='Masukkan di sini!'){
        message.innerText="Jangan dikosongkan"
        message.style.display="block"
        refreshCaptcha();
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.style.display="none"
        },1500);
    }
    else{
        refreshCaptcha();
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


var ab= document.getElementById("gerakmang2")
    const form2 = document.getElementById('register-form2');
    const berhasilah=document.getElementById('berhasilah')
    var nik = document.getElementById('nik');
    var nohp = document.getElementById('nohp');
    const okf = document.getElementById('okf')
    form2.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const data = new FormData(form2);
      fetch('/register', {
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
      if(isNaN(nik.value)||isNaN(nohp.value)){
        alert("NIK / Nomor Hp harus angka saja ya!")
      }
    else{
        if(nik.value.toString().length!=16){
          alert("NIK harus 16 digit")
        }
        else if(nohp.value.toString().length<10){
          alert("Nomor hp minimal 10 digit")
        }
        else{
          animasikan2();
          berhasilah.classList.remove('hidden')

        }
        
    }
    
     
        
        
     
    });
    okf.addEventListener('click',function(){
      ilangdonk2();
    }); 
    

    function animasikan2(){
      if(ab.classList.contains('kokjauh')){
        ab.removeEventListener('animationend',dump2)
        ab.classList.remove('kokjauh')
      }
      ab.classList.add('animated-element');
      
    }
    function setelahIlangdonkSelesai2() {
      berhasilah.classList.add('hidden');
      window.location.reload(true);
      window.location.href='index.html';
    }
    function ilangdonk2(){
      ab.classList.remove('animated-element');
      ab.classList.add('kokjauh')
      if(ab.classList.contains('kokjauh')&&!ab.classList.contains('animated-element'))
      ab.addEventListener('animationend', dump2);
    }
    function dump2(){
      ab.style.visibility = 'visible';
      ab.style.display = 'block';
      setelahIlangdonkSelesai2();
    }