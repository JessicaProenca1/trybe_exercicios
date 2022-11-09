import Swal from 'sweetalert2'
import "./style.css"

const ramdom = () => Math.round(Math.random()*1000);
const numeroRandomico = ramdom();
const codigoAcessoApi = '5851528311552895';
const nameAPI = `https://superheroapi.com/api.php/${codigoAcessoApi}/${numeroRandomico}`
const nameHeroi = document.getElementById('nomeHeroi');
const button = document.getElementById('btn');
const imagem = document.getElementById('imagem');
const forca = document.getElementById('str');
const int = document.getElementById('int')
const velocidade = document.getElementById('velo')
const info = document.getElementById('info')

button.addEventListener('click', (event) => {  
  event.preventDefault();
  fetch(nameAPI)
  .then(response => response.json())
  .then(data => {
    const { name } = data
    nameHeroi.innerHTML = name;
    imagem.src = data.image.url;
    forca.innerHTML = data.powerstats.strength;
    int.innerHTML = data.powerstats.intelligence;
    velocidade.innerHTML = data.powerstats.speed;
    info.innerHTML = `Primeira aparição em: ${data.biography['first-appearance']}, publicado pela ${data.biography.publisher}` 
    
  })
  .catch((error) => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `Não encontramos um Heroi! 
    Codigo de erro: ${error.message}`,  
  }))
})



