Ekstensi:
   - Better Comment .
   - Close HTML/XML Tag .
   - Debugger for Chrome .
   - Error Lens.
   - EditorConfig for VS Code .
   - ES7 React/Redux/GraphQL/React-Native snippets .
   - Github Pull Request .
   - Highlight Matching Tag .
   - React JS Code Snippets .
   - Settings Sync .
   - Turbo Console Log .
   - Visual Studio IntelliCode .
   - VS Code Faker .
   -

https://stitch.withgoogle.com/
http://localhost/phpmyadmin/index.php?route=/database/structure&server=1&db=db_cms_jwd&table=
https://themewagon.com/theme-tag/portfolio-template/
https://undraw.co/illustrations

"use strict";
// https://github.com/mosh-hamedani/javascript-testing-starter.git


// OOP (Object Oriented Programming)

// Object-Oriented Programming (OOP) atau Pemrograman Berbasis Objek adalah sebuah cara pandang atau paradigma koding yang menyusun program berdasarkan Objek.

// Di dalam OOP, ada dua istilah paling mendasar yang wajib kamu tahu:

// 1. Class (Blueprint/Cetakan): Ibaratnya adalah gambar cetak biru atau denah rumah. Class mendefinisikan data dan perilaku apa saja yang akan dimiliki objek.
// 2. Object (Hasil Cetakan): Ibaratnya adalah rumah asli yang sudah dibangun berdasarkan denah tadi. Objek adalah bentuk nyata dari Class.




// 4 PILLARS of Object Oriented Programming

// 1. Encapsulation (Pengkapsulan)

// Encapsulation adalah cara untuk membungkus data (variabel) dan fungsi menjadi satu kesatuan di dalam Class, sekaligus menyembunyikan data sensitif agar tidak bisa diubah sembarangan dari luar.

// Contoh Kode:
// class Dompet {
//     #uang = 50000; // Tanda # artinya data ini PRIVATE (dikapsul), gak bisa diakses langsung dari luar

//     // Fungsi khusus untuk melihat uang dengan aman (Getter)
//     cekUang() {
//         return `Sisa uang Anda: Rp${this.#uang}`;
//     }
// }
// const dompetSaya = new Dompet();
// console.log(dompetSaya.cekUang()); // Output: Sisa uang Anda: Rp50000
// // console.log(dompetSaya.#uang); // ERROR! Data dikunci dari luar.



// 2. Inheritance (Pewarisan)

// Inheritance memungkinkan sebuah Class baru mewarisi sifat, data, atau fungsi dari Class yang sudah ada. Ini sangat berguna agar kita tidak perlu menulis ulang kode yang sama (Don't Repeat Yourself).

// Contoh kode:
// Class Induk (Parent)
// class Kendaraan {
//     kecepatan = 0;
//     maju() { console.log("Kendaraan ini bergerak maju!"); }
// }

// // Class Anak (Child) mewarisi sifat Kendaraan memakai kata 'extends'
// class Mobil extends Kendaraan {
//     bukaPintu() { console.log("Pintu mobil terbuka."); }
// }

// const mobilGue = new Mobil();
// mobilGue.maju(); // Fungsi 'maju' otomatis ada karena warisan dari Kendaraan!
// mobilGue.bukaPintu(); // Fungsi asli milik Mobil sendiri



// 3. Polymorphism (Banyak Bentuk)

// Polymorphism berasal dari bahasa Yunani yang berarti "banyak bentuk". Di dalam OOP, ini berarti sebuah fungsi yang sama bisa memiliki perilaku atau hasil yang berbeda-beda tergantung objek mana yang menggunakannya.

// Contoh kode:
// class Hewan {
//     bersuara() { console.log("Hewan ini bersuara"); }
// }

// class Kucing extends Hewan {
//     bersuara() { console.log("Meong!"); } // Menimpa fungsi induk dengan suara kucing
// }

// class Anjing extends Hewan {
//     bersuara() { console.log("Guk Guk!"); } // Menimpa fungsi induk dengan suara anjing
// }

// const peliharaan = [new Kucing(), new Anjing()];
// peliharaan.forEach(hewan => hewan.bersuara());
// // Fungsi yang dipanggil sama-sama bersuara(), tapi outputnya beda: "Meong!" lalu "Guk Guk!"



// 4. Abstraction (Abstraksi)

// Abstraction adalah konsep untuk menyembunyikan detail proses yang rumit di dalam sistem, dan hanya menampilkan fungsi pentingnya saja kepada pengguna.

// Contoh kode:
// class RemoteTV {
//     // Pengguna hanya perlu tahu fungsi ini
//     tekanTombolPower() {
//         this.#alirkanListrik();
//         this.#nyalakanLayar();
//         console.log("TV Berhasil Menyala!");
//     }

//     // Proses rumit ini disembunyikan di dalam (Private)
//     #alirkanListrik() { /* logika rumit sirkuit elektro */ }
//     #nyalakanLayar() { /* logika rumit panel display */ }
// }

// const remot = new RemoteTV();
// remot.tekanTombolPower(); // Sangat simpel digunakan dari luar!


////////////////////////\\\\\\\\\\\\\\\\\\\\\



// Object Literal sintaks
// const circle = {
//   radius: 1, // Property
//   location: { // Property
//     x: 1,
//     y: 1
//   },
//   draw: function () { // Jika ada function di object, disebut: method
//     console.log('draw');
//   }
// };

// circle.draw()



// FACTORIES / Factory function
// function createCircle(radius) {
//   return {
//     radius, // sama seperti: radius: radius
//     // draw: function () {
//     //   console.log('draw');
//     // },
//     draw() { // Cara singkat membuat method dlm object
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1)
// console.log(circle)



// CONSTRUCTORS / constructor function
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThree..

// Penamaan constructor function harus menggunakan Pascal Notation
// function Circle(radius) {
//   // console.log('this', this)
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }

// const circle = new Circle(1);



// function ini adalah object
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//       console.log('draw');
//     }
// }

// Circle.call({}, 1) // Call = Comma-separated (Argumen dipisah satu per satu menggunakan Koma).
// Circle.apply({}, [1, 2, 3]) // Apply = Array (Argumen wajib dibungkus di dalam sebuah Array [ ]).

// const circle2 = new Circle(1)


// console.log(Circle.name) // Mengembalikan nama function
// console.log(Circle.length) // Mengembalikan jumlah argumen
// console.log(Circle.constructor) // Mencari tahu siapa "cetakan" (atau fungsi pembuat) dari objek atau kelas Circle tersebut.


// const Circle1 = new Function('radius', `
//   this.radius = radius;
//   this.draw = function () {
//       console.log('draw');
//     }
// `)

// const circle = new Circle1(1)
// console.log(circle)



////////////////////\\\\\\\\\\\\\\\\\\\\\\\\


// Value Types (Primitive) VS Reference Types

// Value Types (Primitive):
//   - String
//   - Number
//   - Boolean
//   - Symbol
//   - Undefined
//   - Null

// Reference Types:
//   - Array
//   - Object
//   - Funct


// Contoh Primitive:
// x = 10
// y = x
// Kedua variabel ini adalah independen
// x = 20

// console.log(x) // 20
// console.log(y) // 10

// let number = 10

// function increase(number) {
//   number++
// }

// increase(number)
// console.log(number) // 10



// Contoh Reference:
// x = {value: 10}
// y = x

// x.value = 20

// console.log(x) // 20
// console.log(y) // 20

// let obj = {value: 10}

// function increase(obj) {
//   obj.value++
// }

// increase(obj)
// console.log(obj.value) // 10

// Primitive disalin berdasarkan nilai
// Reference (Object) disalin berdasarkan referensi



// Adding / Removing Properties

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//       console.log('draw');
//     }
// }

// const circle = new Circle(10)

// circle.location = {x: 1} // Adding Property
// delete circle.location // Remove Property

// console.log(circle)



// Enumerating Properties

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//       console.log('draw');
//     }
// }

// circle = new Circle(10)

// for (key in circle) {
//   // console.log(key, circle[key])
//   if (typeof circle[key] !== 'function') { // Jika tidak ingin mendapatkan method / function
//     console.log(key, circle[key])
//   }
// }

// Cara lain utk mendapatkan semua key dalam object:
// const keys = Object.keys(circle) // Mengembalikan semua key dlm object circle sebagai Array
// console.log(keys)

