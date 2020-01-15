import React from 'react';
import { newManga } from '../actions/MangaActions';
import {useDispatch, useSelector} from 'react-redux';

import Start from './Start';
import MangaCard from './MangaCard';
import MangaButton from './styles/MangaButton';

const AppWrapper = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => {
        return {
            loading: state.loading,
            manga: state.currentManga,
            fresh: state.initial
        }
    });
    return (
        <div>
            {state.fresh && <Start />}
            {state.loading && <h1>Loading...</h1>}
            {!state.loading && !state.fresh && <MangaCard manga={state.manga} />}
            <MangaButton onClick={() => dispatch(newManga())}>New Random Manga</MangaButton>
        </div>
    );
}

export default AppWrapper;