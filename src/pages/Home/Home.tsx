import { Button, Fade, Slide, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { StyledContainer } from "./styled";

const Home = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Fade in timeout={2000}>
        <Typography
          sx={{
            mt: {
              xs: 18,
              md: 18,
              sm: 8,
              lg: 8,
              xl: 8,
            },
          }}
          variant="h1"
        >
          SPACEx
        </Typography>
      </Fade>
      <Slide direction="down" in timeout={1000}>
        <Button
          component={Link}
          to="/dragons"
          sx={{
            width: {
              xs: 100,
              md: 120,
              sm: 150,
              lg: 150,
              xl: 150,
            },
            mt: 2,
          }}
          variant="outlined"
        >
          Let's fly
        </Button>
      </Slide>
    </StyledContainer>
  );
};

export default Home;