// console.log('radius' in circle) // Mengecek keberadaan suatu Property



// Abstraction
// Menyembunyikan detail & kompleksitas
// Hanya menampilkan / mengekspos hal-hal penting

// function Circle(radius) {
//   this.radius = radius;

//   // Private  Properties
//   let defaultLocation = { x: 0, y:0 };

//   // Private  Methods
//   let = computeOptimumLocation = function (factor) {
//     // ...
//   }

//   this.draw = function () {
//     computeOptimumLocation(0.1);
//     // defaultLocation
//     // this.radius

//     console.log('draw');
//   };
// }

// circle = new Circle(10)
// circle.draw()


// Getters / Setters

// const person = {
//   firstName: 'Rafael',
//   lastName: 'Torang',
//   // fullName: () => `${person.firstName} ${person.lastName}`
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`
//   }
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// }

// person.fullName = 'Rafael Torang'

// console.log(person.fullName)

// function Circle(radius) {
//   this.radius = radius;

//   // Private  Properties
//   let defaultLocation = { x: 0, y:0 };

//   this.getDefaultLocation = function() {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     console.log('draw');
//   };

//   Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//       return defaultLocation;
//     },
//     set: (value) => {
//       if (!value.x || !value.y)
//         throw new Error('Invalid location!')

//       defaultLocation = value;
//     }
//   });
// }

// circle = new Circle(10)
// console.log(circle.defaultLocation)
// console.log(circle)
// circle.defaultLocation = 1 // ERROR



// Exercise
// Membuat stopwatch sederhana

// function Stopwatch() {
//   this.duration = 0;
//   let currentTime;
//   let started = false;

//   this.start = () => {
//     if (!started) {
//       currentTime = setInterval(() => {
//         this.duration++
//       }, 1000);
//       started = !started
//     } else {
//       throw new Error('Stopwatch has already started!')
//     }
//   };

//   this.stop = () => {
//     if (started) {
//       clearInterval(currentTime);
//       started = !started
//     } else {
//       throw new Error('Stopwatch has already stopped!')
//     }
//   };

//   this.reset = () => {
//     this.duration = 0;
//   };
// }

// const sw = new Stopwatch();



////////////////////\\\\\\\\\\\\\\\\\\\\\\\\


// ARRAYS
// Array adalah type data Object di JavaScript

// const colors = ['red', 'blue'];
// console.log(typeof colors) // object


// FUNCTIONS

// let greet = function greet() {
//   return 'Hello World!'
// }

// console.log(greet())


// STRINGS

// String primitif
// Mesin JavaScript secara internal membungkus String primitif dengan object String
// let message = 'This\'s my first message!' // This's my first message!
// console.log(typeof message) // String

// message = 'This is\n my first message!' // This is
                                        // my first message!

// message = 'This is\t my first message!' // This is   my first message!

// console.log(message.split(' ')) //['This', 'is', 'my', 'first', 'message']

// // String object
// const anotherMsg = new String('Hi!')
// console.log(typeof anotherMsg) //object


// IF ELSE, SWITCH CASE

// let currentDate = new Date();
// let hour = currentDate.getHours();

// if (hour >= 6 && hour < 12) {
//   console.log('Good morning!');
// } else if (hour >= 12 && hour < 18) {
//   console.log('Good afernoon!');
// } else {
//   console.log('Good night!');
// }


// LOOPS ['for', 'while', 'do_while', 'for_in', 'for_of']

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i); // Menampilkan angka ganjil
// }


// LOCAL vs GLOBAL SCOPE

// GLOBAL SCOPE
// const color = 'red'; // Hindari menggunakan variabel global

// function start() {
//   // LOCAL SCOPE
//   const message = 'HI!';
//   const color = 'blue'; // Variabel di dlm scope lebih diutamakan daripada variabel global

//   console.log(color);
// }

// // console.log(message); // Error; message is not defined
// start();


// Cloning an Object/

// const circle = {
//   radius: 1,
//   draw: function () {
//     console.log('draw');
//   }
// };

// const obj = {
//   x: 1,
//   y: 2
// }

// const another = {};

// for (let key in circle) {
//   another[key] = circle[key]
// }

// const another = Object.assign({color: 'yellow'}, circle, obj)

// const another = {...circle, ...obj}
// console.log(another)


// The "this" Keyword
// "this" selalu mengembalikan referensi ke object saat ini

// const person = {
//   name: 'Rafael',
//   walk() {
//     console.log(this); // "this disini menunjuk pada object person"
//   }
// };

// const walk = person.walk;
// walk(); // output: undefined. Seharusnya mengembalikan object global (window object). output undefined karena 'strict mode' diaktifkan secara default

// strict mode: mode untuk mengeksekusi kode dengan cara yg lebih protektif sehingga mencegah potensi masalah


// Binding "this"
// const walk = person.walk.bind(person); // dengan method 'bind', kita bisa mengatur nilai "this" secara permanen.
// walk(); //


// const video = {
//   title: 'A',
//   play() {
//     console.log(this); // "this disini menunjuk pada object video"
//   }
// };

// video.stop = function() {
//   console.log(this); // "this" disini menunjuk pada object video
// }

// video.stop();


// function playVideo() {
//   console.log(this); // "this" disini menunjuk pada object window
// }

// playVideo();


// function Video(title) {
//   this.title = title;
//   console.log(this); // "this" disini menunjuk pada object Video
// }

// const video = new Video('Zombie Video');


// const video = {
//   title: 'Zombie video',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(function(tag) {
//        console.log(this.title, tag); // "this" disini menunjuk pada object window karena berada di dalam fungsi callback ini. (Pakai arrow function supaya tetap berada di dalam object video atau pakai parameter kedua dari method forEach)
//     }, this)
//   }
// };

// video.showTags();


// Temlate Literals

// const message =
// 'This is\n' +
// 'my \'first\' \t  message'
// console.log(message)

// const name = 'Rafael'
// const another =
// `Hi, ${name},

// Thank you for joining my mailing list.

// Regards,
// Torang`

// console.log(another)


// Filtering an Array

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(num => num >= 0);

// console.log(filtered)


// Mapping an Array

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(num => num >= 0);
// const items = filtered.map(n => ( {value: n} ) );

// const items = filtered.map(n => `<li> ${n} </li>`);
// const html =
// `<ul>
//   ${items.join('\n')}
// </ul>`;

// Chaining (menggabungkan method)
// const items = numbers
//   .filter(num => num >= 0)
//   .map(n => ( {value: n} ) )
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);

// console.log(items)


// const colors = ['red', 'yellow', 'green'];
// const ulElement = document.getElementById('ulElement');
// const liElement = colors.map(color =>
//   `<li style="color: ${color}">This is ${color} item</li>`
// );

// ulElement.innerHTML = liElement.join('');



// Reducing an Array

// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 0 // Jika parameter kedua dihilangkan, maka JavaScript secara otomatis akan menginisialisasi "accumulator" menjadi item pertama dari array numbers.
// );

// console.log(total)



///////////////////////\\\\\\\\\\\\\\\\\\\\

// Modern JavaScript Essentials

// Fitur JavaScript yg banyak digunakan di React:

  // - Let / Const
  // - Objects
  // - this
  // - Arrow Functions
  // - Destructuring
  // - Spread
  // - classes
  // - Modules


// Arrow Functions

// const square = function(number) {
//   return number * number;
// };

// const square = number => number * number;
// jika hanya 1 parameter, bisa menghilangkan kurung '()'
// jika tidak punya parameter, harus pakai kurung
// jika hanya 1 statement di body function, bisa menghilangkan kurung kurawal '{}'
// jika pakai arrow function && hanya 1 statement di body function, bisa menghilangkan Keyword 'return'
// console.log(square(2));


// const jobs = [
//   {id: 1, isActive: true},
//   {id: 2, isActive: true},
//   {id: 3, isActive: false}
// ];

// const activeJobs = jobs.filter(job => job.isActive);

// console.log(activeJobs);



// Arrow Functions and This

// const person = {
//   talk() {
//     setTimeout(() => { // Arrow function tidak mengikat kata kunci "this"
//       console.log(this);
//     }, 1000);
//   }
// };

// person.talk();



// Object Destructuring

// const address = {
//   street: 'Oak street',
//   city: 'Washington',
//   country: 'USA'
// };

// let {street, city, country} = address;

// console.log(street);



// Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second); // cara lama
// const combined = ['a', ...first, ...second, 'z']; // Spread Operator
// const clone = [...first];

// const obj_1 = { name: 'Rafael' };
// const obj_2 = { job: 'unemployment' };

// const combined = {...obj_1, ...obj_2, location: 'USA'};
// const clone = {...obj_1};
// console.log(clone);




// Classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log('walk');
//   }
// }

// const person = new Person('Rafael');


// Inheritance

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log('teach');
//   }
// }

// const teacher = new Teacher('Rafael', 'Dr');
// teacher.walk();



// Modules

// buat file person.js && teacher.js
// kemudian buat class di masing-masing file
// kemudian export class dari file person && teacher

// import { Teacher } from "./teacher.js";
// import { Person } from "./person.js";


// const teacher = new Teacher('Rafael', 'Dr');
// const person = new Person('Torang');

// person.walk(); // jalankan di console index.html
// teacher.walk(); // jalankan di console index.html


// Named and Default Exports

// // cara mengeksport "named" export:
// import { Teacher } from "./teacher.js"; // gunakan kurung kurawal


// cara mengekspor "default" export:
// import Teacher, { promote } from "./teacher.js"; // tidak perlu kurung kurawal



/////////////////////\\\\\\\\\\\\\\\\\\\\

// The Complete Frontend Developer Roadmap

//==== KEY SKILLS ====\\
// 1. HTML
// 2. CSS
// 3. JavaScript
// 4. Version Control Systems (Git, Github)
// 5. TypeScript
// 6. UI Toolkit (Library / Framework) [React]

//==== ADDITIONAL SKILLS ====\\
// 7. CSS Preprocessors (SAAS)
// 8. CSS Framework (Tailwind)
// 9. Automated Testing (Jest, Vitest)
// 10. Meta-Frameworks (Next.js)
// 11. React Native




// faktorial suatu bilangan adalah hasil perkalian semua bilangan positif dari satu hingga bilangan tersebut.
// Faktorial (dilambangkan dengan tanda seru (!) adalah operasi matematika yang mengalikan bilangan bulat positif dengan semua bilangan bulat positif di bawahnya hingga angka 1.

// cth:
// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1


// function factorial(number) {
//   if (number < 0) return;
//   if (number === 0 || number === 1) return 1;
//   return number * factorial(number - 1);
// }



//////////////////////\\\\\\\\\\\\\\\\\

// Library vs Framework

// Library adalah kumpulan kode yg dapat digunakan kembali untuk memecahkan masalah umum.

// Misalnya:
// Kita memiliki library utk melakukan perhitungan matematika,
// Kita memiliki library utk machine learning (pembelajaran mesin), dsb.

// React is "library" for building interactive user-interfaces.
// React adalah "library" untuk membangun antarmuka pengguna interaktif.



// Framework memberi kita banyak kode yg dapat digunakan kembali seperti library, tetapi juga menyediakan struktur / kerangka utk membangun aplikasi.

// Jadi, ketika menggunakan framework, kita harus membangun aplikasi kita sesuai dengan framework tersebut.

// Framework memiliki pendapat tentang:
//   - Application Structure (bagaimana kita harus menyusun aplikasi kita).
//   - Application Startup (bagaimana aplikasi harus dimulai).
//   - Component Interaction (bagaimana komponen harus berinteraksi satu sama lain).
//   - dsb.

// Angular & Vue adalah contoh "Framework" populer utk membangun aplikasi front-end.


// Mengapa kita harus menggunakan framework / library utk membangun aplikasi?

//   Bisakah kita hanya menggunakan JavaScript biasa?
//     Tentu saja bisa. Namun ini membuang-buang waktu.

// Alasannya:
// Bayangkan kita ingin membuat meja.

// Apakah kita akan membeli potongan kayu dan menyatukannya?
//   atau
// Apakah kita akan pergi ke hutan dan menebang pohon terlebih dahulu?

// Tidak ada alasan untuk menebang pohon ketika sudah ada potongan kayu yang siap utk kita gunakan kembali.


// Kita menggunakan framework & library utk meningkatkan produktivitas dan mempercepat proses pengembangan.
// Ada banyak kode yg telah diuji dan siap utk kita gunakan kembali.
// Jadi, ini semua tentang library & framework.



//////////////////\\\\\\\\\\\\\\\\\

// React

// COMPONENTS

// Inti dari semua aplikasi React adalah COMPONENTS (komponen).

// A piece of the UI
// Komponen pada dasarnya adalah bagian dari antarmuka pengguna.

// Jadi, saat membangun aplikasi dengan React, kita membangun sejumlah komponen independen, terisolasi, dan dapat digunakan kembali. Lalu menggabungkannya utk membangun complete user-interfaces (antarmuka pengguna yg kompleks).


// Setiap apk React memiliki setidaknya satu komponen yg disebut 'root component' (komponen akar).
// Komponen ini mewakili apk internal dan berisi komponen anak lainnya.
// Jadi, setiap apk React pada dasarnya adalah 'Root Component' (pohon komponen).

// Berikut contohnya:
// Bayangkan kita ingin membangun apk seperti Twitter.

// Kita dpt membagi halaman Twitter menjadi komponen seperti:
//   - Navbar
//   - Profile
//   - Trends, and
//   - Feed

// Representasi komponen-komponen tersebut dlm bentuk Tree (pohon):

//                   App
//   Navbar | Profile | Trends | Feed
//                               Tweet
//                               Like

// Setiap komponen adalah bagian daru UI.

// Kita dapat membangun komponen2 ini secara terpisah dan kemudian menggabungkannya utk membangun UI yg kompleks.


// Dari segi implementasi, sebuah komponen biasanya diimplementasikan sebagai (class javascript) yg memiliki beberapa (state) dan (render() method).

// class Tweet {
//   state = {};

//   render() {

//   }
// }

// state disini adalah data yg ingin kita tampilkan saat komponen di-render, dan
// render() method bertanggung jawab utk menjalankan seperti apa tampilan UI seharusnya.
// Output dari render() method ini adalah: React Element (elemen React), yaitu objek JavaScript sederhana yg memetakan ke DOM Element (elemen DOM).
// Ini bukan elemen DOM sungguhan, melainkan hanya objek javascript biasa yg mempresentasikan elemen DOM tersebut dlm memori.

// Jadi, React menyimpan representasi DOM yg ringan dlm memori, yg kita sebut sbg (Virtual DOM). Tidak seperti browser atau Real DOM, Virtual DOM ini murah untuk dibuat.
// Ketika kita mengubah state suatu komponen, kita mendapatkan elemen React baru.

// Alat bawaan node.js:
// npm (Node Package Manager)

// JSX (JavaScript XML)


Di React, Props adalah singkatan dari property. Adalah cara untuk mengirimkan data dari satu komponen ke komponen lain.


         Passing Props
      ____________________
      | Parent Components |
            /      \
           /        \
          /          \
_______________     _______________
|Child Component|   |Child Component|

Biasanya kita melakukannya dari komponen induk (parent) ke komponen anak (child).
Anggap props sbg argumen yg kita berikan ke komponen anak:

function sum(x, y) {
   return x + y;
}
                     Arguments
                     /
const result = sum(3, 4);

Prop dapat berupa apa saja: "string", 5, true, [1, 2, 3], undefined, {id: 1}
Prop kompleks adalah sebuah objek
Contoh prop:
<Card title={"Star Wars"} rating={5} isCool={true} />

Konsep terpenting dalam react adalah: State
State seperti otak komponen React
Ia menyimpan informasi tentang komponen yg dpt berubah seiring waktu
Di React, semua yg dimulai dgn keyword 'use', biasanya disebut sbg 'Hook'
React memiliki banyak Hook: useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer, useTransition, dll

Cara kerja useState:
   - Mendestrukrisasi nama variabel sebenarnnya
   - Sebagai argumen kedua dari destrukrisasi, kita memperoleh fungsi 'set' / setter yg dpt digunakan utk memperbarui state tersebut

Sintaks dasar hook useState:
const [variableName, setVariableName] = useState(initialState/defaultValue);
const [stateVariable, functionThatChangesState] = useState(initialState/defaultValue);

useState => Mengelola state
useEffect => Menangani efek samping seperti pengambilan data
useContext => Berbagi data di seluruh komponen
useCallback => Mengoptimalkan fungsi callback

