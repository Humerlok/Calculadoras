
function cores(){


    function gerarHexadecimalAleatorio(tamanho) {
        let resultado = '';
        const caracteres = '0123456789ABCDEF';
        for (let i = 0; i < tamanho; i++) {
            resultado += caracteres[Math.floor(Math.random() * 16)];
        }
        return resultado;
    }
    
    let cores = '#'+gerarHexadecimalAleatorio(6)

    document.body.style.background = cores// muda a cor no arquivo estilo para uma cor da variável cores

    document.getElementById('cor').innerHTML = cores
    

}