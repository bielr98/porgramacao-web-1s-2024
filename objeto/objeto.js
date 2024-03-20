let calculadora = {
    numeroA: 0,
    numeroB: 0,
    somar: function(){
       return this.numeroA + this.numeroB;
    }
};

calculadora.numeroA = 2;
calculadora.numeroB = 3;

console.log(calculadora.numeroA + calculadora.numeroB);
console.log(calculadora.somar());

const pessoa = {
    nome: "Gabriel Ribeiro",
    cpf: "123456788",
    telefone: "6199999"
}
console.log(pessoa)

for (const key in pessoa) {
    // console.log(key)
    console.log(key + ': ' + pessoa[key] )
}

let arr = [0, 1, 23, 24, 25, 100, 200];
for (const key in arr) {
    console.log(key + ': ' + arr[key] )
}

for (let i = 0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i] )
}



