import React from 'react';
// tools
import { useParams } from 'react-router';
import parse from 'html-react-parser'
// state
import { useGetEpisodeDetailsQuery } from '../../api/episodeApi';
// styles
import {
    EpisdoeCardContainer,
    EpisodeCardImageContainer,
    EpisodeCardImage,
    EpisodeCardDetails,
    EpisodeCardName,
    EpisodeCardSummary,
    EpisodeCardPara,
    EpisodeCardSpan
} from './styles'

const demoImage = 'https://static.tvmaze.com/uploads/images/original_untouched/223/558643.jpg'

const EpisodeCard = () => {
    const { season, number } = useParams()
    const { data: episode, isFetching } = useGetEpisodeDetailsQuery({season, number})

    if(isFetching) return 'Loading....'
    return (
        <EpisdoeCardContainer>
            <EpisodeCardImageContainer>
                <EpisodeCardImage src={episode?.image?.original || demoImage} />
            </EpisodeCardImageContainer>
            <EpisodeCardDetails>
                <EpisodeCardName>{episode.name}</EpisodeCardName>
                <EpisodeCardSummary>{episode.summary ? parse(`${episode.summary}`) : ''}</EpisodeCardSummary>
                <EpisodeCardPara><EpisodeCardSpan>Season: </EpisodeCardSpan>{episode.season}</EpisodeCardPara>
                <EpisodeCardPara><EpisodeCardSpan>episode: </EpisodeCardSpan>{episode.number}</EpisodeCardPara>
                <EpisodeCardPara><EpisodeCardSpan>first aired: </EpisodeCardSpan>{episode.airdate}</EpisodeCardPara>
            </EpisodeCardDetails>
        </EpisdoeCardContainer>
    )
};

export default EpisodeCard;