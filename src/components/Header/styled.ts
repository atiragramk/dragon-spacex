import { AppBar, styled, Toolbar, Stack } from "@mui/material";
import { NavLink } from 'react-router-dom'


export const StyledAppBar = styled(AppBar)`
    background-color: #0000008f;
`

export const StyledLogo = styled('img')`
    height: 80px;
    @media (min-width:600px) {
        height: 100px
    };
`

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  padding: 3px 7px;
  font-weight: 300;
  color: #FAFAFA;
  letter-spacing: 0.0075em;
  font-size: 16px;
  @media (min-width:600px) {
    font-size: 20px;
  };

  &:hover {
    color: rgb(151 151 151);
  }

  &.active {
    pointer-events: none;
    color: #FFCC80;

  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    pointer-events: none;
  }
`;

export const StyledStack = styled(Stack)`
  align-items: center;
  justify-content: space-around
`