Pada interface yg lebih kompleks, tdk pernah disarankan utk memperbarui nilai state dgn menggunakan state itu sendiri:
<div className='card' onClick={() => setCount(count + 1)}></div>

Yg sering kita lihat adalah membuat callback function lain tanpa penggilan setter state, lalu kita mendapatkan akses ke ke versi state sebelumnya:
<div className='card' onClick={(prevState) => prevState + 1}></div>

Kita dapat menjalankan useEffect hanya ketika sesuatu berubah
Untuk melakukan itu, kita dapat menggunakan Array dependensi / depths yg kita berikan sebagai parameter kedua:
useEffect(() => {
   // ...
}, [variableName])

Variabel apapun yg diberikam di sini, React akan mencoba menghitung ulang dan kmudian melihat apakah telah berubah?, dan hanya jika telah berubah, useEffect ini akan dipanggil

Ini adalah useEffect yg hanya berjalan sekali saat komponen tersebut dipasang, hanya ketika komponen tersebut pertama kali muncul:
useEffect(() => {
   alert('Card rendered')
}, []);


Rendering konsional

Jika membuat variabel dan kita tahu variabel tersebut tidak akan berubah, sebaiknya menggunakan format huruf kapital di semua huruf dan memisahkan tiap kata menggunakan underscore '_' :

const API_BASE_URL = 'https://api.themoviedb.org/3';

Props tdk boleh diubah oleh komponen anak (child component)
Props bersifat hanya baca (only read)

State tidak boleh dimofikasi (dilarang)
Hanya boleh memodifikasi State menggunakan fungsi Setter

Hook React utk mengambil film: 'useEffect'

API - Application Programming Interface - a set of rules that allows one software application to talk to another (seperangkat aturan yang memungkinkan satu aplikasi perangkat lunak berkomunikasi dengan aplikasi lainnya)
// Dlm hal ini, kita menggunakan API TMDB utk mendapatkan daftar film

AJAX adalah sebuah singkatan dari Asynchronous Javascript and XML
XML atau eXtensible Markup Language
Jika HTML dirancang untuk menampilkan data, maka XML dirancang untuk memuat dan membawa data.

Database adalah tempat penyimpanan permanen
Kita menggunakan database utk menyimpan informasi dan kemudian mengambilnya saat dibutuhkan


// =================================== \\

What is React?

React adalah pustaka / library javascript utk membangun user interfaces web dan seluler

React adalah library, bukan framework

Framework mencoba menangani semua hal yg mungkin kita butuhkan saat membangun aplikasi

React adalah library yg berfokus pada satu hal spesifik dgn sangat baik

React adalah tentang membangun user interfaces (bagian-bagian dari situs web dan apk yg dilihat oleh user, seperti button, form, menu, dll)

React sengaja tdk mencoba menangani aspek lain dari pengembangan apk, seperti routing (perpindahan antar halaman yg berbeda) atau mengelola atau mengelola logika apk yg kompleks. Fokusnya hanya tertuju pada user interfaces

React memiliki ekosistem besar yg terdiri dari berbagai library lain yg bekerja dengan sempurna dengannya

Saat kita membutuhkan fitur-fitur lainnya, kita dapat dengan mudah memasang alat yg tepat (plugin) utk pekerjaan tersebut

React memiliki arsitektur berbasis komponen (component-based architecture). Artinya:
   - Kita memecah UI kita menjadi bagian-bagian kecil yg dpt digunakan kembali, yg kemudian dapat digabungkan utk membuat UI yg lebih kompleks

React bersifat deklaratif. Artinya:
   - Kita mendeskripsikan seperti apa tampilan UI yg kita inginkan, dan React akan menangani pembuatan dan pembaruan UI tersebut

React tidak membuat asumsi apapun tentang sisa tumpukan teknologi yg kita gunakan utk proyek kita.
   - Kita dapat mengintegrasikan React ke dlm apk apapun, baik itu hanya sebagian dari halaman, seluruh halaman, atau bahkan seluruh apk itu sendiri. React akan sangat cocok.
   - Kita dapat menggunakan React utk membangun apk seluler (mobile app) dengan React Native


Saat kita manjalankan 'npm run dev':
   - File index.html akan ditampilkan di browser (file index.html berisi node DOM root (<div id="root"></div>) dan tag script yg merujuk ke file main.jsx).
   - Kontrol masuk ke main.jsx, React DOM kemudian mengambil App component (file App.jsx) dan menempatkannya di dlm node DOM root (<div id="root"></div>).
   - App component (file App.jsx) berisi HTML & CSS, yg pada akhirnya akan ditampilkan di browser.
   - Terakhir, server pengembangan Vite memantau perubahan pada file-file ini dan otomatiis memperbarui browser.

Itulah yg terjadi saat kita menjalankan 'npm run dev'


Components

Component adalah bagian dari user interfaces yg memiliki logika dan tampilan tersendiri. Ukurannya bisa sekecil tombol atau sebesar satu halaman penuh.

Component dapat digunakan kembali. Kita dpt mengggunakan komponen yg sama berulang kali dgn data yg sama atau berbeda.

Component hanyalah sebuah fungsi javascript yg me-return beberapa kode HTML (JSX) yg menjelaskan apa yg seharusnya muncul di layar.

Nama komponen dimulai dgn huruf kapital. Inilah cara React membedakan antara custom component dengan elemen HTML bawaan.

Component dapat bersarang di dlm Component lain.
File component harus menggunakan ekstensi '.jsx'

Ketika menggunakan export default, kita bisa bebas mengubah namanya pada saat import.

Sedangkan named export, tidak bisa mengubah namanya sembarangan pada saat import

JSX adalah ekstensi sintaks utk javascript yg memungkinkan kita menulis markup yg  terlihat mirip dengan HTML, tetapi dgn kekuatan penuh javascript di baliknya.

JSX is syntactic sugar

Ketika kita save file kita, sebuah alat bernama transpiler secara otomatis mengubah semua JSX kita menjadi createElement():
   JSX => Transpiler => createElement()

React memisahkan berdasarkan masalah - berdasarkan components (by concerns - by components)

Setiap component berisi markup maupun logika yg dibutuhkannya

Di javascript, kita tidak dapat me-return dua object atau lebih dari sebuah fungsi tanpa membungkusnya ke dalam sebuah array.

Begitu juga dengan JSX, kita tdk dpat me-return dua atau lebih element tanpa membungkusnya dlm parent element.

Komponen React hanyalah fungsi javascript. Dan itu berarti: kita dpt menulis kode javascript di dlm nya seperti halnya fungsi lainnya

Aturan JSX:

   1. Setiap component harus me-return satu elemen akar (single root element):
      - Kita tidak dapat mengembalikan elemen yg terletak berdampingan (side-by-side)
      - Mereka perlu dibungkus dlm container atau
      - Bisa juga mengggunakan <React.Fragment></React.Fragment> utk membungkus beberapa element. Ini adalah komponen yg disediakan oleh React library. React.Fragment mengelompokkan elemen-elemen kita utk pernyataan return, tetapi tdk menambahkan HTML sebenarnnya ke DOM.

Cara singkat membuat <React.Fragment></React.Fragment>:
   <>
      <h1>Hello world</h1>
   </>

   2. Setiap tag harus ditutup dengan benar:
      - Bahkan tag yg tdk memerlukan tag penutup dlm HTML (img, input, br, dll):
         <img src="image.src" alt="image"> // Salah
         <img src="image.src" alt="image" /> // Benar

   3. Nama atribut harus ditulis dlm format camelCase:
      - Karena JSX merupakan ekstensi dari javascript, atribut HTML yg bertentangan dgn keyword javascript memerlukan nama yg berbeda.
      - Dan karena atribut yg ditulis dlm JSX menjadi key of javascript objects dengan React.createElement, maka atribut tersebut juga harus berupa nama variabel javascript yg valid.
         Cth salah:
            <form class="contact-form">
               <label for="email">Email:</label>
               <input type="email" class="form-input" tabindex="1" />
            </form>
         Cth benar:
            <form className="contact-form">
               <label htmlFor="email">Email:</label>
               <input type="email" className="form-input" tabIndex="1" />
            </form>

   4. Kita dpt menyematkan ekspresi javascript langsung di dlm markup kita menggunakan tanda kurung kurawal '{}'.
      - Tanda '{}' adalah jembatan antara JSX dan javascript:
         Cth:
            export const Profile = () => {
               const name = "Rafael";

               return (
                  <h2>{name}</h2>
               )
            }
      - Di dlm '{}' kita dpt memasukkan ekspresi javascript apapun:
         Cth:
            export const Profile = () => {
               const name = "Rafael Torang";
               yearOfExperience = 5;
               isAvailable = true;

               return (
                  <h2>{name}</h2>
                  <p>Started in {2025 - yearOfExperience}</p>
                  <p>Status: {isAvailable ? "Available for hire" : "Not available"}</p>
                  <p>Contact: {nsme.toLowerCase().replace(" ", ".")}@gmail.com</p>
               )
            }

