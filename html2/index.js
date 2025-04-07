console.log('JavaScript funcionando')

function esconde(){
    let itemName = 'Pen'
    let itemPrice = 3;
    let itemAvaliable = true;
    let itemColor = 'Blue'

    let pen = {
        itemName: 'Pen',
        itemPrice: 3,
        itemAvaliable: true,
        itemColor: 'Red'
    }

    console.log(pen)

    let listaItens = ['Pen', 'Pencil', 'Rubber']
    listaItens[2] = 'Scisors'
    console.log(listaItens)
}

function saleStatus (status, total) {
    console.log('Transaction ' + status + '! Total Amount:($) ' + total);
}

function percentage10(price) {
    return price - (price * 10 / 100)
}
//++ adciona 1
//-- tira 1

function strictLoose(){
    let num1 = 6
    let num2 = 5
    let num3 = '6'
    let total = num1 + num2;

    console.log(++total)

    console.log(num1 > num2)

    if (num1 == 6) {
        console.log('O número é igual')
    }

    console.log(num1 === num3) //strict
    console.log(num1 == num3) //loose 
}

function conferirVel() {
    //isso aqui
    let driver = 90
    let speed = driver > 110 ? 'Above':'Bellow'
    // x : x verdadeiro ou fake
    console.log(speed)
}

function operadoresLogicos(){
    // operadores lógicos
    //and &&
    //or ||
    //not !
    let temIdadeMinima = false
    let temTituloEleitor = true
    let podeVotar = temIdadeMinima || temTituloEleitor

    console.log('Pode votar: ' + podeVotar)

    let podeViajar = !podeVotar
    console.log('Pode viajar: ' + podeViajar)
}
function preferencia (){
let corCliente = undefined
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

console.log(corVendida)
}

function verifyAge() {
    let idade = prompt("Digite a sua idade:");

    // Verifique se o usuário é maior ou menor de idade
    if (idade >= 18) {
    alert("Você é maior de idade!");
    } else {
    alert("Você é menor de idade!");
    }
    }

function driveSpeed(){
    let driverSpeed = prompt("Digite a velocidade: ")

    if (driverSpeed >= 110) {
        cosonle.log('Driving too fast')
    } else if (driverSpeed = 'rato') {
        alert('Eu sou uma rata senhora')
    } else if (driverSpeed >= 40 && driverSpeed <= 110) {
        console.log('Ok')
    }
    else{
        console.log('too slow')}
    }

function switchCase(){
let airport = prompt("Airport name: ")
    switch(airport){
        case 'MCO':
            alert('Orlando')
            break
        case 'JFK':
            alert('John F Kennedy')
            break
        case 'SEA':
            alert('Seatle')
            break
        case 'cwb':
            alert('curitiba')
            break
        default:
            alert('Unknown airplane')
    }
}

function forLoop(){
// for ( var cond incremento)
    for (i = 10; i <= 20; i++){
        console.log('Número ', i)
    }
}

function whileLoop(){
    i = 1
    while (i <= 10) {
        console.log('Numero ', i++)
    }
}

function doWhileLoop(){
    //executa dps verifica
    i = 1
    do {
        console.log('Número ', i)
        i++
    } while ( i <= 10)
}

function hide(){
    const myCar = {
        model: 'BMW',
        year: 2023,
        km: 68000
    }
    for (let i in myCar)
        console.log(i, myCar[i])
}

function loopOf(){
const friends = ['Marcos', 'Ana', 'Julia']
for(let i of friends) //key value
    console.log(i)
}