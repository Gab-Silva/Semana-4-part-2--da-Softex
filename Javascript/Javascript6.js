// imprima na tela a tabuada do número 8
let multi = 0
let soma = 0
let ola = 11

do {
    document.write("8 x " + multi + " = " + 8*multi + "<br>")
    multi++
}  while (multi <= 10)

    document.write("<br>")

    for (index = 0; index <= 100; index+=2) {
    document.write(index + ", ")
    }

    document.write("<br>" + "<br>")

    for (number = 1; number <= 10; number++) {
        soma += number
    }
    document.write(soma)
    document.write("<br>" + "<br>")

    while (ola > 0) {
        document.write("Olá, usuário! <br><br>")
        ola--
    }