import React from "react";
import * as S from "./Style";
import monoImage from "../../media/monoImage.png";
import { Icon } from "@iconify/react";

const FirstHalf = () => {
  return (
    <React.Fragment>
      <S.FirstHalf>
        <S.Container>
          <S.NameHeader>
            <div id="name">
              <h1>Abhilash</h1>
              <h2>Poojary</h2>
            </div>
            <div id="designation">
              <h3>Front-End</h3>
              <h4>Developer</h4>
            </div>
          </S.NameHeader>
          <img src={monoImage} width="200px" />
          <S.Content>
            <p>poojary@gmail.com</p>
            <p>+91 8655797177</p>
            <S.IconContainer>
              <div className="linkedinIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"
                  />
                </svg>
              </div>
              <div className="githubIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"
                  />
                </svg>
              </div>
            </S.IconContainer>
          </S.Content>
        </S.Container>
      </S.FirstHalf>
    </React.Fragment>
  );
};

export default FirstHalf;
