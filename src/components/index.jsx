import React from "react";
import * as S from "./Style";
import FirstHalf from "./portfolio/FirstHalf";
import SecondHalf from "./portfolio/SecondHalf";
const MainComponent = () => {
  return (
    <React.Fragment>
      <S.Main>
        <FirstHalf />
        <SecondHalf />
        <S.MenuBar></S.MenuBar>
      </S.Main>
    </React.Fragment>
  );
};
export default MainComponent;
