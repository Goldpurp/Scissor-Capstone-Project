import {
  Container,
  Logo,
  HeaderText,
  LowerText,
  LogoText,
  FooterTextBrace,
  InputBrace,
  Input,
  Btn,
  FooterTextBracePlusInput,
  LinkDesign,
} from "./Footer.Styled";

export default function Footer() {
  return (
    <Container>
      <div>
        <Logo>Scissor.io</Logo>
        <LogoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi,
          fugiat magnam distinctio possimus
        </LogoText>
      </div>

      <FooterTextBrace>
        <HeaderText>Solutions</HeaderText>

        <LinkDesign to={"/bio"}>
          <LowerText>Bio Profiles</LowerText>
        </LinkDesign>

        <LinkDesign to={"/qr-codes"}>
          <LowerText>QR Codes</LowerText>
        </LinkDesign>

        <LinkDesign to={"/faq"}>
          <LowerText href="#">Faqs</LowerText>
        </LinkDesign>
      </FooterTextBrace>

      <FooterTextBrace>
        <HeaderText>Company</HeaderText>
        <LowerText>Digital Experience</LowerText>
        <LowerText href="#">Developer API</LowerText>
        <LinkDesign to={"/contact-us"}>
          <LowerText href="#">Contact Us</LowerText>
        </LinkDesign>
      </FooterTextBrace>

      <FooterTextBracePlusInput>
        <HeaderText>Newsletter</HeaderText>
        <LogoText>
          {" "}
          fugiat magnam distinctio possimus porro quisquam ipsam.
        </LogoText>

        <InputBrace>
          <Input type="text" placeholder="Email Here" />
          <Btn>B</Btn>
        </InputBrace>
      </FooterTextBracePlusInput>
    </Container>
  );
}
