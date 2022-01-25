import React from 'react'
// tools
import { Link } from 'react-router-dom'
// state
import { useGetAllEpisodesQuery } from '../../api/episodeApi'
// components
import { Loading } from '../index'
import parse from 'html-react-parser'
// styles
import {
  EpisodesListTable,
  EpisodesListTableHead,
  EpisodesTableHeader,
  EpisodesListTableBody,
  EpisodesTableRow,
  EpisodeTableImage,
  EpisodesTableData
} from './styles'

const tableHead = ['image', 'name', 'summary', 'season', 'episode', 'details']
const demoImage = 'https://static.tvmaze.com/uploads/images/original_untouched/223/558643.jpg'

const EpisodesList = () => {
  const {data: episodes, isFetching} = useGetAllEpisodesQuery()
  if(isFetching) return <Loading />
  
  return (
    <EpisodesListTable>
      <EpisodesListTableHead>
        <EpisodesTableRow>
          {
            tableHead.map((th) => (
              <EpisodesTableHeader>{th}</EpisodesTableHeader>
            ))
          }
        </EpisodesTableRow>
      </EpisodesListTableHead>
      <EpisodesListTableBody>
        {
          episodes?.map((episode) => (
            <EpisodesTableRow key={episode?.id}>
              <EpisodesTableData><EpisodeTableImage src={episode?.image?.medium || demoImage} /></EpisodesTableData>
              <EpisodesTableData>{episode?.name}</EpisodesTableData>
              <EpisodesTableData>{episode?.summary ? parse(`${episode.summary}`) : ''}</EpisodesTableData>
              <EpisodesTableData>{episode?.season}</EpisodesTableData>
              <EpisodesTableData>{episode?.number}</EpisodesTableData>
              <EpisodesTableData><Link to={`/season/${episode?.season}/episode/${episode?.number}`}>Show Details</Link></EpisodesTableData>
            </EpisodesTableRow>
          ))
        }
      </EpisodesListTableBody>
    </EpisodesListTable>
  )
};

export default EpisodesList;
