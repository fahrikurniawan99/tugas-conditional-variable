// 1.
const nilai = 90;
const lulus = nilai > 75 ? "lulus" : "tidak lulus";
console.log(lulus);

// 2.
const hargaBarang = 100000;
const uang = 150000;
const beli = uang > hargaBarang && "Beli barang";
const beli2 = uang < hargaBarang || "Tidak beli barang";
console.log(beli);
console.log(beli2);

// 3.
const users = [
  {
    username: "feri",
    email: "feri123@gmail.com",
    password: "feri123",
    status: "user_premium",
  },
  {
    username: "erik",
    email: "erik123@gmail.com",
    password: "erik123",
    status: "user_biasa",
  },
  {
    username: "anto",
    email: "anto123@gmail.com",
    password: "anto123",
    status: "user_biasa",
  },
  {
    username: "faiz",
    email: "faiz123@gmail.com",
    password: "faiz123",
    status: "user_premium",
  },
];

// map
const emailUsers = users.map((user) => user.email);
console.log(emailUsers);

// filter
const userpremium = users.filter((user) => user.status == "user_premium");
console.log(userpremium);
