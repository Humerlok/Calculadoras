
const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'pink', 'orange', 'black', 'grey', 'white', 'coral', 'brown', 'DarkSlateGray', 'lime', 'olive', 'gold', ' silver', 'sienna', 'chocolate', 'indigo', 'magenta', 'cyan', 'violet', 'HotPink', 'crimson', 'DarkRed', 'salmon', 'GhostWhite', 'beige', 'moccasin', 'lavender']
const btn = document.getElementById('btn')


function corRandom(){
    return Math.floor(Math.random() * cores.length) // pega numero randomico com o tamanho da variavel cores, o math.floor é para dar numeros redondos
}

btn.addEventListener('click', function(){ //fica escutando esperando por um click no botão do html, quando acontece ele executa a função
    const randomColor = corRandom() 
    document.body.style.background = cores [randomColor] // muda a cor no arquivo estilo para uma cor da variável cores

    document.getElementById('cor').innerHTML = cores [randomColor]
})
