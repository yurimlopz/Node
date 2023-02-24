/* let calc = require("./calc")
console.log(calc)
let args = process.argv.slice(2);
console.log(args);

const indexargs0 = Number(args[0]);
const indexargs1 = Number(args[1]);
const indexargs2 = args[2];
let validacao = indexargs2.toUpperCase();
let resultado = null;

if(validacao == "S"){
    resultado = calc.soma(indexargs0,indexargs1);
}else if(validacao == "M"){
    resultado = calc.multi(indexargs0,indexargs1);
}else{
    console.log("Favor Selecionar se deseja soma ou multiplicação");
}


console.log(resultado);

 */

let fs = require('fs');

let args = process.argv.slice(2);

let filename = args[1];

let teste = process.argv;
console.log(teste)

fs.readFile(filename, "UTF8", (error, data) =>{

    if(error) throw error;

    fs.writeFile(filename + "_Uppercase", data.toUpperCase(), (error) =>{
        if(error) throw error;

        console.log("Arquivo Gerado com sucesso")
    })
})
 