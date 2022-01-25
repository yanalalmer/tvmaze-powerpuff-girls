import React from 'react';
// styles
import {
    LoadingContainer,
    LaodingWrapper,
    LoadingSpan
} from './styles'

const Loading = () => {
  return (
    <LoadingContainer>
        <LaodingWrapper>
            <LoadingSpan>Loading...</LoadingSpan>
        </LaodingWrapper>
    </LoadingContainer>
  )
};

export default Loading;
