const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan sebuah kata yang ingin anda cari: ", (kataCari) => {
        // gunakan method lastindexof untuk mencari kataCari dalam kalimat
        const indeksKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks terakhir: ${indeksKataTerakhir}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    })
})