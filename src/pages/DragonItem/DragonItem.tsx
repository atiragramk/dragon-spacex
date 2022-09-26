import { Card, CardMedia, Box, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import { dragonItemStateSelector } from "./selectors/dragonItem";
import { dragonItemFetch } from "./thunk/dragonItem";
import Carousel from "react-material-ui-carousel";
import { StyledContainer } from "./styled";

const DragonItem = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, data } = useSelector(dragonItemStateSelector);

  const { description, flickr_images, name } = data;

  const { routeId } = useParams();
  console.log(routeId);

  useEffect(() => {
    dispatch(dragonItemFetch(routeId!));
  }, []);

  return (
    <StyledContainer maxWidth="xl">
      <Box sx={{ width: { xs: "100%", sm: "100%", lg: `100%`, xl: `100%` } }}>
        <Carousel
          animation="slide"
          sx={{ maxWidth: { xs: "100%", sm: "100%", lg: `100%`, xl: `100%` } }}
          indicators
        >
          {flickr_images?.map((item) => {
            return (
              <Card>
                <CardMedia height={500} component="img" image={item} alt="" />
              </Card>
            );
          })}
        </Carousel>
      </Box>
      <Paper
        sx={{
          maxWidth: { xs: "100%", sm: "100%", lg: "100%", xl: "100%" },
          backgroundColor: "#eceff1e6",
          p: 2,
        }}
        variant="outlined"
      >
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Paper>
    </StyledContainer>
  );
};

export default DragonItem;
