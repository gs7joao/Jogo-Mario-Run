const mario = document.querySelector(".mario"); // Pegando o elemento Mario
const pipe = document.querySelector(".pipe"); // Pegando o elemento Pipe

const jump = (event) => {
    let key = event.key; 
    
    if(key == 'ArrowUp' || key == ' ') { //Verificando se a tecla digitada é SPACE ou arrowUp
        mario.classList.add('jump'); // Adiciona a class Jump, para disparar animação
        setTimeout(() => {
            mario.classList.remove('jump'); // Remove a Class JUMP depois de meio segundo
        },500)
    }
}

const loopGame = setInterval(() => {

    //Verifica a posicao do pipe se esta colidindo com a posicao do mario caso não tenha pulado
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Acessando todo o style do mario e pegando apenas o bottom

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){ // Verifica a posição do pipe, se esta em conflito com a posição do mario
        pipe.style.animation = 'none'; //Retira a animação, caso o elemento pipe encostar no Mario
        pipe.style.left = `${pipePosition}px`; // Quando bater a posição do pipe fica na frente do elemento

        mario.style.animation = 'none'; //Retira a animação, caso o elemento Mario encostar no pipe
        mario.style.bottom = `${marioPosition+25}px`; // Quando bater a posição do Mario para

        mario.src = './images/mario-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loopGame);
    }

}, 10)


document.addEventListener('keydown', jump); // Disparando a função JUMP ao apertar qualquer tecla do teclado