console.log("merhaba Ali")



var dolarBugun =9.30
let dolarDun =9.20

{
    let dolarDun =9.10
}

console.log(dolarDun)

//constla veri tanımlan ınca ona artık ir değer atayamazsın sabit sadece onu alır   !!!
const euroDun =11.2


console.log(euroDun)


//array 
//camelCasing ==> değişken tanımlama
//PascalCasing ==> değişken tanımlama
//backendten bana array verecek bu 
//let users = getUsersFromApi()

let konutKredileri = ["konut kredisi","emlak konut kredisis","kamu konut kredisi",["a","b","c"]]
console.log("<ul>")
for(let i=0 ; i<konutKredileri.length ; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)