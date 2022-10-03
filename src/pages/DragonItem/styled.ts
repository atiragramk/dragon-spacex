import { Container, styled } from '@mui/material'

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 12px;
    @media (min-width:1200px) {
        flex-direction: row
    };
`