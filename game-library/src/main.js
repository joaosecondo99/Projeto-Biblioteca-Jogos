import { renderGames, updateStats } from "./ui/render.js"
import { getGames, addGame, deleteGame, updateGame } from "./api/games"
import { getGameImage } from './api/rawg.js'
import { formButton, gameForm, gameGenre, gameRating, gameStatus, gameTitle, gamesList } from "./ui/elements";

let editingId = null;

async function init() {
  const games = await getGames();
  renderGames(games);
  updateStats(games);
}

gameForm.addEventListener('submit', handleSubmit);
gamesList.addEventListener('click', handleListClick);


async function handleSubmit(event) {
  event.preventDefault();

  const gameImage = await getGameImage(gameTitle.value);

  // Criando um objeto a partir das informações no formulário:
  const gameData = {
    'title': gameTitle.value,
    'genre': gameGenre.value,
    'rating': gameRating.value,
    'status': gameStatus.value,
    'image': gameImage
  }

  // Validando se ID for null, add o jogo, senão ele edita o jogo já que foi add
  if (editingId === null) {
    await addGame(gameData);
    resetForm();
    init();
    
  } else {
    await updateGame(editingId, gameData)
    editingId = null;
    resetForm();
    init();
  }
}

async function handleListClick(event) {
  if (event.target.classList.contains('btn-delete')) {
    const gameId = event.target.dataset.id;

    let confirmed = false;
    confirmed = window.confirm('Deseja realmente excluir o jogo?')

    if (confirmed) {
      await deleteGame(gameId);
      init();
    } else {
      return;
    }
  }

  if (event.target.classList.contains('btn-edit')) {
    editingId = event.target.dataset.id;

    formButton.classList.add('btn-saving')
    formButton.textContent = 'Salvar';

    gameTitle.value = event.target.dataset.title;
    gameGenre.value = event.target.dataset.genre;
    gameRating.value = event.target.dataset.rating;
    gameStatus.value = event.target.dataset.status;
  }
}

function resetForm() {
  formButton.classList.remove('btn-saving');
  gameForm.reset();
  formButton.textContent = 'Adicionar'
}

init();
