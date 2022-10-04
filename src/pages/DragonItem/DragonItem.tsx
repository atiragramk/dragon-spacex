import {
  Box,
  Typography,
  Paper,
  Link,
  Button,
  Stack,
  IconButton,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import LinkIcon from "@mui/icons-material/Link";
import ReplyIcon from "@mui/icons-material/Reply";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { dragonItemStateSelector } from "./selectors/dragonItem";
import { dragonItemFetch } from "./thunk/dragonItem";
import { StyledContainer } from "./styled";
import moment from "moment";
import { ImageCarousel } from "./components/ImageCarousel";
import { ParamsItem } from "./components/ParamsItem";
import {
  favouriteDragonsAddAction,
  favouriteDragonsRemoveAction,
} from "../../store/auth/reducer/auth";
import { authStateSelector } from "../../store/auth/selectors/auth";

const DragonItem = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, data } = useSelector(dragonItemStateSelector);
  const user = localStorage.getItem("user");
  const { dragons } = useSelector(authStateSelector);

  const fav = dragons.some((dragon) => dragon.id === data.id);

  const handleFavSelection = () => {
    if (fav) {
      dispatch(favouriteDragonsRemoveAction(data));
    } else {
      dispatch(favouriteDragonsAddAction(data));
    }
  };

  const navigate = useNavigate();

  const {
    description,
    name,
    wikipedia,
    dry_mass_kg,
    height_w_trunk,
    diameter,
    first_flight,
  } = data;

  const { routeId } = useParams();

  useEffect(() => {
    dispatch(dragonItemFetch(routeId!));
  }, []);

  const date = moment(first_flight).format("MMMM Do YYYY");

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <StyledContainer maxWidth="xl">
        {!loading && !error && (
          <>
            <Paper
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: "100%",
                  sm: "100%",
                  lg: "50%",
                  xl: "50%",
                },
                m: 1,
                backgroundColor: "#eceff1e6",
                height: {
                  xs: "fit-content",
                  md: "fit-content",
                  sm: "fit-content",
                  lg: 466,
                  xl: 466,
                },
                p: 2,
              }}
              variant="outlined"
            >
              <Stack spacing={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => navigate(-1)} sx={{ width: 40 }}>
                    <ReplyIcon />
                  </IconButton>
                  {user && (
                    <Tooltip
                      title={fav ? "Remove from favourite" : "Add to favourite"}
                    >
                      <IconButton color="info" onClick={handleFavSelection}>
                        {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="subtitle1">{description}</Typography>
                <Stack
                  direction={{
                    xs: "column",
                    md: "row",
                    sm: "row",
                    lg: "row",
                    xl: "row",
                  }}
                  spacing={3}
                >
                  <ParamsItem name="Mass" parameter={dry_mass_kg!} units="kg" />
                  <ParamsItem
                    name="Height"
                    parameter={height_w_trunk?.meters!}
                    units="meters"
                  />
                  <ParamsItem
                    name="Diameter"
                    parameter={diameter?.meters!}
                    units="meters"
                  />
                  <ParamsItem name="First Flight" parameter={date} />
                </Stack>
                <Button
                  sx={{ width: "fit-content" }}
                  target="_blank"
                  component={Link}
                  href={wikipedia}
                  startIcon={<LinkIcon />}
                  color="info"
                >
                  Wikipedia
                </Button>
              </Stack>
            </Paper>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <ImageCarousel data={data} />
            </Box>
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default DragonItem;
