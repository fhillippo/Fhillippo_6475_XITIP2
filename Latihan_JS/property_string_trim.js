const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat ", (kalimat) => {
    // gunakan method trim untuk menghapus kalimat spasi awal dan akhir kalimat
    const kalimatTrimed = kalimat.trim();
    console.log(`Kalimat setelah di-trim ${kalimatTrimed}`);
    rl.close();
})