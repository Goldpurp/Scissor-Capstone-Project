import { Link } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  height: 90px;

`;

export const Logo = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 40px;
  font-weight: 900;
  cursor: pointer;
  margin-right: 30px;

  @media (max-width: 770px) {
    margin-left: -40px;
  }
`;

export const NavListItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 30px;
  cursor: pointer;

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }
`;

export const NavDivItems = styled.div`

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }
`;

export const Login = styled.a`
  text-decoration: none;
  color: #787c96;
  padding: 8px 45px;
  font-size: 15px;
  font-weight: 900;

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
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

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
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

export const LinkDesignLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000000;
`;

export const MobileNav = styled.div<{active:boolean}>`
  display: flex;
  /* gap: 200px; */

  @media (max-width: 770px) {
    position: absolute;
    top: 0;
    right: 0;
    /* display: flex; */
    display: ${(prop) => (prop.active ? "flex" : "none")};
    flex-direction: column;
    background-color: #ecf6ff;
    width: 100vw;
    height: 100%;
    border-radius: 6px;
    gap: 15px;
    padding: 20px;
    z-index: 1;
  }

  /* &:hover {
    color: #628bec;
    border-bottom: 1px solid red;
  } */
`;

export const Open = styled(RxHamburgerMenu)`
  display: none;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    font-size: 35px;
  }
`;

export const Close = styled(IoMdClose)`
  display: none;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    font-size: 35px;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  margin-right: -50px;
`;
