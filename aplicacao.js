let botao = document.querySelector('#botao');
let nome = document.querySelector('#nome');
let populacao = document.querySelector('#populacao');
let clima = document.querySelector('#clima');
let solo = document.querySelector('#solo');
let filme = document.querySelector('#filme');




function pegaDados(){
    let pegaAleatorio = Math.floor((Math.random() * 61) + 1);
    let planetaAleatorio = 'https://swapi.co/api/planets/' + pegaAleatorio;
    

    axios.get(planetaAleatorio).then(function(response){
       atualizaDados(response.data);

    })
}
function atualizaDados(data){
    nome.innerText = data.name;
    populacao.innerText = data.population;
    clima.innerText = data.climate;
    solo.innerText = data.terrain;
    filme.innerText = data.films.length;

}

botao.addEventListener('click',pegaDados);