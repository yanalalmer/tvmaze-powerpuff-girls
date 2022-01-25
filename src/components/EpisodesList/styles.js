import styled from 'styled-components'
import { variable, space } from '../../styles/variables'

export const EpisodesListTable = styled.table`
   width: 90%;
   max-width: ${space.xxl};
   margin: 0 auto;
   padding: ${variable.mdSpacing};
   box-shadow: ${({theme}) => theme.boxshadow};
   border-collapse: collapse;
   border-spacing: 0;
`
export const EpisodesTableRow = styled.tr`
    border-bottom: 1px solid ${({theme}) => theme.bg2};
`
export const EpisodesListTableHead = styled.thead`
    background-color: ${({theme}) => theme.grey};
    color: ${({theme}) => theme.textSecondary};
    text-transform: uppercase;
    font-size: 20px;
`
export const EpisodesTableHeader = styled.th`
    padding: 10px;
`
export const EpisodesListTableBody = styled.tbody``
export const EpisodeTableImage = styled.img`
    width: 20rem;
    height: 5rem;
`
export const EpisodesTableData = styled.td`
    text-align: center;
    padding: 10px;

    a {
        font-weight: 800;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    :hover a {
        color: ${({theme}) => theme.textSecondary}
    }
`