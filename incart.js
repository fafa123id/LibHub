var judul=""
var sedangpinjam=localStorage.getItem('sedangpinjam');
var isiKeranjang=localStorage.getItem("isiKeranjang");
const booksData = fetch("buku.json")

    .then(response => response.json())
    .then(data => data.books);
const Keranjang=localStorage.getItem('arrayData');
function deleteArr(arr, targetString) {
    var index = arr.indexOf(targetString);
  
  // Jika string target ditemukan, geser elemen ke depan
  if (index !== -1) {
    for (var i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = null; // Mengosongkan elemen terakhir
  }
  
  return arr;
  }
  console.log(isiKeranjang);
  
  fetching()
  
  function fetching(){
    const cart=document.querySelector("#isi");
    var tampil=JSON.parse(localStorage.getItem('arrayData'));
    const a=document.createElement("span");
    a.innerHTML=`<span class="text-gray-600">(${isiKeranjang} items)</span>`
    cart.append(a)
    if(isiKeranjang==0){
        document.querySelector("#detilbuku").innerHTML="Belum ada Buku"
        document.querySelector("#konfirm").classList.add("hidden")
    }
    else{
        document.querySelector("#detilbuku").innerHTML=""
        document.querySelector("#konfirm").classList.remove("hidden")
    }
    for (let i =0;i<isiKeranjang;i++){
        
    const filteredBooks = booksData.then(books => books.filter(book => {
        const matchesSearchTerm = !tampil[i] || 
          book.name.toLowerCase().includes(tampil[i].toLowerCase()) 
         ;
        return matchesSearchTerm;
        
      }));
      filteredBooks.then(displays);
    }
  }
  function hapusCart(param){
    var tampil=JSON.parse(localStorage.getItem('arrayData'));
    console.log(param)
    tampil=deleteArr(tampil,param)
    localStorage.setItem("isiKeranjang",localStorage.getItem("isiKeranjang")-1);
     // Membersihkan nilai null dari array
  tampil = tampil.filter(item => item !== null);
  
  // Mengisi array dengan null hingga panjangnya kembali menjadi 10
  while (tampil.length < 5) {
    tampil.push(null);
  }
    localStorage.setItem('arrayData',JSON.stringify(tampil))
    window.location.reload(true);
  }
  function ganti(param){
    judul = param;
    
  }
  function displays(books){
    books.forEach(book => {
        const mengisi=document.createElement("div")
        mengisi.innerHTML=`<div class="p-4 flex items-center border-b">
        <!-- Gambar Buku -->
        <img class="h-16 w-16 object-contain rounded-lg mr-4" src="${book.imageLink}" alt="Product">
  
        <!-- Detail Buku -->
        <div class="flex-1">
            <h2 class="text-lg font-bold">${book.name}</h2>
            <p class="text-gray-600">Deskripsi singkat buku.</p>
            <div class="flex items-center mt-2">
                <span class="text-gray-600">Rating: ${book.rating}</span>
                <span class="ml-4 text-gray-600">Stok: ${book.stok}</span>
            </div>
        </div>
  
        <!-- Tombol Checkbox dan Hapus -->
        <div class="flex flex-col items-end">
            <input onclick="ganti('${book.name}')" name="group" id="${book.name}" type="radio" class="text-gray-600 mb-2">
            <button onclick="hapusCart('${book.name}')" class="text-gray-600 hover:text-red-500">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z" />
                </svg>
            </button>
        </div>
    </div>`
    document.querySelector("#detilbuku").append(mengisi)
    });
  }
  function toggleAlamatForm(show) {
    const alamatForm = document.getElementById('alamat');
    alamatForm.style.display = show ? 'flex' : 'none';
  }
  toggleAlamatForm(false)
  var alamat=false;
  const form=document.querySelector("#form");
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('./cart.html', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    checkAlamat();
    
  });
  function checkAlamat(){
    var check=(document.getElementById("addresstext").value)
    if(alamat==true){
        if (check.trim()==("")){
            alert("Isi alamat dulu")
            return;
        }
    }
    localStorage.setItem('sedangpinjam',judul)
    localStorage.setItem('tglpinjam',document.getElementById("borrowingDate").value)
    localStorage.setItem('tglbalik',document.getElementById("returningDate").value)
    hapusCart(judul)
    alert("Konfirmasi peminjaman berhasil")
  }
  function konfirmasikan(){
    if(judul.trim()==("")){
        alert("Pilih buku dahulu!")
        return
    }
    if(sedangpinjam==null){
        menampilkan(judul);
        document.getElementById("konfirmkan").classList.remove("hidden")
        return
    }
    alert("Kamu punya buku yang sedang dipinjam, Selesaikan dulu peminjaman")
  }
  function menampilkan(param){
    const filteredBooks = booksData.then(books => books.filter(book => {
        const matchesSearchTerm = !param || 
          book.name.toLowerCase().includes(param.toLowerCase()) 
         ;
        return matchesSearchTerm;
        
      }));
      filteredBooks.then(konfirmasi);
}
  function stok(param){
    const bintang1=document.getElementById("bintang1")
    const bintang2=document.getElementById("bintang2")
    const bintang3=document.getElementById("bintang3")
    const bintang4=document.getElementById("bintang4")
    const bintang5=document.getElementById("bintang5")
    var rating=parseFloat(param);
    console.log(rating)
    if(rating<2){
        bintang2.classList.remove("text-yellow-300")
        bintang3.classList.remove("text-yellow-300")
        bintang4.classList.remove("text-yellow-300")
        bintang5.classList.remove("text-yellow-300")
        bintang2.classList.add("text-gray-300")
        bintang3.classList.add("text-gray-300")
        bintang4.classList.add("text-gray-300")
        bintang5.classList.add("text-gray-300")
        return
    }
    if(rating>=2&&rating<3){
        bintang3.classList.remove("text-yellow-300")
        bintang4.classList.remove("text-yellow-300")
        bintang5.classList.remove("text-yellow-300")
        bintang3.classList.add("text-gray-300")
        bintang4.classList.add("text-gray-300")
        bintang5.classList.add("text-gray-300")
        return
    }
    if(rating>=3&&rating<4){
        bintang4.classList.remove("text-yellow-300")
        bintang5.classList.remove("text-yellow-300")
        bintang4.classList.add("text-gray-300")
        bintang5.classList.add("text-gray-300")
        return
    }
    if(rating>=4&&rating<5){
        bintang5.classList.remove("text-yellow-300")
        bintang5.classList.add("text-gray-300")
        return
    }

  }
  function konfirmasi(books){
    books.forEach(book => {
    
    const mengisi=document.createElement("div")
        mengisi.innerHTML=`
        <div class="mt-4 sm:mt-0  justify-center flex items-center">
        <img src="${book.imageLink}" alt="Book Cover" class="w-30 h-40 object-cover">
      </div>
        <div class=" mb-4 sm:mb-0">
        <h2 class="text-center font-bold text-lg sm:text-xl">${book.name}</h2>
        <p class="text-sm text-left">${book.description}</p>
      </div>
      
      
      
      <!-- Rating and Stock -->
      <div>
        <div class="rating border w-full justify-center flex items-center">
        Rating : ${book.rating}
            <div class="flex items-center">
                <svg id="bintang1" class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg id="bintang2" class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg id="bintang3" class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg id="bintang4" class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg id="bintang5" class="w-4 h-4 ms-1 text-yellow-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
        </div>
      
        <div class="stock border w-full justify-center flex items-center">Stok Buku: ${book.stok}</div>
      </div>
      `
      document.getElementById("info").append(mengisi);
      stok(book.rating);
  }
    )}
    // Ambil elemen input tanggal
    var tanggal1Input = document.getElementById('borrowingDate');
    var tanggal2Input = document.getElementById('returningDate');
    var besok = new Date();
    besok.setDate(besok.getDate() + 1);
    tanggal1Input.min = formatDate(besok);
    // Tambahkan event listener untuk memperbarui tanggal minimal pada tanggal2Input
    tanggal1Input.addEventListener('change', function() {
      // Ambil tanggal dari input pertama
      var tanggalPertama = new Date(tanggal1Input.value);
      tanggal2Input.value="";

      // Set tanggal minimal pada input kedua menjadi 1 minggu setelah tanggal pertama
      var minimalTanggalKedua = new Date(tanggalPertama);
      minimalTanggalKedua.setDate(tanggalPertama.getDate() + 7);

      // Set tanggal maksimal pada input kedua menjadi 3 minggu setelah tanggal pertama
      var maksimalTanggalKedua = new Date(tanggalPertama);
      maksimalTanggalKedua.setDate(tanggalPertama.getDate() + 21);

      // Update nilai minimal dan maksimal pada input kedua
      tanggal2Input.min = formatDate(minimalTanggalKedua);
      tanggal2Input.max = formatDate(maksimalTanggalKedua);
    });

    // Fungsi untuk memformat tanggal ke format YYYY-MM-DD
    function formatDate(date) {
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
      var yyyy = date.getFullYear();

      return yyyy + '-' + mm + '-' + dd;
    }
    function hapusall(){
        document.getElementById("berhasil").classList.remove("hidden");
    }
    function deletall(){
        var a = new Array(5);
        localStorage.setItem("isiKeranjang",0);
        localStorage.setItem('arrayData',JSON.stringify(a))
        window.location.reload(true)
    }
    document.getElementById("okff").addEventListener("click",function(){
        deletall();
    })
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