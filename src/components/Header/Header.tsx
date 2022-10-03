import {
  StyledAppBar,
  StyledLink,
  StyledLogo,
  StyledNavLink,
  StyledStack,
  StyledToolbar,
} from "./styled";
import logo from "../../assets/img/logo.svg";
import { Avatar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authStateSelector } from "../../store/auth/selectors/auth";

export const Header = () => {
  const { user } = useSelector(authStateSelector);
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <StyledStack direction="row" spacing={{ xs: 1, lg: 2 }}>
          <StyledLink to="/" end>
            <StyledLogo src={logo} alt="logo" />
          </StyledLink>

          <StyledNavLink to="/" end>
            home
          </StyledNavLink>
          <StyledNavLink to="/dragons">dragon</StyledNavLink>
        </StyledStack>
        {user ? (
          <IconButton component={Link} to="/profile">
            <Avatar
              sx={{
                width: { xs: 24, lg: 36 },
                height: { xs: 24, lg: 36 },
                bgcolor: " #FFCC80",
                color: "#000",
              }}
            />
          </IconButton>
        ) : (
          <Button
            to="/login"
            component={Link}
            color="secondary"
            size="small"
            variant="outlined"
          >
            Log in
          </Button>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};
