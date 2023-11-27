
const login = document.getElementById("log")
var isLogin=localStorage.getItem("login")
var isiKeranjang=localStorage.getItem("isiKeranjang")
var Keranjang=localStorage.getItem('arrayData')
//Kalau mau null in keranjang
// localStorage.setItem("isiKeranjang",0)
// var a = new Array(5);
// localStorage.setItem("arrayData",JSON.stringify(a))
var a=new Array(99)
var checkreserv= localStorage.getItem('reservasi')
var checksizeres= localStorage.getItem('sizeres')
var checksizepjm= localStorage.getItem('sudahpinjamsize')
var checkblk= localStorage.getItem('sudahpinjamblk')
var checktgl= localStorage.getItem('sudahpinjamtgl')
var checkisipjm= localStorage.getItem('sudahpinjamisi')
function fetchmain(){
  var a=localStorage.getItem('email')
  var b=localStorage.getItem('nama')
  var c=localStorage.getItem('tanggallahir')
  if(a==null){
      localStorage.setItem('email',"admin@gmail.com")
  }
  if(b==null){
      localStorage.setItem('nama',"admin")
  }
  if(c==null){
      localStorage.setItem('tanggallahir',"02/01/1999")
  }
}
fetchmain();
function checknullity(){
    if(checkreserv==null){
        localStorage.setItem('reservasi',JSON.stringify(a))
    }
    if(checksizeres==null){
        localStorage.setItem('sizeres',0)
    }
    if(checksizepjm==null){
        localStorage.setItem('sudahpinjamsize',0)
    }
    if(checkisipjm==null){
        localStorage.setItem('sudahpinjamisi',JSON.stringify(a))
    }
    if(checktgl==null){
        localStorage.setItem('sudahpinjamtgl',JSON.stringify(a))
    }
    if(checkblk==null){
        localStorage.setItem('sudahpinjamblk',JSON.stringify(a))
    }
}
checknullity();
function nullity(){
  var b=new Array(5)
  if(isiKeranjang==null){
    localStorage.setItem('isiKeranjang',0)
  }
  if(Keranjang==null){
    localStorage.setItem("arrayData",JSON.stringify(b))
  }
}
nullity();
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
icon()
console.log(isiKeranjang)
console.log(Keranjang)
const reg = document.getElementById("reg")
const blmlog = document.getElementById("blmlog")
function tambahReservasi(param){
  var mengisikeranjang = JSON.parse(localStorage.getItem('reservasi'));
  if(mengisikeranjang.includes(param)){
    alert("Buku Ini Sudah Anda Reservasi")
    return;
  }
  var isi=parseInt(localStorage.getItem("sizeres"))
    isi+=1;
    

  
  
  localStorage.setItem("sizeres",isi)
  
  mengisikeranjang[isi-1]=param
  localStorage.setItem("reservasi",JSON.stringify(mengisikeranjang))
  alert("Berhasil reservasi, Anda akan mendapat notifikasi email kalau buku sudah ada")
}
function tambahKeranjang(){
  if(isiKeranjang == null){
    localStorage.setItem("isiKeranjang",0)
    return;
  }
  if(Keranjang == null){
    console.log("masuk sini")
    var a = new Array(5);
    localStorage.setItem("arrayData",JSON.stringify(a))
    return;
  }
  var mengisikeranjang = JSON.parse(localStorage.getItem('arrayData'));
  console.log(event.target.id)
  if(mengisikeranjang.includes(event.target.id)){
    alert("Buku Ini Sudah Ada di Keranjang")
    return;
  }
  var isi=parseInt(localStorage.getItem("isiKeranjang"))
  if(isi==5){
    alert("Keranjang Sudah Penuh (Maks 5)")
    return;
  }
    isi+=1;
    

  
  
  localStorage.setItem("isiKeranjang",isi)
  
  mengisikeranjang[isi-1]=event.target.id
  localStorage.setItem("arrayData",JSON.stringify(mengisikeranjang))
  icon()
  alert("Buku Dimasukkan ke Keranjang")
}

