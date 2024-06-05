import styled from "styled-components";
export const FirstHalf = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SecondHalf = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  padding-left: 30px;
  align-items: center;
`;
export const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  align-items: center;
  border-radius: 30px;
  border: solid 1px #434141;
  img {
    border-radius: 120px;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: #a3a1a1;
  height: -webkit-fill-available;
  border-radius: inherit;
  text-align: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  .linkedinIcon,
  .githubIcon {
    color: #a3a1a1;
  }
  .linkedinIcon:hover,
  .githubIcon:hover {
    color: #039b71;
    cursor: pointer;
  }
`;
export const ContentContainer = styled.div`
  width: 80%;
  height: 70%;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  padding: 20px;
  h1 {
    font-size: 50px;
  }
  .green-color {
    color: #039b71;
  }
  p {
    color: #a1a1a1;
  }
`;
export const NameHeader = styled.div`
  display: flex;
  width: 100%;
  color: #b3b3b3;
  justify-content: space-between;
  #name {
    text-align: start;
  }
  #designation {
    text-align: end;
    margin-top: 18px;
  }
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 19px;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0px;
  }
`;
export const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 220px;
  height: 40px;
  border-radius: 30px;
  border: solid 1px #434141;
  color: #434141;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: 700;
  span {
    margin-top: 2px;
  }
`;
