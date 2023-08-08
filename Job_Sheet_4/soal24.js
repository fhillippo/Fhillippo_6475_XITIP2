const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan kalimat sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal: ", (startIndex) => {
        rl.question("Masukan indeks akhir: ", (endIndex) => {
            // konversi nilai ke tipe Number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // gunakan method slice untuk mengambil susbtring dari startIndex hingga endIndex
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });
});