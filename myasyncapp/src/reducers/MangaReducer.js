const initialState = {
    loading: false,
    initial: true,
    currentManga: {
        id: 'x',
        link: '',
        title: "Test Manga",
        image: "https://studybreaks.com/wp-content/uploads/2017/06/1.jpeg",
        score: 0,
        synopsis: 'This is the synopsis'
    }
}

export const mangaReducer = (state = initialState, action) => {
    switch(action.type){
        case('NEW_MANGA'): 
                return {...state, loading: false, currentManga: action.payload};
        case('LOADING'):
                return {...state, initial: false, loading: true};
        default: 
                return {...state};
    }
}