let calc = require("./calc")
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

