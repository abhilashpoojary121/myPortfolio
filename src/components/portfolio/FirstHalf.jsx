import React from "react";
import * as S from "./Style";
import monoImage from "../../media/monoImage.png";

const FirstHalf = () => {
  return (
    <React.Fragment>
      <S.FirstHalf>
        <S.Container>
          <img src={monoImage} width="200px" />
          <S.Content>
            <h2>Abhilash Poojary</h2>
            <h4>Front End Developer</h4>
            <p>poojary@gmail.com</p>
            <p>+91 8655797177</p>
            <S.IconContainer></S.IconContainer>
          </S.Content>
        </S.Container>
      </S.FirstHalf>
    </React.Fragment>
  );
};

export default FirstHalf;