Sama seperti elemen HTML yg memiliki atribut, React component juga dpt memiliki beberapa atribut/props:
   - Kita dapat mengirimkan value javascript apapun dengan props (function, JSX, number, string, boolean, object, array, dll)
   Cth:
         // Root Component \\
      import {Welcome} from './Welcome';

      function App() {
         return (
            <div>
               <Welcome name="Rafael" alias="El" />
               <Welcome name="Bintang" alias="Bibin" />
               <Welcome name="Torang" alias="Tor" />
            </div>
         )
      }
      export default App;

         // Child Element \\
      export const Welcome = ({ name, alias }) => {
         return (
            //  a.k.a = also known as
            <h1>Welcome, {name} a.k.a {alias}!</h1>
         )
      }

Props patterns
   1. Default props:
      - Default value hanya akan digunakan jika prop hilang atau jika kita memberikan nilai undefined
      - Jika kita memberikan nilai null atau 0, default value tdk akan digunakan
         // Parent \\
      import {Greeting} from './Welcome';

      function App() {
         return (
            <div>
               <Greeting name="Bruce" message="Good morning" />
               <Greeting name="Clark" />
               <Greeting message="Goodbye" />
               <Greeting />
            </div>
         )
      }
      export default App;

      // Child \\
      export const Greeting = ({ name='Rafael', message="Hello" }) => {
         return (
            <h2>{message}, {name}</h2>
         )
      }

   2. Forwarding props with spread operator:
      {/* // Parent \\ */}
      import {UserInfo} from './UserInfo';
      import {UserCard} from './UserCard';

      function App() {
         return (
            <div>
               <UserInfo name="Rafael" age={18} city="Jakarta" email="rafaeltorang5@gmail.com" />
               <UserCard name="Rafael" age={18} city="Jakarta" email="rafaeltorang5@gmail.com" />
            </div>
         )
      }
      export default App;

      {/* // Child (UserInfo) \\ */}
      export const UserInfo = ({ name, age, city, email }) {
      return (
         <div>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{city}</p>
            <p>{email}</p>
         </div>
         )
      }

      {/* // Child (UserCard) \\ */}
      import {UserInfo} from './UserInfo';

      {/* export const UserCard = (id, ...rest) */}
      export const UserCard = (props) => {
         return (
            <div>
               <h2>User {id} Details:</h2>
               {/* Menggunakan destructuring biasa: */}
               {/* <UserInfo name={name} age={age} city={city} email={email} /> */}

               {/* Menggunakan spread operator: */}
               <UserInfo {...props} />
               {/* <UserInfo {...rest} /> */}
            </div>
         )
      }

   3. Meneruskan JSX sebagai elemen anak dlm HTML:
      - Saat kita menyusun konten di dlm tag komponen pembuka dan penutup (<CardWrapper></CardWrapper>), React secara otomatis meneruskan konten tersebut sbg prop khusus yg disebut children (children prop).
      - The CardWrapper tdk mempersalahkan apa yg kita berikan sbg child element
      {/* // Parent \\ */}
      import {CardWrapper} from './CardWrapper';

      function App() {
         return (
            <div>
               <CardWrapper title="User Profile">
                  <p>Bruce Wayne</p>
                  <p>batman@jl.com</p>
                  <button>Edit Profile</button>
               </CardWrapper>
            </div>
         )
      }
      export default App;

      {/* // Child (CardWrapper) \\ */}
      export const CardWrapper = ({ title, children }) => {
         return (
            <div className="card">
               <h2>{title}</h2>
               <div className="card-content">{children}</div>
            </div>
         )
      }

   - Children prop bisa menjadi apa saja:
      <CardWrapper title="Simple Card">
         Just some text content
      </CardWrapper>

      <CardWrapper title="Contact Card">
         <p>Bruce Wayne</p>
         <p>batman@jl.com</p>
         <button>Edit Profile</button>
      </CardWrapper>

      <CardWrapper title="User Details">
         <User user={currentUser} />
         <User userStats={userStats} />
      </CardWrapper>

      <CardWrapper title="Empty Card" />

   - Children = slot
      Sebuah komponen dengan prop children adalah komponen yg memiliki slot yg dpt diisi oleh komponen induk dengan konten apapun yg diinginkannya:
         __________
         | Parent |
             |
             | Props
             |
      _______________
      |    Child    |
      |   ______    |
      |  | Slot |---|--- Children
      _______________

   - Kita akan menggunakan pola ini secara konsisten utk hal-hal seperti: layouts, cards, modals, etc (komponen apapun yg membungkus konten lain)


Conditional Rendering (render bersyarat)
   Rendering bersyarat adalah cara kita membuat komponen menampilkan konten yg berbeda berdasarkan kondisi yg berbeda:
      - Menampilkan tombol login jika user belum login
      - Menampilkan profil mereka jika sudah login

   4 cara me-render konten secara kondisional:
      1. Menggunakan if statements
      2. Menggunakan ternary operator (?:)
      3. AND operator (&&) (show or hide)
         (jika true, tampilkan sesuatu. jika tidak, jangan tampilkan apapun)
      4. Menggunakan variabel utk logika yg kompleks
      5. Activity component (React 19.2)
         Ini memberi kita cara baru utk menyembunyikan bagian2 UI kita dan kemudian menampilkannya kembali nanti tanpa menghapusnya sepenuhnya dari DOM.

Cth Conditional Rendering:
   {/* // Parent \\ */}
import { UserDetails } from './UserDetails';

function App() {
  return (
      <div>
         <UserDetails name="Bruce Wayne" isOnline={true} isPremium={true} role={"moderator"} />
         <UserDetails name="Clark Kent" isOnline={false} hideOffline={true} isNewUser={true} role={"admin"} />
      </div>
  )
}

export default App

   {/* // Child (UserDetails) \\ */}
export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser, role }) => {
   let roleBadge = null;
   if (role === "admin") {
      roleBadge = <span>{role}</span>
   } else if (role === "moderator") {
      roleBadge = <span>{role}</span>
   }

   return (
      <div>
         <h3>
            {name}
            {isPremium && <span>⭐</span>}
            {isNewUser && <span>🎉</span>}
            {roleBadge}
         </h3>
         <span>{isOnline ? "Online" : "Offline"}</span>
      </div>
   )

   // if (hideOffline && !isOnline) return null;

   // if (isOnline) {
   //    return (
   //       <div>
   //          <h3>{name}</h3>
   //          <span>Online</span>
   //       </div>
   //    )
   // }

   // return (
   //    <div>
   //       <h3>{name}</h3>
   //       <span>Offline</span>
   //    </div>
   // )
}


Rendering Lists
   Utk merender sebuah list (daftar) di React, kita perlu mengambil data kita, memasukkannya dlm array, dan kemudian mengubah array tersebut menjadi HTML yg kita butuhkan.

   export const ProductList = () => {
   const products = [
      {
         id: 1,
         name: "Laptop",
         price: 10_999.99
      },
      {
         id: 2,
         name: "Computer",
         price: 20_999.99
      }
   ];

   const productElements = products.map(product => (
            <div key={product.id}>
               <h3>{product.name}</h3>
               <p>Price: ${product.price}</p>
            </div>
         ));

   return (
      <div>
         <h2>Our Product:</h2>
         {productElements}
      </div>
   )
}


DI React, saat kita me-render daftar elemen, kita perlu menambahkan prop 'key' ke setiap elemen dgn value yg unik di dlm daftar tersebut.

Darimana biasanya mendapatkan nilai/value utk prop 'key' tersebut?:
   - Jika data kita berasal dari basis data, kita dpt menggunakan key/ID basis data, yg secara alami bersifat unik.
   - Jika data kita dibuat dan disimpan secara lokal (misal: di apk pencatat), kita dpt menggunakan penghitung yg terus betambah (crypto.randomUUID()) atau paket/package seperti uuid.

