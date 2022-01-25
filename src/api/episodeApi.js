import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.tvmaze.com/shows/6771'

const createRequest = (url) => ({url})

export const episodeApi = createApi({
    reducerPath: 'episodeApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getAllEpisodes: builder.query({
            query: () => createRequest(`/episodes`)
        }),
        getEpisodeDetails: builder.query({
            query: ({season, number}) => createRequest(`/episodebynumber?season=${season}&number=${number}`)
        })
    }) 
})

export const { useGetAllEpisodesQuery, useGetEpisodeDetailsQuery } = episodeApi