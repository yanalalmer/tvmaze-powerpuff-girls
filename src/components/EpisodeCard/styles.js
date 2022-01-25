import styled from 'styled-components'
import { variable, space, breakpoint } from '../../styles/variables'

export const EpisdoeCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${space.xxl};
    height: 70vh;
    margin: 0 auto;

    @media ${breakpoint.md} {
        flex-direction: column;
        text-align: center;
    }
`
export const EpisodeCardImageContainer = styled.div`
    flex: 1;
    margin-right: ${variable.xlSpacing};

    @media ${breakpoint.md} {
        margin-right: 0;
        padding: ${variable.mdSpacing};
    }
`
export const EpisodeCardImage = styled.img`
`
export const EpisodeCardDetails = styled.div`
    flex: 1;

    @media ${breakpoint.md} {
        padding: ${variable.mdSpacing};
    }
`
export const EpisodeCardName = styled.h3`
    font-size: 30px;
    font-weight: 900;
    text-transform: capitalize;
    margin-bottom: ${variable.mdSpacing};
`
export const EpisodeCardSummary = styled.div`
    margin-bottom: ${variable.mdSpacing};
`
export const EpisodeCardPara = styled.p`
    padding: ${variable.mdSpacing} 0;
`
export const EpisodeCardSpan = styled.span`
    text-transform: capitalize;
    font-weight: 900;
`