Rules of Keys:
   1. Prop 'key' ditempatkan pada elemen berulang yg paling luar.
   2. 'key' adalah properti khusus yg digunakan React secara internal. Ini bukan sebuah prop yg kita berikan ke child component dan kemudian kita mendestrukturisasi utk mendapatkan akses ke id.

Why deos React need keys?
   - React menggunakan 'key' utk melacak item dlm daftar/list
   - 'key' sangat penting agar React dpt memperbarui UI secara efisien

'Key' adalah prop khusus yg digunakan React secara internal utk melacak item dlm daftar/list.


Menggunakan index array sebagai key saat me-render list.
   Masalah saat menggunakan index sebagai 'key' adalah:
      - Index mewakili posisi suatu item, bukan item itu sendiri
      - Itu dpt menyebabkan bug yg halus dan membingungkan ketika urutan item berubah dlm list

Kapan menggunakan index sbg 'key' benar2 aman?
   - Item kita tdk memiliki ID unik. Dan jika mereka melakukannya, selalu gunakan itu sbg gantinya.
   - List item kita sepenuhnya statis, kita tidak akan pernah menambah atau menghapus item.
   - List item kita tdk pernah diurutkan ulang atau di-filter.
         Ex: Menu naviigasi (navbar link)

Jika kita pernah melihat perilaku aneh pada daftar kita, seperti data yg melompat antar item, input kehilangan fokus, atau animasi yg bermasalah [Periksa 'key' terlebih dahulu]


Event Handling
   Merespons events di react adalah proses sederhana dengan 2 langkah:
      1. Mendefinisikan sebuah fungsi yang harus dieksekusi ketika event tersebut terjadi. (di React, kita biasanya memberi nama fungsi event handler dgn awalan "handle" diikuti dgn apa yg ditanganinya. cth: handleClick  )
      2. Menetapkan fungsi tersebut ke properti khusus yg diawali dgn "on".
React mendukung semua event yg biasa kita gunakan di javascript biasa (onChange, onSubmit, onMouseEnter for hovering, etc).

Event handler memiliki akses ke semua variabel dan props komponen, karena semuanya didefinisikan di dlm komponen.


Ketika kita memanggil fungsi setter (setCount, setMessage, etc):
    - React memperbarui nilai state
    - React me-render ulang komponen tersebut
    - useState memberikan kita value/nilai baru
    - UI kita menampilkan value yg telah diperbarui

Kita juga dpt memberikan function sbg nilai/value awal
    cth:
        const [count, setCount] = useState(() => {
                console.log("Initial state function called");
                return 0;
            });

    React hanya akan memanggil fungsi ini pada saat rendering awal, dan bukan pd setiap rendering ulang

Pola ini disebut: Lazy initialization (inisialisasi tunda)

Ini berguna ketika kita perlu melakukan komputasi yg mahal (expensive computation) utk menghitung initial state:
    cth:
        - Membaca nilai dari local storage
        - Mengambil data dari API
        - Melakukan komputasi berat lainnya


useState summary:
    - Utk menambahkan state ke sebuah komponen, import useState from react dan panggil dengan initial value
    - Kita juga bisa meneruskan a function utk lazy initialization
    - Fungsi useState mengembalikan array dgn 2 item: [currentValue, setterFunction]
    - Gunakan array destructuring utk memberi nama pada elemen2 tersebut
    - Gunakan value dari state tersebut di JSX kita
    - Call fungsi setter utk memperbarui state dan memicu rendering ulang
    - Kita dpt memiliki beberapa variabel useState, yg masing2 mengelola datanya sendiri
    - Multiple instance (beberapa instance) dari suatu komponen masing2 meiliki status lokalnya sendiri


Bagaimana cara kerja update state?

Update UI merupakan proses 3 fase (3-phase process):
    - Fase pemicu (trigger phase)
    - Fase rendering (render phase)
    - Fase commit (commit phase)


Trigger Phase (fase pemicu)
    Ini terjadi saat kita memanggil setter function, cth: setCount()
    Kita belum mengupdate UI (Kita hanya memberitahu React bahwa komponen ini perlu diperbarui)
    React kemudian memasukkan komponen tersebut ke dlm daftar komponen yg perlu di re-run (dijalankan ulang)


Render Phase (fase render)
   React memanggil function komponen kita lagi
   React secara harfiah menjalankan ulang function tersebut utk mencari tahu bagian UI mana, jika ada, yg perlu di update
   Perlu diingat: Re-running function tersebut tidak langsung mengubah apa yg ditampilkan di layar (itu terjadi pada fase commit).


Commit Phase (fase commit)
   React mengambil perubahan yg yg telah di-calculated selama fase render dan menerapkannya ke DOM


Bagaimana setCount update bekerja:
   1. Kita memanggil setCount(count + 1) [Trigger phase]
   2. React menandai komponen kita sbg komponen yg perlu di update [Trigger phase]
   3. React memanggil function komponen kita lagi [Render phase]
   4. Function kita me-return JSX baru dgn count yg diupdate [Render phase]
   5. React membandingkan hasil render ini dgn hasil render sebelumnya dan mencari tahu apa yg berubah [Render phase]
   6. React hanya memperbarui apa yg berubah di DOM sebenarnya.


const handleClick = () => {
   console.log("Before setCount, count  is:", count);
   setCount(count + 1);
   console.log("After setCount, count  is:", count);
};
// Result:
// Before setCount, count  is: 0
// After setCount, count  is: 1


Trigger vs Render phase:

   Saat tombol 'Increment' diklik, kita memasuki function handleClick()
   Saat kita menyebutkan setCount, kita resmi memasuki Trigger phase

const handleClick = () => {
   alert("Before setCount, count  is:", count);
   setCount(count + 1); =========>>>>> Memasuki 'Trigger Phase'
   alert("After setCount, count  is:", count);
};

   Pada titik itu, React cukup menandai komponen utk di re-render
      Ini tdk akan:
         - Menghentikan function kita di tengah jalan,
         - Melakukan re-render the component,
         - Lalu kembali melanjutkan function kita
      Sebaliknya:
         - React membiarkan seluruh event handler (handleClick) kita running dari awal hingga akhir menggunakan state saat ini.
   Dan hanya setelah event handler (handleClick) selesai, React melanjutkan ke 'Render phase' dan memanggil komponen kita lagi dengan value yg baru.

Perbaikan kode:
 const [count, setCount] = useState(0);

 alert(`Render phase: Component rendering with count = ${count}`);

const handleClick = () => {
   alert(`Before setCount, count is: ${count}`)
   setCount(count + 1);
   alert(`Still in Trigger phase. After setCount: ${count}`)
};

   Render phase terjadi setelah event handler kita selesai

State sebagai sebuah snapshot:
   - Di React, update state tdk terjadi scr instan
   - Saat kita memanggil setState(), kita menjadwalkan pembaruan utk rendering berikutnya
   - Di dlm render kita saat ini, value state tdk akan berubah
   - Ada snapshot, dan snapshot tdk berubah
   - Jadi, jika kita me-log (console.log) count di dlm event handler, kita akan selalu mendapatkan value yg sama
   - Anggap seperti mengambil foto. Jika kita mengambil foto, orang2 di dlmnya tdk akan bergerak, bahkan jika orang2 tersebut pergi
   - State dlm render itu seperti foto tersebut, semuanya membeku pd momen itu

Value useState tdk akan pernah berubah di dlm sebuah proses render, bahkan jika event handler nya bersifat 'Asynchronous' (cth: setTimeout, etc)


Meneruskan sebuah function ke setter function (setState) akan memberikan kita state terbaru
    cth:
        setCount((prev) => {
            console.log("Count is: ", prev);
            return prev + 1
        });

Meneruskan value ke function setState:
    Saat kita memanggil setCount(count + 1):
        - React akan mengambil value yg kita berikan dan menampilkannya - Anggap: "Set count to 1"
    Saat kita memanggil setCount(count + 5):
        - React akan memberikan isyarat value lain - Anggap: "Set count to 5"
    Saat kita memanggil setCount(count + 10):
        - React akan memberikan isyarat value lain - Anggap: "Set count to 10"

    Value terakhir yg akan digunakan, dan dgn value 'count = 0' pd fase render tersebut, value akhir count menjadi 10

