import axios from 'axios';

const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const RAWG_URL = 'https://api.rawg.io/api/games';

console.log(import.meta.env);

export async function getGameImage(title) {
    const response = await axios.get(RAWG_URL, {
        params: {
            key: RAWG_API_KEY,
            search: title
        }
    });

    const results = response.data.results;

    if (results.length === 0) {
        return null;
    }
    
    return results[0].background_image;
}

export async function searchGames(search) {
    const response = await axios.get(RAWG_URL, {
        params: {
            key: RAWG_API_KEY,
            search: search
        }
    })

    const results = response.data.results;
    return results;
}