# pinjaman-serbaguna-pro
Create

## Cara pakai

Project ini menyediakan wrapper sederhana untuk membuat archive ZIP bernama `Zip` yang memanggil skrip Node `buat-zip.js`.

File yang disertakan
- `Zip` — wrapper bash yang menjalankan `node buat-zip.js` (dapat dijalankan sebagai `./Zip`).
- `buat-zip.js` — skrip Node (berisi shebang) yang memanggil utilitas `zip` sistem.
- `package.json` — berisi npm script `zip` untuk menjalankan `node buat-zip.js`.

Langkah agar bisa dijalankan (Linux/macOS)

1. Pastikan Anda berada di folder repo lokal:
   ```bash
   git fetch origin
   git checkout main
   git pull
   ```

2. Set executable bit pada file wrapper dan skrip Node agar dapat dijalankan langsung:
   ```bash
   chmod +x Zip buat-zip.js
   git update-index --chmod=+x Zip buat-zip.js
   git add Zip buat-zip.js
   git commit -m "Make Zip and buat-zip.js executable"
   git push origin fix/zip-executable
   ```
   Catatan: `git update-index --chmod=+x` memastikan mode +x dicatat di commit tanpa harus bergantung pada izin lokal di semua sistem.

3. Pastikan utilitas `zip` tersedia pada sistem:
   ```bash
   command -v zip || sudo apt-get install zip -y
   ```

4. Menjalankan contoh:
   ```bash
   mkdir -p test && echo hello > test/hello.txt
   # dengan wrapper (jika executable):
   ./Zip test.zip test
   # atau langsung dengan Node (semua OS):
   node buat-zip.js test.zip test
   # cek isi:
   unzip -l test.zip
   ```

5. Menggunakan npm script:
   ```bash
   npm run zip -- test.zip test
   ```

Catatan Windows
- Di Windows, jalankan `node buat-zip.js` langsung atau sesuaikan skrip untuk menggunakan 7-Zip (`7z`).

Kontribusi
- Jika Anda ingin perubahan dijadikan PR, buat pull request dari branch `fix/zip-executable` ke `main`.
