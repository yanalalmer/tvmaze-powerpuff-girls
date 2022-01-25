import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = `${process.env.REACT_APP_BASE_URL}`

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