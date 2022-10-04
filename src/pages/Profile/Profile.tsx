import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Dragon } from "../../types";
import { DragonCard } from "../DragonList/components/DragonCard";
import { StyledContainer, StyledWrapper } from "./styled";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { authUserSignOutAction } from "../../store/auth/reducer/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const dispatch: AppDispatch = useDispatch();

  const persistStore = JSON.parse(
    localStorage.getItem("persist:root") as string
  );
  const { auth } = persistStore;
  const { dragons } = JSON.parse(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(authUserSignOutAction());
    navigate("/");
  };

  return (
    <StyledContainer maxWidth="xl">
      <Stack spacing={3}>
        <StyledWrapper>
          <Typography color="textPrimary" variant="h6">
            Email
            <Typography variant="subtitle1" color="textSecondary">
              {user?.email}
            </Typography>
          </Typography>
          <Tooltip title="Sign out">
            <IconButton
              onClick={handleSignOut}
              color="info"
              sx={{ height: 40 }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </StyledWrapper>
        <Typography color="textPrimary" variant="h6">
          Favourite dragons
        </Typography>
        <StyledWrapper>
          {dragons.map((dragon: Partial<Dragon>) => {
            return <DragonCard data={dragon} />;
          })}
        </StyledWrapper>
      </Stack>
    </StyledContainer>
  );
};

export default Profile;
