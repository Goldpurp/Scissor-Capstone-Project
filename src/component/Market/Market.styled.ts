import styled from "styled-components";
import banner from "../../../public/Images/sky.jpeg";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 250px;
  background-size: contain;
  background: url(${banner});

  @media (max-width: 430px) {
    height: 200px;
  }
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin: 20px 0;

  @media (max-width: 430px) {
    font-size: 32px;
  }
`;

export const HeaderText2 = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;

  @media (max-width: 430px) {
    font-size: 14px;
    max-width: 300px;
  }
`;

export const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 130px;
  font-size: 18px;
  font-weight: 700;
  padding: 0 10px;
  border-radius: 25px;
  text-decoration: none;
  border: none;
  outline: none;
  background-color: #2161df;
  color: #cbd9f7;
  cursor: pointer;

  @media (max-width: 430px) {
    font-size: 13px;
    height: 35px;
    width: 100px;
  }
`;

export const LinkDesign = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #6a6f87;

  &:hover {
    color: #628bec;
  }
`;
