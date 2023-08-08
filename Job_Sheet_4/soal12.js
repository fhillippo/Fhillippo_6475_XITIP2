const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name = "Ella Frye";
rl.question("Masukan nama anda: ", (answer) => {
    name = answer;
    if (name) {
        let message = `Halo ${name} Selamat datang. `;
        console.log(message);
    } else {
        let message = "Halo, tamu Selamat datang. ";
    }
    rl.close();
});