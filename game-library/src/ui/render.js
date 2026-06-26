import { gamesList, gameTitle, suggestions } from "./elements.js"
import { statusAbandoned, statusAwatingToPlay, statusFinished, statusPlaying, statusTotal } from "./elements.js"

export function renderGames(games) {
  gamesList.innerHTML = ''

  games.forEach(game => {
    const gameCard = document.createElement('div')

    gameCard.className = 'game-card'

    if (game.image) {
      gameCard.style.backgroundImage = `linear-gradient(to right, transparent 30%, #16213e 60%), url('${game.image}')`
      gameCard.style.backgroundSize = 'cover'
      gameCard.style.backgroundPosition = 'left center'
    }

    gameCard.classList.add(`border-${game.status.toLowerCase().replaceAll(' ', '-')}`);

    gameCard.innerHTML = `
      <div class="game-info">
        <h3>${game.title}</h3>
        
        <div class="game-details">
          <span>${game.genre}</span>
          <span>⭐ ${game.rating}</span>
          <span class="status-badge status-${game.status.toLowerCase().replaceAll(' ', '-')}">${game.status}</span>
      </div>
        
      <div class="game-actions">
        <button class="btn-edit" data-id="${game.id}" 
        data-title="${game.title}" 
        data-genre="${game.genre}" 
        data-rating="${game.rating}" 
        data-status="${game.status}">Editar</button>

        <button class="btn-delete" data-id="${game.id}">Deletar</button>
      </div>
    `
    gamesList.appendChild(gameCard)
  })
}

export function updateStats(games) {
  statusTotal.textContent = games.length;

  const finished = games.filter(game => game.status.toLowerCase() === 'zerado').length;
  const playing = games.filter(game => game.status.toLowerCase() === 'jogando').length;
  const awaitingToPlay = games.filter(game => game.status.toLowerCase() === 'na fila').length;
  const abandoned = games.filter(game => game.status.toLowerCase() === 'abandonado').length;

  statusFinished.textContent = finished;
  statusPlaying.textContent = playing;
  statusAwatingToPlay.textContent = awaitingToPlay;
  statusAbandoned.textContent = abandoned;
}

export function renderSuggestions(games) {
  
  suggestions.innerHTML = '';
  const gameSuggestion = document.createElement('ul');

  games.forEach(game => {
    const gameSuggestionList = document.createElement('li');
    gameSuggestionList.textContent = game.name;

    gameSuggestion.append(gameSuggestionList);

    gameSuggestionList.addEventListener('click', () => {
      gameTitle.value = game.name
      suggestions.innerHTML = ''
    })
  });

  suggestions.appendChild(gameSuggestion);
}
