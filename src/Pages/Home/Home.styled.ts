import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 100px;
  padding-bottom: 100px;

  @media (max-width: 430px) {
    display: block;
    padding: 0;
    margin-top: 50px;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  gap: 160px;
  padding-top: 50px;

  @media (max-width: 430px) {
    display: block;
    padding: 0;
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

  @media (max-width: 430px) {
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 600;
    margin-right: 35%;
  }
`;

export const HeroBrace = styled.div`
  padding: 0px;

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  max-width: 450px;
  font-weight: 900;
  margin: 30px 0;

  @media (max-width: 430px) {
    font-size: 32px;
    max-width: 350px;
  }
`;

export const HeaderText2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 30px;
  max-width: 400px;

  @media (max-width: 430px) {
    font-size: 13px;
    max-width: 300px;
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

export const InputBrace = styled.form`
  width: 450px;
  height: 40px;
  position: relative;
  border-radius: 20px;
  margin-bottom: 10px;

  @media (max-width: 430px) {
    width: 450px;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 450px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #435585;
  outline: none;
  background-color: #ffff;
  padding: 0 90px 0 20px;

  ::placeholder {
    color: #f8f9fd;
    opacity: 1;
  }

  @media (max-width: 430px) {
    width: 300px;
    height: 50px;
    padding: 0 90px 0 20px;
  }
`;

export const Btn = styled.button`
  width: fit-content;
  text-align: center;
  height: 30px;
  padding: 0 10px;
  position: absolute;
  right: 2%;
  top: 18%;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #2161df;
  color: #cbd9f7;
  cursor: pointer;

  @media (max-width: 430px) {
    width: fit-content;
    height: 35px;
    padding: 0 10px;
    right: 18%;
    top: 20%;
    font-size: 15px;
    border-radius: 10px;
    font-weight: 600;
  }
`;

export const MainContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
  gap: 100px;
  background-color: #ffff;
  min-width: 100%;

  @media (max-width: 430px) {
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

  @media (max-width: 430px) {
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 40%;
  }
`;

export const HeaderTextAds1 = styled.h1`
  font-size: 30px;
  max-width: 450px;
  font-weight: 900;
  margin: 30px 0;

  @media (max-width: 430px) {
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

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  border-radius: 5px;
`;

export const IconBrace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;

  @media (max-width: 430px) {
    justify-content: start;
    align-items: start;
    margin-right: 55%;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MainContainer3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px;
  gap: 180px;
  background-color: #2161df;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const BtnLinkDisaplayAds2 = styled.p`
  background-color: #4379e6;
  color: #e1e5fb;
  border: none;
  border-radius: 20px;
  width: fit-content;
  padding: 7px 13px;
  font-size: 12px;
  font-weight: 600;
`;

export const Btn3 = styled.button`
  width: fit-content;
  height: 36px;
  padding: 10px 20px;
  text-align: center;
  border-radius: 20px;
  border: none;
  outline: none;
  background: transparent;
  color: #e1e5fb;
  cursor: pointer;
  margin: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 245px;
`;

export const HeaderTextAdsBlue = styled.h1`
  font-size: 30px;
  max-width: 430px;
  font-weight: 900;
  margin: 30px 0;
  color: #ffff;

  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

export const HeaderTextAdsBlue2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #cad4ea;
  margin-bottom: 30px;
  max-width: 350px;
`;

export const MainContainer4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 100px;
  padding: 80px;
  margin-top: 50px;

  @media (max-width: 430px) {
    padding: 30px 70px;
  }
`;

export const Btn4 = styled.button`
  width: fit-content;
  height: 36px;
  padding: 10px 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #ec5d87;
  outline: none;
  background: transparent;
  color: #ec5d87;
  cursor: pointer;
  margin: 20px;
  font-size: 12px;
  font-weight: 600;
`;

export const AppIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 5px;
  margin: 15px;

  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

export const AppIconBrace = styled.div`
  max-width: 600px;
`;

export const HeaderTextApp1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
  margin: 30px 0;
`;

export const HeaderTextApp2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #8381a0;
  margin-bottom: 30px;
`;

export const ShortenedUrl = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 450px;
  height: 100px;
  overflow: auto;
  border-radius: 10px;
  border: 1px solid #435585;
  outline: none;
  background-color: #ececec;
  padding: 0 70px 0 20px;
  margin-top: 20px;

  @media (max-width: 430px) {
    width: 300px;
    padding: 0 90px 0 20px;
    margin-left: 17%;
    text-align: left;
    gap: 20px;
  }
`;

export const InputBraceResultUrl = styled.div`
  width: 450px;
  height: 75px;
  position: relative;
  border-radius: 20px;

  @media (max-width: 430px) {
    width: 450px;
  }
`;

export const CopyBtn = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-left: 10px;
  position: absolute;
  right: 3%;
  top: 37%;
  font-size: 20px;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: #2161df;
  color: #ffff;
  cursor: pointer;

  @media (max-width: 430px) {
    right: 18%;
    top: 69%;
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
`;

export const NewUrl = styled.p`
  font-size: 15px;
`;

export const QrCode = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 430px) {
    width: 60px;
    height: 60px;
  }
`;
