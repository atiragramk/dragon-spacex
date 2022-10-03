import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Dragon } from "../../../../types";
import { StyledCardContent } from "./styled";

type DragonCardPrors = {
  data: Dragon;
};

export const DragonCard: React.FC<DragonCardPrors> = ({ data }) => {
  const { flickr_images, name, id } = data;
  return (
    <Fade in timeout={1000}>
      <Card
        sx={{
          width: { xs: "100%", md: "100%", sm: "100%", lg: "40%", xl: 700 },
          m: 1,
        }}
      >
        <CardActionArea component={Link} to={`${id}`}>
          <CardMedia
            height="200"
            component="img"
            image={flickr_images[0]}
            alt={name}
          />
          <StyledCardContent>
            <Typography variant="h6">{name}</Typography>
          </StyledCardContent>
        </CardActionArea>
      </Card>
    </Fade>
  );
};