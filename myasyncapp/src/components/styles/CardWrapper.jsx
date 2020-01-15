import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 85vh;
    width: 85vw;
    border: 1px solid white;
    padding: 5px;

    a {
        color: grey;

        &:visited {
            color: grey;
        }
    }

    p {
        width: 75%;
        font-size: 1.25rem;
        line-height: 1.5rem;
    }
`;