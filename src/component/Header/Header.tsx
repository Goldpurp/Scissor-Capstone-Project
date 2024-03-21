import {
  Nav,
  Logo,
  NavListItems,
  NavDivItems,
  Login,
  BtnStart,
  LinkDesign,
  MobileNav,
  Open,
  Close,
  Hamburger,
} from "./Header.styled";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);


  return (
    <Nav>
      <Logo href="#">Scissor.io</Logo>



      <MobileNav active={active}>


        <NavListItems>
          <LinkDesign to={"/"}>
            <p>Home</p>
          </LinkDesign>

          <LinkDesign to={"/pricing"}>
            <p>Pricing</p>
          </LinkDesign>

          <LinkDesign to={"/qr-codes"}>
            <p>QR Codes</p>
          </LinkDesign>

          <LinkDesign to={"/bio"}>
            <p>Bio Pages</p>
          </LinkDesign>
        </NavListItems>

        <NavDivItems>
          <LinkDesign to={"/login"}>
            <Login href="#">Login</Login>
          </LinkDesign>

          <LinkDesign to={"/sign-up"}>
            <BtnStart>Get Started</BtnStart>
          </LinkDesign>
        </NavDivItems>
      </MobileNav>


      <Hamburger onClick={()=> {
          setActive(prev => !prev)
        }}>
          {active ? <Close/>  : <Open  /> }
         
        </Hamburger>
    </Nav>
  );
}
