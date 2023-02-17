// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  
  const altura1 = prompt ('Digite a altura ')
  const largura2 = prompt ('Digite a largura ')
  const area= altura1 * largura2
  console.log ( area) 
  


}

// EXERCÍCIO 02
function imprimeIdade(ano,nascimeto) {
  // implemente sua lógica aqui


const anoAtual = Number (prompt('Digite o ano atual', + ano))
const anoDeNascimento = (prompt('Digite seu ano de nascimento ', + nascimeto))
const idade = anoAtual - anoDeNascimento
console.log (idade)


}
 imprimeIdade

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome= prompt ('Qual seu nome ?')
const idade = Number (prompt ('Qual sua idade?'))
const email= prompt ('Qual seu email ?')
const mensagem =(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
console.log(mensagem)
}




// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corfavorita1= prompt ('Digite sua primeira cor favorita')
  const corfavorita2= prompt ('Digite sua segunda cor favorita')
  const corfavorita3= prompt ('Digite sua terceira cor favorita')

const array = [corfavorita1,corfavorita2,corfavorita3]
console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const stringMaiuscula = string.toUpperCase()
return stringMaiuscula



  

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custoEspetaculo = custo
const valorCadaIngresso = valorIngresso
const lucro = custoEspetaculo/valorCadaIngresso

return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  const comparaTamanho = tamanho1 === tamanho2

  return comparaTamanho  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const meuArray = array
  return array[0]
  

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanhoArray = array.length
  const ultimoElemnto = array [tamanhoArray-1]
  return ultimoElemnto  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const lista = array

const primeiraPosicao = lista[0]
const ultimaPosicao = lista[array.length-1]

lista [array.length-1] = primeiraPosicao
lista[0] = ultimaPosicao
return lista
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui


  const comparaString = (string1.toUpperCase() === string2.toUpperCase())
  return comparaString
}

   
  //  
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt (' Digite o ano atual ')
  const anoDeNascimento = prompt ('Qual é o seu ano de nascimneto?')
  const anoEmissaoCarteira = prompt('Digite o ano de emissão do documento')

  /* Para pessoas com menos de 20 anos, ou exatamente 20 anos, 
  deve ser renovada de 5 em 5 anos (se for exatamente 5 anos,
  também deve ser renovada).*/

 const resposta1 = (anoAtual - anoDeNascimento) <= 20 && (anoAtual - anoEmissaoCarteira) >= 5
 const resposta2 = (anoAtual - anoDeNascimento ) >= 20 && (anoAtual - anoDeNascimento) <= 50 && (anoAtual - anoEmissaoCarteira)>= 10
 const resposta3 = (anoAtual-anoDeNascimento) >= 50 && (anoAtual-anoEmissaoCarteira) >= 15
 
 console.log(resposta1 || resposta2 || resposta3)
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 const bissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !=0
 return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

 const maiorDeIdade = prompt( ' Você tem mais de 18 anos?')  
 const escolaridade = prompt(' Você possui ensino médio completo?') 
 const disponibilidade = prompt(' Você possui disponibilidade exclusiva durante os horários do curso?')
 const resposta = (maiorDeIdade === "sim") && (escolaridade === "sim") && (disponibilidade === "sim")
console.log(resposta)
}
