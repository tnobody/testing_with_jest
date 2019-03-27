import * as React from 'react';
import styled from 'styled-components';

const SocialMediaLink = styled.a `
    text-decoration: none;
`
export const LinkToSocialMedia = ({name, link, icon: Icon}) => {
    return <SocialMediaLink href={link}><Icon /> {name} </SocialMediaLink>
};

