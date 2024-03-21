import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 100px;

  @media (max-width: 770px) {
    display: block;
    align-self: center;
    padding: 50px;
  }
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

  @media (max-width: 770px) {
    font-size: 12px;
    padding: 10px 15px;
    text-align: start;
  }
`;

export const HeroBrace = styled.div`
  padding: 0;
`;

export const HeaderText1 = styled.h1`
  font-size: 40px;
  max-width: 450px;
  font-weight: 900;
  margin: 30px 0;

  @media (max-width: 770px) {
    font-size: 35px;
    min-width: 300px;
    text-align: start;
  }
`;

export const HeaderText2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 30px;
  max-width: 450px;

  @media (max-width: 770px) {
    font-size: 18px;
    min-width: 300px;
    text-align: start;
  }
`;

export const ImageBrace = styled.div`
  padding: 0;
`;

export const Image = styled.img`
  width: 450px;
  height: 350px;
  object-fit: contain;
  border-radius: 15px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const MainContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 100px;
  background-color: #ffff;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const BtnLinkDisaplayAds = styled.p`
  background-color: #e9e1ef;
  color: #ec4477;
  border: none;
  border-radius: 20px;
  width: fit-content;
  padding: 7px 13px;
  font-size: 12px;
  font-weight: 600;
`;

export const HeaderTextAds1 = styled.h1`
  font-size: 30px;
  max-width: 450px;
  font-weight: 900;
  margin: 30px 0;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

export const HeaderTextAds2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #8381a0;
  margin-bottom: 30px;
  max-width: 350px;
`;

export const Btn2 = styled.button`
  width: fit-content;
  height: 36px;
  padding: 10px 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #3a78e3;
  outline: none;
  background: transparent;
  color: #3a78e3;
  cursor: pointer;
  margin: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 245px;
`;
