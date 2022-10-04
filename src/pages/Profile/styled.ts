import { Box, styled } from '@mui/material'
import { Container } from '@mui/system'

export const StyledContainer = styled(Container)`
    background-color: #eceff1e6;
    padding: 20px;
    min-height: 625px;
`

export const StyledWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`