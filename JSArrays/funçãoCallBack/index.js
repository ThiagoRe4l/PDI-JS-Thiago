const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)
//const arraySomada = arrayNums.map(num => num * 10) Também é uma opção

console.log(arraySomada)