Sebaliknya, jika meneruskan function ke setState:
    Saat kita memanggil setCount((prev) => prev + 1):
        - React tdk akan langsung menjalankan function tersebut. Sebaliknya ia memberi isyarat pada function itu sendiri - Anggap prev => prev + 1
    Saat kita memanggil setCount((prev) => prev + 5):
        - React memberi isyarat pada function itu sendiri - Anggap prev => prev + 5
    Saat kita memanggil setCount((prev) => prev + 10):
        - React memberi isyarat pada function itu sendiri - Anggap prev => prev + 10

    | prev => prev + 1 |  -  | prev => prev + 5 |  -  | prev => prev + 10 |

    Kemudian setelah event handler kita selesai, React akan menelusuri daftar update-nya.
    Utk setiap updater function:
        - Ia mengambil value state saat ini
        - meneruskannya ke updater function sbg prev value
        - Dan menggunakan return value dari updater function sbg nilai state berikutnya:
            - Start with prev = o
            - First updater: return prev + 1 = 1
            - Second updater: now prev = 1, return prev + 5 = 6
            - Second updater: now prev = 6, return prev + 10 = 16
        Setiap updater menggunakan hasil terbaru dari updater sebelumnya, bukan snapshot dari event handler

const handleClickSnapshot = () => {
    // Semuanya menggunakan count dari snapshot yg sama (0)
    setCount(count + 1); // 0 + 1 = 1
    setCount(count + 5); // 0 +  = 5
    setCount(count + 10); // 0 + 10 = 10
    // Yg terakhir yg akan dipilih utk menampilkan count di browser => 10
}

const handleClickUpdater = () => {
    // Setiap updater function menggunakan hasil terbaru dari function sebelumnya
    setCount((prev) => prev + 1); // 0 + 1 = 1
    setCount((prev) => prev + 5); // 1 + 5 = 5
    setCount((prev) => prev + 10); // 6 + 10 = 16
    // Jadi, React memberi isyarat kpd updater function dan kemudian menjalankannya secara berurutan, menambah value berdasarkan prev value
}


Kapan harus memberikan value utk mengatur state dan kapan kita harus memberikan function?
    Jika state baru kita bergantung pada state sebelumnya, gunakan updater function:
        - setCount( (prev) => prev + 1)
        - setCount( (prev) => prev * 9)
    Jika kita hanya menatapkan value secara langsung, sintaks standar sudah cukup:
        - setCount(5)
        - setName("John")


Batching
    - React menunggu hingga event handler kita selesai
    - Mengumpulkan semua update state
    - Dan menerapkannya sekaligus dlm satu proses render

Bayangkan seperti seorang waiter di resto:
    - Seorang waiter tdk akan berlari ke dapur setiap kali kita menyebutkan nama sebuah hidangan
    - Mereka menungggu hingga semua org di satu meja selesai memesan
    - Lalu membawa seluruh pesanan ke dapur sekaligus

React melakukan hal yg sama dgn update state. Ini adalah optimasi yg sgt cerdas.


useState with Objects

Setiap kali kita perlu memperbarui sebuah object dlm state, kita perlu menyalin field yg sdh ada terlebih dahulu, kemudian menimpa properti yg perlu kita ubah.
   Caranya menggunakan spread operator (...):
   const [user, setUser] = useState({
        name: "Bruce Wayne",
        age: 30,
        email: "bruce@wayne.com",
    });

   const updateName = () => {
      setUser({
         ...user,
         name: "Clark Kent"
      });
   };

Selalu gunakan setter function utk memperbarui state, karena mengubah state secara langsung tdk akan memicu re-render.

Memanggil setter function dgn sebuah objek, akan mengganti seluruh objek tersebut.

Utk mempertahankan field yg sdh ada, selalu salin objek lama terlebih dahulu (menggunakan spread operator).

Utk nested objects, salin properti objek luar dan properti nested object nya.


useState with Arrays

Intinya:
   - Array dlm state, bekerja sama seperti objek
   - Selelu gunakan setter function utk memperbarui state karena mengubah array secara langsung tdk akan memicu re-render
   - Gunakan spread operator (...) atau method concat() utk menambah item array
   - Gunakan method filter() utk menghapus item
   - Gunakan method map() utk meng-update item


Berbagi state antar komponen di React

Lifting state up
   Ketika beberapa komponen membutuhkan data yg sama, kita memindahkan state ke parent umum terdekat.

