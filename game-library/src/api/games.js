// Importa a biblioteca AXIOS que instalamos via NPM. O AXIOS é responsável por fazer requisições HTTP (buscar, enviar, editar, deletar dados de uma API)
import axios from 'axios'
const API_URL = 'http://localhost:3001/games'


export async function getGames() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function addGame(gameData) {
    await axios.post(API_URL, gameData);
}

export async function deleteGame(id) {
    await axios.delete(`${API_URL}/${id}`);
}

export async function updateGame(id, gameData) {
    await axios.put(`${API_URL}/${id}`, gameData);
}