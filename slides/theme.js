import { dark as theme } from 'mdx-deck/themes'
import * as React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
    width: ${({progress = 100}) => `${progress}%`};
    height: 10px;
    background-color: #ffcc00;
    position: absolute;
    left: 0;
    bottom: 0;
`


const MyProvider = ({slides, index, children}) => {
    return (
        <React.Fragment>            
            {children}
            <Progress progress={(index + 1) / slides.length * 100} />
        </React.Fragment>
    )
}

export default {
    //...theme,
    font: 'Calibri',
    h1: {
        color: '#2e2d2c',
        fontVariant: 'small-caps',
        borderBottom: '3px solid #ffcc00',
        //background: '#ffe271',
        padding: '1rem 2rem 1rem 2rem',
        //boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.75)'
    },
    a: {
        color: '#ffe271',
        textDecoration: 'none',
    },
    Provider: MyProvider
}