Share state summary:
    - Ketika dua atau lebih komponen membutuhkan data yg berubah-ubah yg sama,
    - Angkat state nya ke atas (Tempatkan state pada induk umum terdekat (common parent)
    - Komponen dgn useState memiliki data dan mengontrol bagaimana data tersebut berubah
    - Children components menerima state sbg props
    - Children components me-request perubahan dgn memanggil setter function yg diwariskan dari parent Component


useReducer() Hook
   useReducer hook menggunakan konsep inti yg sama dengan array.reduce(), tetapi menerapkannya pada manajemen state, bukan pada array

Struktur useReducer() vs Array.reduce():
   // React useReducer
   useReducer(reducer, initialState);

   // Array reduce
   array.reduce(reduce, initialValue);

Array.reduce, reducer menerima:
   - Akumulator
   - currentValue

useReducer, reducer menerima:
   - State
   - Action

Action:
   Action adalah cara utk menjelaskan apa yg terjadi di app kita
      Anggap saja ini seperti pesan yg mengatakan:
         - "User meng-klik tombol ini"
         - "Formulir ini telah dikirimkan"
         - "Tambahkan item baru ke list/daftar"
   Reducer mengamati action ini dan memutuskan bagaimana cara memperbarui state.

Result yang didapatkan dari useReducer() vs Array.reduce():
   - Array.reduce me-return satu value/nilai
   - useReducer me-return array dgn dua item:
      const [state, dispatch] = useReducer(reducer, initialState);
      1. Current state (sama seperti pada useState)
      2. Dispatch (ini adalah function yg akan kita gunakan utk mengirimkan actions yg telah kita kirim ke reducer)

Action:
   - Reducer function menerima current state dan me-return new state
   - Agar transisi state ini terjadi, kita membutuhkan sesuatu utk memberi tahu reducer jenis transisi apa yg harus dilakukan
   - Itulah fungsi dari parameter action
   - Anggap action sbg instruksi utk reducer function
   - Berdasarkan apa yg ditentukan oleh action tersebut, reducer melakukan transisi state yg diperlukan.


Mekanisme useReducer() :
   - Action menggambarkan apa yg terjadi
   - Dispatch mengirimkan actions tersebut ke reducer
   - Reducer menentukan cara memperbarui state
   - Komponen tersebut di render ulang dgn state baru

Action bisa berupa objek
   - Kita akan menggunakan action.type utk mendeskripsikan apa yg terjadi dan action apa yg diambil
   - action.payload utk membawa data tambahan seperti: (add product, remove, dll)

Jenis 'Action' biasanya ditulis dgn upperCase: ("ADD_ITEM", "REMOVE_ITEM", etc). Bisa juga menggunakan variabel const utk menghindari kesalahan penulisan dan membuat kode lebih mudah dipelihara: const ADD_ITEM = "ADD_ITEM", etc.

Properti 'payload' juga merupakan sebuah konvensi, kita bisa menyebutnya sebagai 'data' atau apapun, tetapi payload adalah apa yg diharapkan oleh sebagian besar developer

useReducer() complex - summary:
   - useReducer() dpt menerima objek state yg kompleks dgn banyak value terkait
   - Action dpt membawa data tambahan menggunakan payload property
   - Seluruh logika pembaruan/update state terpusat di reducer function
   - Related values (nilai2 terkait) selalu di-update bersamaan


useReducer() lazy initialization:
    - Kita melakukan pekerjaan expensive atau eksternal hanya sekali
    - React menggunakan kembali result tersebut pd setiap rendering berikutnya
    - Ingat bahwa argumen init sepenuhnya opsional
    - Sebagian besar waktu, cukup dgn memberikan simple value sbg argumen kedua utk menggunakan useReducer
    - useReducer menerima argumen ke-3 opsional, yaitu: init function
    - React memanggil init function sekali, dgn meneruskan argumen ke-2 kepadanya
    - Apapun yg di-return oleh init akan menjadi initialState yg sebenarnya
    - Init function hanya running saat komponent dipasang (mounts), bukan setiap kali komponen di-render
    - Ini ideal utk expensive initial computations (komputasi awal yg mahal) atau membaca dari sumber eksternal seperti: localStorage


implementing useState() with useReducer()

useState sebenarnya dibangun di atas useReducer

useState() and useReducer()
   useState sebenarnnya hanyalah versi khusus dari useReducer, dimana:
   - Reducer selalu me-return action sbg state yg baru
   - Jika action tersebut berupa function, maka function tersebut akan dipanggil dgn state saat ini terlebih dahulu
   - Dispatch function akan dibungkus dlm setState function utk API yg lebih baik

   useReducer adalah hook yg lebih mendasar.
   useState hanyalah fitur tambahan yg dibangun di atasnya utk kasus penggunaan (use case) paling umum, yaitu: menggantikan state dgn dgn new value (nilai baru)


useState() vs useReducer()
    - Kedua hook tersebut mengelola state
    - Keduanya akan merender ulang komponen kita
    - Keduanya menyelesaikan masalah kode yg sama
    - Namun masing2 bersinar dlm situasi yg berbeda


useState() vs useReducer() dalam hal menulis kode:
    useState:
        - Kita dpt memulai dan beroperasi dgn cpt
        - Deklarasikan variabel state dan setter function, dan kita siap utk memulai

    useReducer:
        Biasanya diperlukan lebih banyak setup:
            - A reducer function
            - An initial state
            - Dispatching actions

    Untuk keadaan yg cpt dan sederhana, useState hampir selalu merupakan pilihan yg lebih mudah


useState() vs useReducer() dalam hal membaca/keterbacaan kode:
    useState:
        - useState sgt mudah dibaca dan update nya sederhana
        - Tetapi jika komponen kita memiliki beberapa setter function yg tersebar di seluruh JSX dan event handlers, segalanya mulai menjadi lebih sulit dipahami

    useReducer:
        Biasanya diperlukan lebih banyak setup:
            - Komponen menjadi lebih bersih karena logic berada di dlm reducer
            - Komponen kita hanya mendeskripsikan apa yg terjadi, bukan bagaimana cara meng-update state, yg membuat komponen itu sendiri lebih mudah dibaca


useState() vs useReducer() dalam hal debugging:
    useState:
        - Updates dpt disebar ke seluruh komponen
        - Jika terjadi kesalahan, kita mencari-cari di berbagai function utk melacak masalahnya

    useReducer:
        Biasanya diperlukan lebih banyak setup:
            - Semua updates melewati satu saluran tunggal, yaitu reducer function
            - Kita cukup menambahkan perintah console.log di bagian atas dan kita akan mendapatkan history lengkap tentang:
                - Action apa yg dikirim
                - Previous state
                - Next state


useState() vs useReducer() dalam hal Testing:
    useState:
        - Logic menjadi lebih erat terkait dgn komponen
        - Membuat pengujian terisolasi (isolated tests) menjadi sedikit lebih sulit

    useReducer:
        - Reducer hanyalah javascript function biasa:
            reducer(previousState, action) -> newState
        - Tidak ada keterlibatan React sama sekali
        - Kita dpt menguji seluruh logika state kita tanpa perlu merender satu komponen pun


Cara praktis utk memutuskan hook mana yg akan digunakan:
    Gunakan useState ketika:
        - Kita memiliki independent values (nilai2 independen) yg sederhana
        - Update state yg mudah
        - Kita mengelola 1-3 bagian state yg saling terkait dan kita menginginkan solusi paling sederhana yg berfungsi

        Pertimbangkan utk menggunakan useReducer saat:
            - Kita mengelola objek / array yg kompleks
            - Kita memiliki 4+ state values yg terkait
            - Update state melibatkan percabangan atau logika yg rumit
            - Beberapa value harus diupdate secara bersamaan
            - Debugging menjadi semakin sulit


Context and useContext Hook
   Context adalah fitur React yg memungkinkan kita berbagi data di seluruh struktur komponen tanpa harus meneruskan props secara manual melalui setiap komponen perantara.

Context:
   - Context memungkinkan kita menyiarkan (broadcast) suatu value pada tingkat tinggi (high level)
   - Komponen apapun yg bersarang di dlm nya dpt subscribe nilai tersebut secara langsung
   

Refs and useRef Hook
   - Ref adalah cara utk menyimpan value yg dapat diubah yang:
      - Tetap ada di seluruh proses rendering
      - Tidak menyebabkan re-render ketika value nya berubah
   - React memberi kita 'ref' melalui sebuah hook yg disebut: useRef
   - Ref digunakan utk menyimpan value yg tdk memengaruhi UI tetapi perlu dipertahankan di antara proses rendering:
      - State digunakan utk rendering
      - Ref digunakan utk mengingat 
   - Kita dpt membuat 'ref' menggunakan useRef hook
   - Function ini menerima initialValue dan returns objek dgn satu property bernama 'current' yg menyimpan value 'ref' tersebut
   - Kita dpt menggunakan ref utk meyimpan values seperti: interval IDs, timeout IDs, previous values, etc


Manipulating the DOM with Refs 
            
- Refs adalah an escape hatch yg 
- Diperlukan, tetapi tetap saja escape hatch
- Kita sebaiknya menggunakannya dgn hemat
- Jika kita terus-menerus memanipulasi DON, itu berati kita sedang melawan React, alih-alih bekerja-sama dengannya.    






Proyek yang sangat bagus untuk menguji pemahaman React Anda adalah membuat aplikasi "Task Tracker & Focus Timer" (Aplikasi Pengelola Tugas + Timer Pomodoro).Proyek ini sengaja dirancang agar Anda bisa mempraktikkan hampir semua konsep dasar hingga lanjutan yang baru saja Anda pelajari.📋 Spesifikasi Fitur ProyekAnda diminta untuk membuat aplikasi satu halaman (Single Page Application) yang memiliki fitur berikut:Manajemen Tugas (CRUD Sederhana)Menambahkan tugas baru ke dalam daftar.Menampilkan daftar tugas yang sudah dibuat.Menandai tugas sebagai "Selesai" (mengubah statusnya).Menghapus tugas dari daftar.Timer Pomodoro (Focus Timer)Tombol untuk memulai, menjeda (pause), dan mengatur ulang (reset) timer 25 menit.Ketika waktu habis, tampilkan notifikasi sederhana (misalnya teks "Waktu Fokus Selesai!").Sinkronisasi Tugas AktifPengguna bisa memilih salah satu tugas dari daftar untuk dipasangkan ke Timer. Tugas yang dipilih akan tampil sebagai "Tugas yang Sedang Dikerjakan" di atas timer.💡 Konsep React yang Harus Anda TerapkanUntuk menyelesaikan tugas ini, Anda wajib menerapkan konsep-konsep berikut di dalam kode Anda:useState: Digunakan untuk menyimpan array daftar tugas, status timer (menit & detik), dan tugas yang sedang aktif.useEffect: Digunakan untuk menjalankan hitung mundur timer setiap detiknya (menggunakan setInterval) ketika timer dalam posisi aktif. Jangan lupa menuliskan fungsi cleanup untuk membersihkan interval agar tidak terjadi kebocoran memori (memory leak).State Immutability: Saat menambah atau mengubah status tugas, pastikan Anda menggunakan spread operator (...) dan tidak mengubah (mutate) array state secara langsung.Keys pada List: Saat me-render daftar tugas menggunakan fungsi .map(), pastikan setiap elemen memiliki properti key yang unik (misalnya menggunakan id berbasis Date.now()).🚀 Cara MemulaiBuat proyek baru menggunakan Vite (sangat disarankan karena cepat) di terminal Anda:bashnpm create vite@latest task-tracker-timer -- --template react
cd task-tracker-timer
npm install
npm run dev
Gunakan kode dengan hati-hati.Anda bebas menggunakan CSS murni atau framework seperti Tailwind CSS untuk tampilannya. Fokuskan terlebih dahulu pada fungsi dan logikanya agar berjalan dengan benar.Jika Anda sudah selesai membuat kodenya atau merasa bingung di bagian tertentu (misalnya cara membuat fungsi cleanup di useEffect untuk timer), beri tahu saya.Apakah Anda ingin saya memberikan bocoran struktur komponen (susunan file) yang ideal untuk proyek ini, atau Anda ingin mencoba mendesain strukturnya sendiri dari awal?








            