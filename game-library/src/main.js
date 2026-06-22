import { renderGames } from "./ui/render"
import { getGames, addGame, deleteGame, updateGame } from "./api/games"

let editingId = null;

async function init() {
  const games = await getGames();
  renderGames(games);
}

document.querySelector('#game-form').addEventListener('submit', handleSubmit);

document.querySelector('#games-list').addEventListener('click', handleListClick);


async function handleSubmit(event) {
  event.preventDefault();

  // Criando um objeto a partir das informações no formulário:
  const gameData = {
    'title': document.querySelector('#game-title').value,
    'genre': document.querySelector('#game-genre').value,
    'rating': document.querySelector('#game-rating').value,
    'status': document.querySelector('#game-status').value
  }

  if (editingId === null) {
    await addGame(gameData);
    document.getElementById('form-btn').textContent = 'Editar'
    document.querySelector('#game-form').reset();
    init();
    
  } else {
    await updateGame(editingId, gameData)
    console.log(gameData);
    editingId = null;
    document.getElementById('form-btn').textContent = 'Editar'
    document.querySelector('#game-form').reset();

    init();
  }
}

async function handleListClick(event) {
  if (event.target.classList.contains('btn-delete')) {
    const gameId = event.target.dataset.id;
    await deleteGame(gameId);
    init();
  }

  if (event.target.classList.contains('btn-edit')) {
    editingId = event.target.dataset.id;

    document.getElementById('form-btn').textContent = 'Salvar';

    document.querySelector('#game-title').value = event.target.dataset.title;

    document.querySelector('#game-genre').value = event.target.dataset.genre;

    document.querySelector('#game-rating').value = event.target.dataset.rating;

    document.querySelector('#game-status').value = event.target.dataset.status;
  }
}

init();
