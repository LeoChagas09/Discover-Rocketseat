// Criando e adicionando elementos

// createElement
// const div = document.createElement('div');
// div.innerText = "Ola Devs!!"

// append prepend
// const body = document.querySelector('body')
// const script = document.querySelector ('script')
// body.insertBefore(div,script)

// Eventos
// function print(){
//     console.log('print')
// }

const input = document.querySelector('input')

// input.onkeypress = function(){
//     console.log('rodei')
// }

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseover', print)

// function print(){
//     console.log('print')
// }

input.onkeydown = function(event){
    console.log(event.key)
}