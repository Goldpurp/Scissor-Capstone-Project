import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  width: 100%;
  height: 300px;
  background-color: #0e0c29;
  color: white;

  @media (max-width: 770px) {
    height: fit-content;
    width: 100%;
    display: block;
    padding: 20px;
  }
`;

export const Logo = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-weight: 900;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

export const HeaderText = styled.h3`
  font-size: 26px;
  font-weight: 700;

  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

export const LowerText = styled.a`
  font-size: 18px;
  max-width: 190px;
  text-decoration: none;
  cursor: pointer;
  color: #ffff;

  @media (max-width: 770px) {
    font-size: 10px;
  }
`;

export const LogoText = styled.p`
  font-size: 16px;
  max-width: 190px;
  line-height: normal;
  margin: 20px 0;

  @media (max-width: 770px) {
    font-size: 15px;
  }
`;

export const LinkDesignLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #ffff;
`;

export const FooterTextBrace = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 40px;
`;

export const FooterTextBracePlusInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 40px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const InputBrace = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 220px;
  height: 45px;
  border-radius: 22px;
  border: none;
  outline: none;
  background-color: #ffff;
  padding: 0 20px;

  ::placeholder {
    color: #f8f9fd;
  }
`;

export const Btn = styled.button`
  width: 45px;
  height: 45px;
  padding: 0 10px;
  position: absolute;
  text-align: center;
  border: 1px solid #4479e9;
  background-color: #ffff;
  border-radius: 50%;
  right: 0px;
  bottom: 0px;
  color: #4479e9;
  cursor: pointer;

  &:hover {
    background-color: #4479e9;
    color: #ffff;
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
