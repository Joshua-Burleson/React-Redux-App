import axios from 'axios';


export const newManga = manga => dispatch => {
    const newID = Math.floor(Math.random() * 500);
    dispatch({type: 'LOADING'});
    axios.get(`https://api.jikan.moe/v3/manga/${newID}`)
         .then(res => {
                const synopsis = res.data.synopsis.length > 300 ? `${res.data.synopsis.slice(0,301)}...` : res.data.synopsis;
                const mangaData = {
                    id: res.data['mal_id'],
                    link: res.data.url,
                    title: res.data['title_english'] ? res.data['title_english'] : res.data['title_japanese'],
                    image: res.data['image_url'],
                    score: res.data.score ? res.data.score : 'Not Scored',
                    synopsis
                }
                dispatch({type: 'NEW_MANGA', payload: mangaData});
            })
         .catch(err => console.log(err));
};