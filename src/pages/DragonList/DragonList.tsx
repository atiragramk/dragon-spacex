import { CircularProgress, Container, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { DragonCard } from "./components/DragonCard";
import { dragonListStateSelector } from "./selectors/dragonList";
import { StyledContainer } from "./styled";
import { dragonListFetch } from "./thunk/dragonList";

import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
} from "react-js-pull-to-refresh";

const DragonList = () => {
  const { loading, error, data } = useSelector(dragonListStateSelector);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(dragonListFetch());
  }, []);

  const onRefresh = (): Promise<any> => {
    return dispatch(dragonListFetch());
  };

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <PullToRefresh
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<LinearProgress color="secondary" />}
        pullDownThreshold={200}
        onRefresh={() => onRefresh()}
        triggerHeight={50}
        backgroundColor="transparent"
        startInvisible={true}
      >
        <StyledContainer maxWidth="xl">
          {!loading &&
            !error &&
            data.map((dragon) => {
              return <DragonCard key={dragon.id} data={dragon} />;
            })}
        </StyledContainer>
      </PullToRefresh>
    </>
  );
};

export default DragonList;
