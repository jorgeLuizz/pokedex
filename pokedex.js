/*
Quando clicar no pokemon da listagem preciso esconder o cartao do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

Pra isso preciso trabalhar com dois elementos

1- listagem
2-cartão pokemon

preciso criar duas variaveis no js para trabalhar com os elementos da tela

vou precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemons

-remover a classe aberto so do cartão que está aberto

- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
-remover a classe ativa que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

//preciso criar duas variaveis no JS pra trabalhar com os elementos na tela


const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartoes-pokemon')


listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value


        const IdDoCartaoPokemonParaabrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')


        //remover a classe aberto so do cartão que está aberto

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})