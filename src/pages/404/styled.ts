import { styled } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'

export const StyledImage = styled('img')`
    height: 160px;
`

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    border-bottom: 2px solid #FAFAFA;
    color: #FAFAFA;
    &:hover{
    color: #FFCC80;
    border-bottom: 2px solid #FFCC80;
    }
`