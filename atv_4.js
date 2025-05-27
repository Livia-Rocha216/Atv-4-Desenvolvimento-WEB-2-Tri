// Atividade 4

// 2 Variáveis
// Operador Aritmético (+,-,*,/)
// Operador Lógico (&&, ||)
// Estrutura Condicional (if, else if, else)
// Exibição (console.log())

let nome = "MoonBe" // Variável 1
let ano_nascimento = 2011 // Variável 2

let idade = 2025 - ano_nascimento // Variável com Operador Aritmético (subtração)

if(nome == "MoonBe" && ano_nascimento == 2011){ // Condicional SE (if) o nome for MoonBe E (&&) o ano de nascimento for 2011:
    console.log("-------------")
    console.log("Nome: ", nome)
    console.log("Idade: ", idade)
    console.log("-------------")
    console.log("Seja bem-vinda, Be.") // Console logs pra mostrar uma ficha de boas vindas.
}
else{
    console.log("Da o fora daqui >:c") // Fim da condicional, SE NÃO (else) [...], mensagem pra te expulsar.
}