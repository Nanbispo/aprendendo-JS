const nome = 'Julio'
const sobrenome = 'Cesar'
const idade = 60
const peso = 80
const altura = 1.67
let indiceMassaCorporal = peso / (altura * altura)
const anoNascimento = new Date().getFullYear() - idade



//exibindo com crase e string templates (melhor pratica)
console.log(`${nome} ${sobrenome} Nasceu em ${anoNascimento}. tem ${altura} de altura e seu IMC é de: ${indiceMassaCorporal}`)


console.log(nome, sobrenome, 'Nasceu em', anoNascimento)
console.log('tem', altura, 'de altura e seu IMC é de:', indiceMassaCorporal)