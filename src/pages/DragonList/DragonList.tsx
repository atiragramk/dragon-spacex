import { Container } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { DragonCard } from "./components/DragonCard";
import { dragonListStateSelector } from "./selectors/dragonList";
import { StyledContainer } from "./styled";
import { dragonListFetch } from "./thunk/dragonList";

const DragonList = () => {
  const { loading, error, data } = useSelector(dragonListStateSelector);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(dragonListFetch());
  }, []);

  return (
    <StyledContainer maxWidth="xl">
      {data.map((dragon) => {
        return <DragonCard key={dragon.id} data={dragon} />;
      })}
    </StyledContainer>
  );
};

export default DragonList;
