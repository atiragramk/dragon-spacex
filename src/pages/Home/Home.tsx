import { Fade, Typography } from "@mui/material";

import { StyledContainer } from "./styled";

const Home = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Fade in timeout={2000}>
        <Typography variant="h1">SPACEx</Typography>
      </Fade>
    </StyledContainer>
  );
};

export default Home;
