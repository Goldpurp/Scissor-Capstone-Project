import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 100px;

  @media (max-width: 770px) {
    padding: 70px 50px;
  }
`;

export const ImageBrace = styled.div`
  padding: 0;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 700px;
  object-fit: contain;
  box-shadow: 0 0 15px 15px #eaf7fe;
  border-radius: 15px;
`;

export const LoginBrace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-color: #ffff;
  border-radius: 10px;
  width: 550px;
  height: 880px;

  @media (max-width: 770px) {
    padding: 40px;
    height: fit-content;
    max-width: 360px;
  }
`;

export const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 900;
  color: #141241;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 450px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid #e9e8ef;
  outline: none;
  background: transparent;
  padding: 0 15px;
  margin-bottom: 20px;

  &::placeholder {
    color: #b6b4cd;
  }

  @media (max-width: 770px) {
    width: 300px;
    height: 40px;
  }
`;

export const Label = styled.label`
  margin: 10px 0;
  font-size: 15px;
  color: #636088;
  font-weight: 600;
`;

export const CheckboxBrace = styled.div`
  display: flex;
  margin: 10px 0;
  gap: 10px;
  color: #636088;
  font-weight: 300;
  text-align: left;

  @media (max-width: 770px) {
    font-size: 13px;
  }
`;

export const CheckboxLabel = styled.label`
  color: #636088;
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
`;

export const Btn = styled.button`
  width: 450px;
  height: 45px;
  text-align: center;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #2161df;
  color: #cbd9f7;
  cursor: pointer;
  margin: 20px;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 770px) {
    width: 300px;
    height: 40px;
  }
`;

export const PngImages = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: 20px 15px 25px 0;
  border-radius: 50%;
`;

export const RegisterBtn = styled.p`
  color: #acabba;
  font-size: 15px;
  font-weight: 600;
`;

export const Ancor = styled.a`
  color: #497ee7;
  text-decoration: none;
`;

export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkDesign = styled(Link)`
  text-decoration: none;
  margin-left: 5px;
  cursor: pointer;
  color: #6a6f87;

  &:hover {
    color: #628bec;
  }
`;

export const ErrorTextLabel = styled.span`
  display: flex;
  color: #2b3034;
  font-size: 15px;
  align-items: center;
  margin: 20px 0px 5px 15px;
  justify-content: space-between;
`;

export const DangerText = styled.p`
  margin: 0;
  color: #ef4444;
  font-size: 13px;
  padding: 3px 5px;
  font-weight: 100px;
  border-radius: 5px;
  text-align: center;
`;
