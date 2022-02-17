function greetCrew(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja Bem-vindo", "Arthur", "Jake", "Melissa")

//***O operador spread e uma function pode ser um 
//rest param, onde um parámetro considera todo od demais após a quantidade de parametros anteriores * /

//Lembrando que deve ir sempre no final de uma função, pois ele conta os parametros que sobram até o final deles.


// o rest param transforma todos os prarametros que estao sobrando entre a implementação e a chamada, em vetor.