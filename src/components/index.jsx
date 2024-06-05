import React from "react";
import * as S from "./Style";
import FirstHalf from "./portfolio/FirstHalf";
import SecondHalf from "./portfolio/SecondHalf";
import { Icon } from "@iconify/react";

const MainComponent = () => {
  return (
    <React.Fragment>
      <S.Main>
        <FirstHalf />
        <SecondHalf />
        <S.MenuBar>
          <Icon icon="fluent:home-24-regular" width="26" height="26" />
          <Icon icon="fluent:briefcase-24-regular" width="26" height="26" />
          <Icon icon="fluent:document-data-24-regular" width="26" height="26" />
          <Icon icon="fluent:color-24-regular" width="26" height="26" />
        </S.MenuBar>
      </S.Main>
    </React.Fragment>
  );
};
export default MainComponent;
