import React from "react";
import * as S from "./Style";
import { Icon } from "@iconify/react";

const SecondHalf = () => {
  return (
    <React.Fragment>
      <S.SecondHalf>
        <S.ContentContainer>
          <S.CurrentPage>
            <Icon icon="fluent:home-24-regular" width="26" height="26" />
            <span>Introduction</span>
          </S.CurrentPage>
          <h1>
            Say Hi from <span className="green-color">Abhilash</span>, Front end
            developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </S.ContentContainer>
      </S.SecondHalf>
    </React.Fragment>
  );
};

export default SecondHalf;
