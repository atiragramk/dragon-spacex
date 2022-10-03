import { Stack, Typography } from "@mui/material";
import planet from "../../assets/img/404.gif";
import { StyledContainer, StyledImage, StyledLink } from "./styled";

const Page404 = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Typography variant="h1">4</Typography>
        <StyledImage src={planet} alt="planet" />
        <Typography variant="h1">4</Typography>
      </Stack>
      <Typography variant="h5">You're lost in a deep space. </Typography>
      <Typography variant="h5" to="/" component={StyledLink}>
        Let's go back
      </Typography>
    </StyledContainer>
  );
};

export default Page404;
