import {
  Box,
  Typography,
  Paper,
  Link,
  Button,
  Stack,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import { dragonItemStateSelector } from "./selectors/dragonItem";
import { dragonItemFetch } from "./thunk/dragonItem";
import { StyledContainer } from "./styled";
import LinkIcon from "@mui/icons-material/Link";
import ReplyIcon from "@mui/icons-material/Reply";
import moment from "moment";
import { ImageCarousel } from "./components/ImageCarousel";
import { ParamsItem } from "./components/ParamsItem";
import { authStateSelector } from "../../store/auth/selectors/auth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const DragonItem = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, data } = useSelector(dragonItemStateSelector);
  const { user } = useSelector(authStateSelector);

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
                    <IconButton color="info">
                      <FavoriteBorderIcon />
                    </IconButton>
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
