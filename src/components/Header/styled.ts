import { AppBar, Avatar, styled, Toolbar } from "@mui/material";
import { NavLink } from 'react-router-dom'


export const StyledAppBar = styled(AppBar)`
    background-color: #0000008f;
`

export const StyledLogo = styled('img')`
    height: 100px
`

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  padding: 3px 7px;
  font-weight: 300;
  color: #FAFAFA;
  letter-spacing: 0.0075em;
  font-size: 20px;

  &:hover {
    color: rgb(151 151 151);
  }

  &.active {
    pointer-events: none;
    color: #FFCC80;

  }
`;