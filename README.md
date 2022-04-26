# Sejutacita FE Test

## Teknologi yang digunakan: 
- React 18.0.0
- Node 16.13.0
- Express 4.17.3

## Challenges dan feedback:
1. Pada saat mencobat hit API menggunakan Postman bisa, tidak ada kendala, seluruh data dapat ditampilkan, tetapi saat saya mencoba hit API langsung dari browser pertama menggunakan Axios, terkena CORS Issue, saya mencoba berbagai cara dari internet, seperti menambahkan headers dan masih tidak bisa. Selanjutnya saya mencoba Hit API tanpa menggunakan Axios, tetapi menggunakan bawaan dari Javascript atau Node itu sendiri, dan masih terkena CORS Issue. Sehingga, saya berinisiatif membuat sedikit script untuk server. Dengan menggunakan script tersebut, berhasil hit API tanpa terkena CORS Issue tersebut karena saya menggunakan salah satu package, cors. Jadi website saya memanggil terlebih dahulu ke server yang saya buat tersebut di localhost:5000 dan dari localhost:5000 tersebut API Sejutacita dipanggil, lalu dikirim kembali client. 
2. Pada halaman category details, dimana menampilkan data buku dari kategori, menurut saya perlu ditambahkan total atau jumlah buku pada kategori tersebut, sehingga pada proses pagination perhitungan ada berapa jumlah page ada di backend.
3. Pada halaman category details, saat memanggil Book API, menurut saya perlu ditambahkan juga title atau category.

Berikut contoh output atau response yang saya maksud dari poin 2 dan 3:
```javascript
{
    category: category, // jenis kategori 
    books: listOfBooks, // kumpulan buku
    total: listOfBooks.length, // total semua buku
    numberOfPages: Math.ceil(listOfBooks.length / 10), // jumlah halaman untuk pagination
 }
```


## Instalasi
Clone git repository to local machine
```bash
git clone https://github.com/alaqsaka/sejutacita-fe-test.git sejutacita-fe-test
```
Installing project
- Install server 
```bash
cd server
npm install
```
- Install client
```bash
cd client
npm install
```
Run the project by opening two terminal in VSCODE
- First terminal (server):
```bash
cd server
npm start
```
- Second terminal (client):
```bash
cd client
npm start
```

If running successully, this page will show up
- localhost:3000
![image](https://user-images.githubusercontent.com/40936981/165242085-e088ec13-93d5-47fe-83fb-0b9bb9e4d410.png)
- localhost:3000/<categoryId>, example localhost:3000/1
![image](https://user-images.githubusercontent.com/40936981/165242407-cc3686a0-67a9-4752-b143-d0c02e01fbec.png)

 ## Features:
- Search
![image](https://user-images.githubusercontent.com/40936981/165243058-9b1bbf3e-9b5b-4c1d-b138-018832a383eb.png)
- Responsive (Phone, Tablet, Laptop, Desktop)
![image](https://user-images.githubusercontent.com/40936981/165243147-316fbbd4-d227-48db-b742-0ba03edf4206.png)
![image](https://user-images.githubusercontent.com/40936981/165243232-15b90a5b-1393-4811-ab5e-7ec62bcc0d33.png)
![image](https://user-images.githubusercontent.com/40936981/165243256-fb0c161b-945c-4652-a059-286486c7101b.png)

- Pagination
![image](https://user-images.githubusercontent.com/40936981/165243429-df6a2c9c-2201-458d-b6ed-8294b8b8fbe7.png)

- Bookmark using LocalStorage
![image](https://user-images.githubusercontent.com/40936981/165243553-5c095c7a-673f-4404-8174-3c3eaaa75287.png)
![image](https://user-images.githubusercontent.com/40936981/165243600-83756f52-115a-4589-abe7-652c5a887591.png)
