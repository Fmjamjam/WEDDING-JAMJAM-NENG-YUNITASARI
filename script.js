// Fungsi untuk menyimpan dan menampilkan ucapan
function submitUcapan() {
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
  
    if (!nama || !ucapan) {
      alert('Harap isi nama dan ucapan!');
      return;
    }
  
    // Ambil data lama dari localStorage
    let ucapanList = JSON.parse(localStorage.getItem('ucapanList')) || [];
    ucapanList.push({ nama, ucapan });
  
    // Simpan data ke localStorage
    localStorage.setItem('ucapanList', JSON.stringify(ucapanList));
  
    // Tampilkan ucapan di halaman
    const daftarUcapan = document.getElementById('daftarUcapan');
    const ucapanElement = document.createElement('div');
    ucapanElement.className = 'comment';
    ucapanElement.innerHTML = `<span class="name">${nama}</span><span class="text">${ucapan}</span>`;
    daftarUcapan.appendChild(ucapanElement);
  
    // Kosongkan input setelah dikirim
    document.getElementById('nama').value = '';
    document.getElementById('ucapan').value = '';
  }
  
  // Fungsi untuk memuat ucapan dari localStorage saat halaman dibuka
  function loadUcapan() {
    const ucapanList = JSON.parse(localStorage.getItem('ucapanList')) || [];
    const daftarUcapan = document.getElementById('daftarUcapan');
    ucapanList.forEach(({ nama, ucapan }) => {
      const ucapanElement = document.createElement('div');
      ucapanElement.className = 'comment';
      ucapanElement.innerHTML = `<span class="name">${nama}</span><span class="text">${ucapan}</span>`;
      daftarUcapan.appendChild(ucapanElement);
    });
  }
  
  // Panggil fungsi saat halaman dimuat
  document.addEventListener('DOMContentLoaded', loadUcapan);