function cekLogin(){
 
  if(isLogin=="true"){
    console.log(isLogin);
    document.getElementById("profil").classList.remove("hidden")
    login.classList.add("hidden")
    blmlog.classList.add("hidden")
  }
  else{
    console.log(isLogin);
    document.getElementById("profil").classList.add("hidden")
    login.classList.remove("hidden")
    blmlog.classList.remove("hidden")
  }
}
function logout(){
  localStorage.setItem("login",false); 
  window.location.href="index.html";
}
cekLogin()
const searchInput = document.getElementById("searchisi");
const genreSelect = document.getElementById("genre");
const year = document.getElementById("year");
const rating = document.getElementById("rating");
const resultContainer = document.getElementById("result");
    function populateSelect() {
      
    
      booksData.then(books => {
        // Mengumpulkan semua genre dari buku
        const allGenres = books.reduce((genres, book) => {
          if (book.genre && !genres.includes(book.genre)) {
            genres.push(book.genre);
          }
          return genres;
        }, []);
    
        // Menambahkan opsi default (semua genre)
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Semua Genre --';
        genreSelect.appendChild(defaultOption);
    
        // Menambahkan opsi untuk setiap genre
        allGenres.forEach(genre => {
          const option = document.createElement('option');
          option.value = genre.toLowerCase();
          option.textContent = genre;
          genreSelect.appendChild(option);
        });
      });
    }
    function ulas(param){
      document.getElementById('titlenya').innerHTML=param;
      document.getElementById('yakin').classList.remove('hidden')
    }
    function searchBook() {
        
        resultContainer.classList.remove('hidden')
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreSelect.value.toLowerCase();
        const selectedYear = year.value;
        const selectedRating = rating.value;
      
        // Filter data berdasarkan kriteria
        const filteredBooks = booksData.then(books => books.filter(book => {
          const matchesSearchTerm = !searchTerm || 
          book.name.toLowerCase().indexOf(searchTerm) !== -1 ||
          book.author.toLowerCase().indexOf(searchTerm) !== -1;


      
          const matchesGenre = selectedGenre === "" || book.genre.toLowerCase() === selectedGenre;
      
          const matchesYear = !selectedYear || (
            (selectedYear === "baru" && book.year === 2023) ||
            (selectedYear === "2015" && book.year >= 2015) ||
            (selectedYear === "2010" && book.year >= 2010) ||
            (selectedYear === "dibawah2010" && book.year < 2010)
          );
      
          const matchesRating = !selectedRating || (
            (selectedRating === "4" && book.rating >= 4.0) ||
            (selectedRating === "3" && book.rating >= 3.0) ||
            (selectedRating === "bawah3" && book.rating < 3.0)
          );
      
          return matchesSearchTerm &&  matchesGenre && matchesYear && matchesRating;
        }));
      
        // Tampilkan hasil pencarian
        filteredBooks.then(displayResults);
      }
  
    
    function displayResults(books) {
      resultContainer.innerHTML = "";
  
      if (books.length === 0) {
        resultContainer.innerHTML = `<p class="text-white font-semibold">Tidak ada hasil yang cocok</p>`;
        return;
      }
  
      books.forEach(book => {
        var stok = book.stok;
        const bookCard = document.createElement("div");
        bookCard.innerHTML =isLogin=="true"?stok==0? 
        //Jika sudah login tapi buku kosong
        `
           <div class="flex flex-row  border-none">
            <button id="all" onclick="menuBuku('${book.name}')" class="border-none transition-all scales relative gap-2 max-w-xl">
              <img src="${book.imageLink}" alt="${book.name}" class="h-auto object-cover rounded-lg shadow-md w-60 mb-2">
              <div class="w-full container bg-opacity-100 place-self-center">
                <div id="ttl" class="bg-black text-white rounded-lg p-1">
                  <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
                </div>
                <div id="komp" class="mt-2 bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
                  
                  <p class="text-gray-600">Penulis: ${book.author}</p>
                  <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
                </div>
                <div id="inf" class="flex flex-row justify-between text-white">
                    <div class="rounded-lg self-start w-full bg-blue-400">Rating: ${book.rating}</div>
                    <div class="rounded-lg self-end w-full bg-red-400">Stok: ${book.stok}</div>
                </div>
              </div>
             </button>
             <div class="flex flex-col place-self-center ml-2">
             <div class="bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
             <p class="text-gray-600">ISBN: ${book.isbn}</p>
             <p class="text-gray-600">Jumlah Halaman: ${book.halaman}</p>
             <p class="text-gray-600">Bahasa: ${book.bahasa}</p>
             </div>
             <button onclick="tambahReservasi('${book.name}')" class="bg-blue-400 h-fit place-self-center gap-2 p-2 rounded-2xl scales hover:bg-green-600">Reservasi Buku</button>
             </div>
           </div>
        `:
        //Jika sudah login tapi buku ada stoknya
        `
           <div class="flex flex-row  border-none">
            <button id="all" onclick="menuBuku('${book.name}')" class="border-none transition-all scales relative gap-2 max-w-xl">
              <img src="${book.imageLink}" alt="${book.name}" class="h-auto object-cover rounded-lg shadow-md w-60 mb-2">
              <div class="w-full container bg-opacity-100 place-self-center">
                <div id="ttl" class="bg-black text-white rounded-lg p-1">
                  <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
                </div>
                <div id="komp" class="mt-2 bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
                  
                  <p class="text-gray-600">Penulis: ${book.author}</p>
                  <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
                </div>
                <div id="inf" class="flex flex-row justify-between text-white">
                    <div class="rounded-lg self-start w-full bg-blue-400">Rating: ${book.rating}</div>
                    <div class="rounded-lg self-end w-full bg-green-400">Stok: ${book.stok}</div>
                </div>
              </div>
             </button>
             <div class="place-self-center ml-2 flex flex-col">
             <div class="bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
             <p class="text-gray-600">ISBN: ${book.isbn}</p>
             <p class="text-gray-600">Jumlah Halaman: ${book.halaman}</p>
             <p class="text-gray-600">Bahasa: ${book.bahasa}</p>
             </div>
             <button id="${book.name}" onclick="tambahKeranjang()" class="bg-blue-400 h-fit place-self-center gap-2 p-2 rounded-2xl scales hover:bg-green-600">Tambahkan ke Keranjang</button>
             </div>
           </div>
        `
        ://Jika blm login stok 0
        stok==0?
        `
           <div class="flex flex-row  border-none">
            <button id="all" onclick="menuBuku('${book.name}')" class="border-none transition-all scales relative gap-2 max-w-xl">
              <img src="${book.imageLink}" alt="${book.name}" class="h-auto object-cover rounded-lg shadow-md w-60 mb-2">
              <div class="w-full container bg-opacity-100 place-self-center">
                <div id="ttl" class="bg-black text-white rounded-lg p-1">
                  <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
                </div>
                <div id="komp" class="mt-2 bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
                  
                  <p class="text-gray-600">Penulis: ${book.author}</p>
                  <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
                </div>
                <div id="inf" class="flex flex-row justify-between text-white">
                    <div class="rounded-lg self-start w-full bg-blue-400">Rating: ${book.rating}</div>
                    <div class="rounded-lg self-end w-full bg-red-400">Stok: ${book.stok}</div>
                </div>
              </div>
             </button>
             <div class="flex flex-col place-self-center ml-2">
             <div class="bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
             <p class="text-gray-600">ISBN: ${book.isbn}</p>
             <p class="text-gray-600">Jumlah Halaman: ${book.halaman}</p>
             <p class="text-gray-600">Bahasa: ${book.bahasa}</p>
             
           </div>
        `
        : //blm login stok ada
        `
        <div class="flex flex-row  border-none">
         <button id="all" onclick="menuBuku('${book.name}')" class="border-none transition-all scales relative gap-2 max-w-xl">
           <img src="${book.imageLink}" alt="${book.name}" class="h-auto object-cover rounded-lg shadow-md w-60 mb-2">
           <div class="w-full container bg-opacity-100 place-self-center">
             <div id="ttl" class="bg-black text-white rounded-lg p-1">
               <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
             </div>
             <div id="komp" class="mt-2 bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
               
               <p class="text-gray-600">Penulis: ${book.author}</p>
               <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
             </div>
             <div id="inf" class="flex flex-row justify-between text-white">
                 <div class="rounded-lg self-start w-full bg-blue-400">Rating: ${book.rating}</div>
                 <div class="rounded-lg self-end w-full bg-green-400">Stok: ${book.stok}</div>
             </div>
           </div>
          </button>
          <div class="flex flex-col place-self-center ml-2">
          <div class="bg-white p-4 rounded-lg shadow-lg mb-2 h-fit w-full">
          <p class="text-gray-600">ISBN: ${book.isbn}</p>
          <p class="text-gray-600">Jumlah Halaman: ${book.halaman}</p>
          <p class="text-gray-600">Bahasa: ${book.bahasa}</p>
          
        </div>
     `
        ;
        resultContainer.appendChild(bookCard);
      });
    }
