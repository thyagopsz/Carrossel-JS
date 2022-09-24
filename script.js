const images = [
    {
        imagem: 'https://via.placeholder.com/600x400.png/00f/?text=1'

    },
    
    {
        imagem: 'https://via.placeholder.com/600x400.png/f0f/?text=2'
    },
    
    {
        imagem: 'https://via.placeholder.com/600x400.png/00faa/?text=3'
    },
    
    {
        imagem: 'https://via.placeholder.com/600x400.png/c600faa/?text=4'
    },

        
    {
        imagem: 'https://via.placeholder.com/600x400.png/f5fdda/?text=5'
    },

        
    
]
let pos = 0;

//DOM

const btnAnterior = document.querySelector('.control-container-left');
const btnProximo = document.querySelector('.control-container-right');

function criarBullets(){
    const bullets = document.querySelector('.bullets');

    for(let i = 0;i<images.length;i++){
        bullets.innerHTML += `<span class="bullet" onClick="inserirImagem(${i})"></span>`;
    }
}
function limparSelecao(bullets){
    bullets.forEach((bullet) => {
        bullet.classList.remove('selected');
    })
}
function passarImagem(comando){
    const bullets = document.querySelectorAll('.bullet');
    limparSelecao(bullets);
    if(comando == "proximo"){
        console.log('pos prox (antiga)', pos);
        if(pos >= images.length - 1){
            pos = 0;
        }else{
            pos+=1;
        }
        console.log('pos prox (nova)', pos);
    }else if(comando == "anterior"){
        console.log('pos ant (antiga)', pos);
        if(pos <= 0){
            pos = images.length - 1; 
        }else{
            pos-=1;
        }
        console.log('pos ant (nova)', pos);
    }

    inserirImagem(pos);
    bullets[pos].classList.add('selected');
}

function inserirImagem(pos){
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.backgroundImage = `url('${images[pos].imagem}')`;
}

btnAnterior.addEventListener('click' , () => {
    passarImagem("anterior");  
})

btnProximo.addEventListener('click' , () => {
    passarImagem("proximo");
})


window.onload = ()=>{
    criarBullets();
    inserirImagem(pos);
}
