import {
  Nav,
  Logo,
  NavListItems,
  NavDivItems,
  Login,
  BtnStart,
  LinkDesign,
  MobileNav,
} from "./Header.styled";

export default function Header() {
  return (
    <Nav>
      <Logo href="#">Scissor.io</Logo>

      <MobileNav>
        
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
    </Nav>
  );
}
