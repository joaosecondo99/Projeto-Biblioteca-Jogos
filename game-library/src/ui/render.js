const gameList = document.querySelector('#games-list')

export function renderGames(games) {
  gameList.innerHTML = ''

  games.forEach(game => {
    const gameCard = document.createElement('div')

    gameCard.className = 'game-card'
    gameCard.classList.add(`border-${game.status.toLowerCase().replaceAll(' ', '-')}`);
    gameCard.innerHTML = `
      <div class="game-info">
        <h3>${game.title}</h3>
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
    gameList.appendChild(gameCard)
  })
}