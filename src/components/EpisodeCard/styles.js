import styled from 'styled-components'
import { variable, space } from '../../styles/variables'

export const EpisdoeCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${space.xxl};
    height: 70vh;
    margin: 0 auto;
`
export const EpisodeCardImageContainer = styled.div`
    flex: 1;
    margin-right: ${variable.xlSpacing};
`
export const EpisodeCardImage = styled.img``
export const EpisodeCardDetails = styled.div`
    flex: 1;
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