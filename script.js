const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const bullet = document.querySelector('.bullet');
const startGame = document.querySelector('.start-game');
var cont = document.querySelector('.score-amount');

var soma = Number(cont.textContent)

//funcao de evento de pulo
const jump = () => {
  mario.classList.add('jump');
  
  soma += 1
  cont.textContent = soma
  
  
  document.getElementById('theme').play();
  document.getElementById('jump').play();
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}





// funcao do evento dos obstaculos
const loop = setInterval(() => {
  //condicao da variavel do cano
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const bulletPosition = bullet.offsetLeft;
  const pipePosition = pipe.offsetLeft;
  
  // verifica condicao do jogo se o personagem encostou no cano
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    //mantem a posicao do cano
    
    //remove a animacao do cano
    pipe.style.left = `${pipePosition}px`;
    bullet.style.left = `${bulletPosition}px`
    //remove a animacao do mario
    mario.style.animation = 'none';
    //mantem a posicao do mario
    mario.style.bottom = `${marioPosition}px`;
    
    
    document.getElementById('theme').pause();
    document.getElementById('gameOver').play();
    mario.src = './imagens/marioGameOver.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '80px';
    
    startGame.src = './imagens/Over.png';
    // gameover.src = './imagens/Over.png' ;
    
    //para o loop
    
    clearInterval(loop);
    
    //recarrega a pagina
    document.addEventListener('keydown', () => {
      location.reload();
    });
  }
  
  
  if (bulletPosition <= 120 && bulletPosition > 0 && marioPosition < 80) {
    
    //remove a animacao da bala de canhão
    bullet.style.animation = 'none';
    //mantem a posicao da bala de canhão
    bullet.style.left = `${bulletPosition}px`;
    pipe.style.left = `${pipePosition}px`;
    //remove a animacao do mario
    mario.style.animation = 'none';
    //mantem a posicao do mario
    mario.style.bottom = `${marioPosition}px`;
    
    // document.getElementById('bullet').pause();
    
    document.getElementById('theme').pause();
    document.getElementById('gameOver').play();
    mario.src = './imagens/marioGameOver.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '80px';
    
    startGame.src = './imagens/Over.png';
    // gameover.src = '.imagem/Over.png';
    

    //para o loop
    
    clearInterval(loop);
    
    //recarrega a pagina
    document.addEventListener('keydown', () => {
      location.reload();
    });
  }
  
}, 10); //variavel do loop
  


 



document.addEventListener('keydown', jump);




























