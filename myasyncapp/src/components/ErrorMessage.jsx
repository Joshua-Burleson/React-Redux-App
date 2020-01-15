import React from 'react';

const ErrorMessage = props => {
    return(
        <>
            <h2>Oops! The API dropped the ball</h2>
            <img src="https://i.pinimg.com/originals/75/12/a7/7512a7e5524034a2b2d817d963dec557.gif" alt="Embarassed Face" />
            <p>Message: {props.error}</p>
        </>
    );
}

export default ErrorMessage;