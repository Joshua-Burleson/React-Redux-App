import React from 'react';

// Styles
import MangaImage from './styles/MangaImage';
import CardWrapper from './styles/CardWrapper';

const MangaCard = props => {
    return(
        <CardWrapper>
            <MangaImage src={`${props.manga.image}`} />
            <h2><a target="_blank" href={`${props.manga.link}`}>{props.manga.title} &raquo;</a></h2>
            <h4>Score: {props.manga.score}</h4>
            <p>Synopsis: {props.manga.synopsis}</p>
        </CardWrapper>
    );
}

export default MangaCard;