function  munculcari(){
  resultContainer.classList.add("hidden")
  populateSelect()
  pencarian.classList.remove("hidden")
}
const pencarian=document.getElementById("pencarian");
function hilangkan(){
  genreSelect.innerHTML="";
    searchInput.value=""
    year.value=""
    rating.value=""
    pencarian.classList.add("hidden")
}
pencarian.addEventListener("click",function(event){
  if (!event.target.closest('#filter')&&!event.target.closest('#cari')&&!event.target.closest('#result')) {
    hilangkan()
  }
  
})
function scrolling() {
  const scrollContainer = document.getElementById('bookScroll1');
  // Scroll ke kiri sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  
}

function scrollRight() {
  const scrollContainer = document.getElementById('bookScroll1');
  // Scroll ke kanan sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}
function scrolling2() {
  const scrollContainer = document.getElementById('bookScroll2');
  // Scroll ke kiri sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function scrollRight2() {
  const scrollContainer = document.getElementById('bookScroll2');
  // Scroll ke kanan sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}
const menu=document.getElementById("menu")
const menuContainer=document.getElementById("chatcontent")
const booksData = fetch("buku.json")

    .then(response => response.json())
    .then(data => data.books);
function p(){
  menu.classList.add("hidden")
}
function menuBuku(param){
  menu.classList.remove('hidden')
  
  const filteredBooks = booksData.then(books => books.filter(book => {
    const matchesSearchTerm = !param || 
      book.name.toLowerCase().includes(param.toLowerCase()) 
     ;
    return matchesSearchTerm;
    
  }));
  filteredBooks.then(displaymenus);
}

function displaymenus(books){
menuContainer.innerHTML=""
menuContainer.scrollTop=0;

  books.forEach(book => {
    var stok = book.stok;
    const bookCard = document.createElement("div");
    bookCard.innerHTML =isLogin=="true"?stok==0?
    //Jika stok buku kosong dan sudah login
    `
    <div id="menu" class="w-full flex flex-row gap-2 border-none group overflow-auto">
    <div id="${book.name}" class="max border-none place-self-center text-black flex flex-col">
    <img src="${book.imageLink}" alt="${book.name}" class=" max h-auto object-cover rounded-lg shadow-md ">
    <h3 class="font-semibold flex text-xl text-center justify-center">${book.name}</h3>
    <h3 class="font-semibold flex text-xl text-center justify-center">Stok Buku: ${book.stok}</h3>
    <h3 class="font-semibold flex text-xl text-center justify-center">Rating: ${book.rating}</h3>
    <button onclick="tambahReservasi('${book.name}')" class="place-items-center bg-blue-600 p-2 rounded-2xl scales hover:bg-green-800 transition-all mb-2">Reservasi Buku</button>
    <button onclick="ulas('${book.name}')" class="place-items-center bg-blue-600 p-2 rounded-2xl scales hover:bg-green-800 transition-all">Ulas Buku</button>
    </div>
    <div class="bg-black p-4 rounded-lg shadow-lg h-auto">

    <p class="text-white text-lg">Penulis: ${book.author}</p>
    <p class="text-white text-lg">Tahun Terbit: ${book.year}</p>
    <p class="text-white text-lg">Penerbit: ${book.publisher}</p>
    <p class="text-white text-lg">Genre: ${book.genre}</p>
    <p class="text-white text-lg">Jumlah halaman: ${book.halaman}</p>
    <p class="text-white text-lg">Bahasa: ${book.bahasa}</p>
    <p class="text-white text-lg">ISBN: ${book.isbn}</p>
    <p class="text-white text-lg">Deskripsi:</p>
    <p class="text-white text-lg">${book.description}</p>
  </div>
    
  </div>
    `:
    //Jika stok ga kosong dan sudah login
    `<div id="menu" class="w-full flex flex-row gap-2 border-none group overflow-auto">
    <div id="${book.name}" class="max border-none place-self-center text-black flex flex-col">
    <img src="${book.imageLink}" alt="${book.name}" class=" max h-auto object-cover rounded-lg shadow-md ">
    <h3 class="font-semibold flex text-xl text-center justify-center">${book.name}</h3>
    <h3 class="font-semibold flex text-xl text-center justify-center">Stok Buku: ${book.stok}</h3>
    <h3 class="font-semibold flex text-xl text-center justify-center">Rating: ${book.rating}</h3>
    <button id="${book.name}" onclick="tambahKeranjang()" class="place-items-center bg-blue-600 p-2 rounded-2xl scales hover:bg-green-800 transition-all mb-2">Tambah Ke Keranjang</button>
    <button onclick="ulas('${book.name}')" class="place-items-center bg-blue-600 p-2 rounded-2xl scales hover:bg-green-800 transition-all">Ulas Buku</button>
    </div>
    <div class="bg-black p-4 rounded-lg shadow-lg h-auto">

    <p class="text-white text-lg">Penulis: ${book.author}</p>
    <p class="text-white text-lg">Tahun Terbit: ${book.year}</p>
    <p class="text-white text-lg">Penerbit: ${book.publisher}</p>
    <p class="text-white text-lg">Genre: ${book.genre}</p>
    <p class="text-white text-lg">Jumlah halaman: ${book.halaman}</p>
    <p class="text-white text-lg">Bahasa: ${book.bahasa}</p>
    <p class="text-white text-lg">ISBN: ${book.isbn}</p>
    <p class="text-white text-lg">Deskripsi:</p>
    <p class="text-white text-lg">${book.description}</p>
  </div>
    
  </div>`
  //jika belum login
  :` <div class="w-full flex flex-col border-none group overflow-auto">
    <div id="${book.name}"  class="border-none max-w-xs place-self-center">
    <img src="${book.imageLink}" alt="${book.name}" class="w-full h-auto object-cover rounded-lg shadow-md ">
    </div>
    <div class="mt-2 bg-black p-4 rounded-lg shadow-lg ">
    <h3 class="font-semibold text-center justify-center items-center flex text-xl">${book.name}</h3>
    <p class="text-white text-lg">Penulis: ${book.author}</p>
    <p class="text-white text-lg">Tahun Terbit: ${book.year}</p>
    <p class="text-white text-lg">Penerbit: ${book.publisher}</p>
    <p class="text-white text-lg">Genre: ${book.genre}</p>
    <p class="text-white text-lg text-justify">Rating: ${book.rating}</p>
    <p class="text-white text-lg">Jumlah halaman: ${book.halaman}</p>
    <p class="text-white text-lg">Bahasa: ${book.bahasa}</p>
    <p class="text-white text-lg">ISBN: ${book.isbn}</p>
    <p class="text-white text-lg">Stok: ${book.stok}</p>
    <p class="text-white text-lg">Deskripsi:</p>
    <p class="text-white text-lg">${book.description}</p>
    <h3 class="font-semibold text-center justify-center items-center flex text-xl">Ingin meminjam buku? <a href="register.html" class="text-blue-400 hover:underline">Daftar Sekarang</a> </h3>
  </div>
    
  </div>`;
    menuContainer.append(bookCard);
  });
}
function display(books){
  const booksContainer = document.getElementById('bookScroll1');
  books.forEach(book => {
    const bookCard = `
    <div class="flex-none w-60 border-none group ">
    <button id="${book.name}" onclick="menuBuku('${book.name}')" class="border-none transition-all scales">
    <img src="${book.imageLink}" alt="${book.name}" class="w-full h-auto object-cover rounded-lg shadow-md ">
    
    <div class="mt-2 bg-white p-4 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
      <p class="text-gray-600">Penulis: ${book.author}</p>
      <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
    </div>
    </button>
   
    
  </div>
    `;
    booksContainer.innerHTML += bookCard;
  });
}
menubuku1()
menubuku2()
function menubuku1(){
  booksData.then(books => {
    // Lakukan shuffle pada array buku
    shuffleArray(books);

    // Ambil 5 buku pertama setelah diacak
    const randomBooks = books.slice(0, 8);

    // Tampilkan hasil
    display(randomBooks);
  });
}
function menubuku2(){
  var date=new Date();
  const filteredBooks = booksData.then(books => books.filter(book => {
    const matchesSearchTerm = 
      (book.year==2023) 
     ;
    return matchesSearchTerm;
    
  }));
  filteredBooks.then(function(books){
    const booksContainer = document.getElementById('bookScroll2');
    books.forEach(book => {
      const bookCard = `
      <div class="flex-none w-60 border-none group">
      <button id="${book.name}" onclick="menuBuku('${book.name}')" class="border-none transition-all scales">
      <img src="${book.imageLink}" alt="${book.name}" class="w-full h-auto object-cover rounded-lg shadow-md ">
      
      <div class="mt-2 bg-white p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
        <p class="text-gray-600">Penulis: ${book.author}</p>
        <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
      </div>
      </button>
     
      
    </div>
      `;
      booksContainer.innerHTML += bookCard;
    });
  });
}
document.getElementById('rev').addEventListener('submit',function(e){
  e.preventDefault();
  alert("Berhasil memberi ulasan")
  document.getElementById('rate').value=""
  document.getElementById('review').value=""
  document.getElementById('yakin').classList.add("hidden")
})

  
            
  // main.js

    // Ambil data buku dari JSON

  
    // Ambil elemen HTML
    
  
    // Fungsi untuk mencari buku berdasarkan filter
    
    
    // Panggil fungsi pencarian saat tombol di klik

  