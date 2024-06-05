import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    114deg,
    rgb(35 34 34) 49%,
    rgb(39 35 35) 71%,
    rgb(58 58 63) 100%
  );
  display: flex;
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  gap: 20px;
  width: auto;
  height: auto;
  border-radius: 40px;
  left: 90%;
  top: 35%;
  position: absolute;
  border: solid 1px #039b71;
  .home:hover {
    color: red;
  }
`;
