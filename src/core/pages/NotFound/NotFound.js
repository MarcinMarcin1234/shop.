import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1250px;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Typography = styled.h1`
    font-size: 27px;
    color: #444444;
    font-family: 'Roboto', sans-serif;
`

const NotFound = () => (
    <Container>
        <Typography>
            Not Found 404.
        </Typography>
    </Container>
);
export default NotFound;