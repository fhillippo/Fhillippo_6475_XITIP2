const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal: ", (startIndex) => {
        rl.question("Masukan indeks akhir ", (endIndex) => {
            // Konversi nilai indeks ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // Gunakan method susbtring untuk mengambnil substring dari startInkex hingga endIndex
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`hasil substring dari indkes ${startIndex} hingga ${endIndex}: ${substringResult}`);
            rl.close();
        });
    });
});