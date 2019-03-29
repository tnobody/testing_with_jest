import * as React from 'react';
import styled from 'styled-components';
import {Image} from 'mdx-deck';

const Flex = styled.div `
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: ${({direction = 'row'}) => direction};
`;

const TitleImage = styled.img `
    align-self: center;
    border-radius: ${({isAvatar = false}) => isAvatar ? '50%' : '0'};
    margin-bottom: 1rem;
    max-height: 50vh;
`

export const SplitImage = ({
    imgSrc,
    isAvatar = false,
    children
}) => ( 
    <Flex direction = "column">
        <TitleImage src={imgSrc} isAvatar={isAvatar} className="animated fadeInDown" />
        <Flex className="animated fadeInUp">
            {children}
        </Flex> 
    </Flex>
)