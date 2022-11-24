const numeros=[5,25,1,10,6,4,11]
const strings=["stringA","Nome","Sobrenome","Data"]
const itens=[13,true,false,"string1",false,"string2",10,5]

const numerosCopia=numeros.slice()
const stringsCopia=strings.slice()
const itensCopia=itens.slice()


numerosCopia.unshift(150)
console.log(numeros, numerosCopia)

stringsCopia.pop()
console.log(strings, stringsCopia)

itensCopia.splice(1,1)
console.log(itens, itensCopia)