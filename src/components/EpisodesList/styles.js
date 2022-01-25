import styled from 'styled-components'
import { variable, space, breakpoint } from '../../styles/variables'

export const EpisodesListTable = styled.table`
   width: 90%;
   max-width: ${space.xxl};
   margin: 0 auto;
   padding: ${variable.mdSpacing};
   border-collapse: collapse;
   border-spacing: 0;

   @media ${breakpoint.xl} {
       font-size: 12px;
   }
   @media ${breakpoint.md} {
       display: block;
   }
   
`
export const EpisodesTableRow = styled.tr`
    border-bottom: 1px solid ${({theme}) => theme.bg2};
   

`
export const EpisodesListTableHead = styled.thead`
    background-color: ${({theme}) => theme.grey};
    color: ${({theme}) => theme.textSecondary};
    text-transform: uppercase;
    font-size: 20px;
    @media ${breakpoint.md} {
       display: none;
    }

    tr {
        border-bottom: none;
    }
`
export const EpisodesTableHeader = styled.th`
    padding: 10px;
`
export const EpisodesListTableBody = styled.tbody``
export const EpisodeTableImage = styled.img`
    width: 20rem;
    height: 5rem;

    @media ${breakpoint.md} {
        height: 100%;
    }
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
    @media ${breakpoint.md} {
        display: block;
    }
`   