
console.log("CASE 1: USER DATA CLEANER");

const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedString = rawNames.trim();
const namesArray = cleanedString.split(",");

const formattedNames = namesArray.map(name =>
    name.trim().toLowerCase()
);

const result = formattedNames.join(" | ");

console.log("Array nama:", formattedNames);
console.log("Hasil akhir:", result);


console.log("\nCASE 2: E-COMMERCE PRODUCT FILTER");

const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

const activeProducts = products.filter(
    product => product.active === true
);

const activeProductNames = activeProducts.map(
    product => product.name.toUpperCase()
);

const totalPrice = activeProducts.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Produk aktif:", activeProducts);
console.log("Nama produk:", activeProductNames);
console.log("Total harga produk aktif:", totalPrice);
