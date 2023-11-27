var batalkan=""
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

  function hapusreserv(param){
    var tampil=JSON.parse(localStorage.getItem('reservasi'));
    console.log(param)
    tampil=deleteArr(tampil,param)
    localStorage.setItem("sizeres",localStorage.getItem("sizeres")-1);
     // Membersihkan nilai null dari array
  tampil = tampil.filter(item => item !== null);
  
  // Mengisi array dengan null hingga panjangnya kembali menjadi 10
  while (tampil.length < 99) {
    tampil.push(null);
  }
    localStorage.setItem('reservasi',JSON.stringify(tampil))
    fetchreservasi();
    sizeres=parseInt(localStorage.getItem('sizeres'));

  }
const booksData = fetch("buku.json")
    .then(response => response.json())
    .then(data => data.books);
var sizesdh=parseInt(localStorage.getItem('sudahpinjamsize'))
var tglpinjam = localStorage.getItem('tglpinjam')
var tglbalik = localStorage.getItem('tglbalik')
var sedangpinjam = localStorage.getItem('sedangpinjam')
var sizeres=parseInt(localStorage.getItem('sizeres'));
function fetchreserv(){
    var temp=JSON.parse(localStorage.getItem('reservasi'))
    if(sizeres==null||sizeres==0){
        document.querySelector("#reservasiisi").innerHTML="Tidak ada Buku yang direservasi"
        return
    }
    for (let i =0;i<sizeres;i++){
        const filteredBooks = booksData.then(books => books.filter(book => {
            const matchesSearchTerm = !temp[i] || 
              book.name.toLowerCase().includes(temp[i].toLowerCase()) 
             ;
             
            return matchesSearchTerm;
            
          }));
          filteredBooks.then(books => displayres(books, i));
        }
}
function batal(param){
    document.querySelector('#yakin').classList.remove('hidden')
    batalkan=param;

}
document.getElementById("okf").addEventListener('click',function(e){
    e.preventDefault();
    hapusreserv(batalkan);
    alert("Berhasil membatalkan reservasi")
    fetchreserv();
    document.getElementById('yakin').classList.add('hidden')
})
function fetchreservasi(){
    document.querySelector("#reservasiisi").innerHTML=""
}
function displayres(books){
    books.forEach(book => {
        const mengisi=document.createElement("div")
        mengisi.innerHTML=`<div class="flex flex-col sm:flex-row justify-between p-4 border">
        <div>
          <h2 class="font-bold">${book.name}</h2>
          <p>Kamu akan menerima notifikasi</p>
          <p>Saat stok buku ini sudah ada</p>
        </div>
        <div class=" flex flex-col justify-between mt-4 sm:mt-0  sm:items-end items-center ">
          <!-- Placeholder for image -->
          <div class="w-24 h-24 border-none flex items-center justify-center mb-4 mx-6">
          <img class="w-24 h-24 object-contain rounded-lg mr-4" src="${book.imageLink}" alt="Product">
          </div>
           <!-- Button to return the book -->
           <button onclick="batal('${book.name}')" class="text-white bg-red-600 transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-full sm:w-auto">
          Batalkan Reservasi
        </button>
        </div>
        </div>`
    document.querySelector("#reservasiisi").append(mengisi)
    });
}
function fetchsdhpinjam(){
    var temp=JSON.parse(localStorage.getItem('sudahpinjamisi'))
    if(sizesdh==null||sizesdh==0){
        document.querySelector("#sudahpinjam").innerHTML="Tidak ada Buku yang sudah dipinjam"
        return
    }
    for (let i =0;i<sizesdh;i++){
        const filteredBooks = booksData.then(books => books.filter(book => {
            const matchesSearchTerm = !temp[i] || 
              book.name.toLowerCase().includes(temp[i].toLowerCase()) 
             ;
             
            return matchesSearchTerm;
            
          }));
          filteredBooks.then(books => displaysdh(books, i));
        }
}
function fetchsdgpinjam(){
    if(sedangpinjam==null){
        document.querySelector("#isisedang").innerHTML="Tidak ada Buku yang sedang dipinjam"
        return
    }
    const filteredBooks = booksData.then(books => books.filter(book => {
        const matchesSearchTerm = !sedangpinjam || 
          book.name.toLowerCase().includes(sedangpinjam.toLowerCase()) 
         ;
        return matchesSearchTerm;
        
      }));
      filteredBooks.then(displays);
}
console.log(tglbalik)
function displays(books){
    var a =tglpinjam
    var b =tglbalik
    books.forEach(book => {
        const mengisi=document.createElement("div")
        mengisi.innerHTML=`<div class="flex flex-col sm:flex-row justify-between p-4 border">
        <div>
          <h2 class="font-bold">${book.name}</h2>
          <p>Tanggal Dipinjam: <span class="text-gray-600">${a}</span></p>
          <p>Tanggal Pengembalian: <span class="text-gray-600">${b}</span></p>
        </div>
        <div class=" flex flex-col justify-between mt-4 sm:mt-0  sm:items-end items-center ">
          <!-- Placeholder for image -->
          <div class="w-24 h-24 border-none flex items-center justify-center mb-4 mx-6">
          <img class="w-24 h-24 object-contain rounded-lg mr-4" src="${book.imageLink}" alt="Product">
          </div>
           <!-- Button to return the book -->
           <button onclick="document.querySelector('#berhasil').classList.remove('hidden')" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-full sm:w-auto">
          Kembalikan Buku
        </button>
        </div>
        </div>`
    document.querySelector("#isisedang").append(mengisi)
    });
}
fetchsdgpinjam();
document.getElementById("okff").addEventListener('click',function(){
    var a=JSON.parse(localStorage.getItem('sudahpinjamisi'))
    var b=JSON.parse(localStorage.getItem('sudahpinjamtgl'))
    var c =JSON.parse(localStorage.getItem('sudahpinjamblk')) // 
    var size=parseInt(localStorage.getItem('sudahpinjamsize'))
    a[size]=localStorage.getItem('sedangpinjam')
    b[size]=localStorage.getItem('tglpinjam')
    c[size]=localStorage.getItem('tglbalik')
    localStorage.setItem('sudahpinjamisi',JSON.stringify(a))
    localStorage.setItem('sudahpinjamtgl',JSON.stringify(b))
    localStorage.setItem('sudahpinjamblk',JSON.stringify(c))
    localStorage.setItem('sudahpinjamsize',size+1)
    localStorage.removeItem('tglpinjam')
    localStorage.removeItem('tglbalik')
    localStorage.removeItem('sedangpinjam')
    alert("Kamu telah mengambalikan buku")
    window.location.reload(true);
})
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
//   
// 
// 
// localStorage.setItem('sudahpinjamblk',JSON.stringify(a))
// 
// 
function getpinjam(param){
    var b=JSON.parse(localStorage.getItem('sudahpinjamtgl'))
    return(b[param]);
    
}
function getbalik(param){
    var c =JSON.parse(localStorage.getItem('sudahpinjamblk')) 
    return(c[param])
}
function displaysdh(books,a){
    var x =getpinjam(a)
    var y =getbalik(a)
    books.forEach(book => {
        const mengisi=document.createElement("div")
        mengisi.innerHTML=`<div class="flex flex-col sm:flex-row justify-between p-4 border">
        <div>
          <h2 class="font-bold">${book.name}</h2>
          <p>Tanggal Dipinjam: <span class="text-gray-600">${x}</span></p>
          <p>Tanggal Pengembalian: <span class="text-gray-600">${y}</span></p>
        </div>
        <div class=" flex flex-col justify-between mt-4 sm:mt-0  sm:items-end items-center ">
          <!-- Placeholder for image -->
          <div class="w-24 h-24 border-none flex items-center justify-center mb-4 mx-6">
          <img class="w-24 h-24 object-contain rounded-lg mr-4" src="${book.imageLink}" alt="Product">
          </div>
        </div>
        </div>`
    document.querySelector("#sudahpinjam").append(mengisi)
    });
}
fetchsdhpinjam();
function logout(){
    localStorage.setItem("login",false); 
    window.location.href="index.html";
  }
  fetchreserv()