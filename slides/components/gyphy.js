import * as React from 'react';
import styled from 'styled-components'

const GyphyWrapper = styled.div`
    width:100%;
    height:0;
    padding-bottom:100%;
    position:relative;
`
// QjrrSbYaqgi1q
export const Gyphy = ({
    id,
    height = "480",
    width = "480"
}) => (
    <React.Fragment>
        <iframe src={"https://giphy.com/embed/" + id} width={width} height={height} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </React.Fragment>
)