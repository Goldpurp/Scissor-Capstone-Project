import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 100px;

  @media (max-width: 430px) {
    padding: 70px 50px;
    flex-direction: column;
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
`;

export const HeroBrace = styled.div`
  padding: 0;
`;

export const Info = styled.a`
  text-decoration: none;
  color: #2161df;
  font-size: 17px;
  font-weight: 600;
`;

export const InfoData = styled.p`
  font-size: 17px;
  font-weight: 600;

  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

export const InfoBrace = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export const HeaderText2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 30px;

  @media (max-width: 430px) {
    font-size: 13px;
    max-width: 270px;
  }
`;

export const ImageBrace = styled.div`
  padding: 0;
`;

export const Image = styled.img`
  width: 380px;
  height: 500px;
  object-fit: contain;
  box-shadow: 0 0 15px 15px #eaf7fe;
  border-radius: 20px;
`;

export const LoginBrace = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  background-color: #ffff;
  border-radius: 10px;
  width: 450px;
  height: 550px;

  @media (max-width: 430px) {
    width: 350px;
  }
`;

export const LoginBraceInner = styled.div`
  padding: 0;
`;

export const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 900;
  color: #141241;
  margin: 30px 0;
  margin-right: 160px;

  @media (max-width: 430px) {
    margin-right: 120px;
    font-size: 30px;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #e9e8ef;
  outline: none;
  background: transparent;
  padding: 0 30px;
  margin-bottom: 20px;

  &::placeholder {
    color: #b6b4cd;
  }

  @media (max-width: 430px) {
    width: 300px;
  }
`;

export const Label = styled.label`
  margin: 10px;
  margin-left: -60%;
  font-size: 15px;
  color: #636088;
  font-weight: 600;
`;

export const CheckboxBrace = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 130px;
  color: #636088;
  font-weight: 300;
`;

export const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

export const Btn = styled.button`
  width: 120px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #2161df;
  color: #cbd9f7;
  cursor: pointer;
  margin: 20px;
  font-size: 15px;
  font-weight: 600;
  margin-right: 245px;

  @media (max-width: 430px) {
    margin-right: 190px;
  }
`;

export const Comment = styled.textarea`
  width: 350px;
  height: 140px;
  border-radius: 10px;
  border: 2px solid #e9e8ef;
  outline: none;
  background: transparent;
  padding: 10px 10px;
  margin-bottom: 20px;

  &::placeholder {
    color: #b6b4cd;
  }

  @media (max-width: 430px) {
    width: 300px;
  }
`;
