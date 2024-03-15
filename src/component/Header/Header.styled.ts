import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;

  @media (max-width: 430px) {
    display: flex;
    justify-content: start;
  }
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 40px;
  font-weight: 900;
`;

export const NavListItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 30px;
  cursor: pointer;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const NavDivItems = styled.div``;

export const Login = styled.a`
  text-decoration: none;
  color: #787c96;
  padding: 8px 45px;
  font-size: 15px;
  font-weight: 900;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const BtnStart = styled.button`
  background-color: #ea3266;
  color: #fddae3;
  border: none;
  border-radius: 15px;
  width: fit-content;
  padding: 8px 12px;
  font-size: 15px;
  cursor: pointer;

  @media (max-width: 430px) {
    display: none;
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

export const MobileNav = styled.div`
  display: flex;
  gap: 200px;

  @media (max-width: 430px) {
    display: block;
    flex-direction: column;
  }

  /* &:hover {
    color: #628bec;
    border-bottom: 1px solid red;
  } */
`;
