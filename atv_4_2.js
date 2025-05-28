// Atividade 4.2

// 2 Variáveis
// Operador Aritmético (+,-,*,/)
// Operador Lógico (&&, ||)
// Estrutura Condicional (if, else if, else)
// Exibição (console.log())

// Programa de Notas

nota1 = 4 // Variável 1
nota2 = 7 // Variável 2

notas_media = nota1 + nota2 / 2 // Variável de cálculo de média das notas

console.log("Programa de Notas") // Título
console.log("--------------------") // Divisão :D
if(nota1 >= 7){ // SE a nota1 for maior ou igual a 7...
    console.log("Nota 1: Você está na média. (", nota1, ")") // Mostra mensagem de estar na média e a nota.
}
else if(nota1 < 7){ // SE a nota1 for menor que 7...
    console.log("Nota 1: Você está reprovado. (", nota1, ")") // Mostra mensagem de estar reprovado e a nota.
}
if(nota2 >= 7){ // SE a nota2 for maior ou igual a 7...
    console.log("Nota 2: Você está na média (", nota2, ")") // Mostra mensagem de estar na média e a nota.
}
else if(nota2 < 7){ // SE a nota2 for menor que 7...
    console.log("Nota 2: Você está reprovado. (", nota2, ")") // Mostra mensagem de estar reprovado e a nota.
}

console.log("--------------------") // Divisão :D

if(nota1 >= 7 && nota2 >= 7){ // SE a nota1 e a nota2 forem maiores ou iguais a 7...
    console.log("Média das Notas: ", notas_media) // É mostrado a média de ambas
}
else{ // SE NÃO...
    console.log("Média das Notas: x") // Não mostra :D
}

// aababbaabbab 2 códigos pq eu achei o primeiro muito simples >:D