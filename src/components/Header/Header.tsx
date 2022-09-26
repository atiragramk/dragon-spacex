import {
  StyledAppBar,
  StyledLogo,
  StyledNavLink,
  StyledToolbar,
} from "./styled";
import logo from "../../assets/img/logo.svg";
import { Box, Toolbar, Typography, Stack } from "@mui/material";

export const Header = () => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <StyledLogo src={logo} alt="logo" />
        <Stack direction="row" spacing={2}>
          <StyledNavLink to="/" end>
            home
          </StyledNavLink>
          <StyledNavLink to="/dragons">dragon</StyledNavLink>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};
