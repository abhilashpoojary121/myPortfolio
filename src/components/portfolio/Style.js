import styled from "styled-components";
export const FirstHalf = styled.div`
  width: 30%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SecondHalf = styled.div`
  width: 70%;
  height: 100%;
  background-color: blue;
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
  background: white;
  border-radius: 30px;
  img {
    border-radius: 120px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #05d5dc;
  color: black;
  height: -webkit-fill-available;
  border-radius: inherit;
  text-align: center;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: yellow;
`;
