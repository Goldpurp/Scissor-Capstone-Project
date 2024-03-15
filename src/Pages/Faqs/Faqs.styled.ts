import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 100px;
`;

export const BtnLinkDisaplay = styled.p`
  background-color: #e9e1ef;
  color: #ec4477;
  border: none;
  border-radius: 20px;
  width: fit-content;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 600;
`;

export const HeroBrace = styled.div`
  padding: 0;
`;

export const HeaderText1 = styled.h1`
  font-size: 40px;
  max-width: 450px;
  font-weight: 900;
  margin: 30px 0;

  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

export const ImageBrace = styled.div`
  padding: 0;
`;

export const Image = styled.img`
  width: 450px;
  height: 350px;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 430px) {
    display: none;
  }
`;
