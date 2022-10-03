import { Container, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const StyledForm = styled('form')`
    padding: 30px 0;
    background-color: #eceff1e6;
    width: 300px;
    @media (min-width:600px) {
        width: 400px;
    };
    border-radius: 5px;
    min-height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const StyledContainer = styled(Container)`
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledLink = styled(Link)`
    text-transform: uppercase;
    /* text-decoration: none; */
    color: #006064;
`
