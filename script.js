// Fungsi untuk menambah catatan
function addNote() {
    const notesContainer = document.getElementById('notes');
    const noteInput = document.getElementById('noteInput');
    const usernameInput = document.getElementById('usernameInput');
    const noteText = noteInput.value.trim();
    let username = usernameInput.value.trim() || "Anonim";  // Jika nama kosong, default "Anonim"

    // Simpan username di localStorage jika belum ada
    if (username) {
        localStorage.setItem('username', username);
    } else {
        username = localStorage.getItem('username') || "Anonim";  // Ambil nama dari localStorage jika ada
    }

    if (noteText) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note', 'user');  // Penandaan untuk catatan dari pengguna

        // Tanggal dan waktu saat catatan dikirim
        const date = new Date();
        const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

        noteElement.innerHTML = `
            <span class="note-date">${timestamp}</span>
            <p>${noteText}</p>
            <button class="delete-btn" onclick="deleteNote(this)">Hapus</button>
        `;

        // Menambahkan catatan baru ke dalam container notes
        notesContainer.appendChild(noteElement);
        notesContainer.scrollTop = notesContainer.scrollHeight;  // Scroll otomatis ke bawah

        noteInput.value = '';  // Kosongkan input setelah pengiriman
    }
}

// Fungsi untuk menghapus catatan
function deleteNote(button) {
    const noteElement = button.parentElement;  // Ambil elemen note
    noteElement.remove();  // Hapus elemen note
}

// Fungsi untuk menerima catatan dari pengguna lain (contoh)
function addOtherNote(noteText) {
    const notesContainer = document.getElementById('notes');

    const noteElement = document.createElement('div');
    noteElement.classList.add('note', 'other');  // Penandaan untuk catatan dari pengguna lain

    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    noteElement.innerHTML = `
        <span class="note-date">${timestamp}</span>
        <p>${noteText}</p>
        <button class="delete-btn" onclick="deleteNote(this)">Hapus</button>
    `;

    notesContainer.appendChild(noteElement);
    notesContainer.scrollTop = notesContainer.scrollHeight;  // Scroll otomatis ke bawah
}

// Fungsi untuk meng-toggle sidebar pengaturan
function toggleSettingsSidebar() {
    const settingsSidebar = document.getElementById('settingsSidebar');
    settingsSidebar.classList.toggle('active');
}

// Fungsi untuk menyembunyikan sidebar saat klik di luar
document.addEventListener('click', function(event) {
    const settingsSidebar = document.getElementById('settingsSidebar');
    const settingsIcon = document.querySelector('.icon.settings img');
    if (settingsSidebar.classList.contains('active') && !settingsSidebar.contains(event.target) && event.target !== settingsIcon) {
        settingsSidebar.classList.remove('active');
    }
});