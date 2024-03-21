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
  LinkDesignLogo,
} from "./Footer.Styled";

export default function Footer() {
  return (
    <Container>
      <div>
        <Logo>
          <LinkDesignLogo to={"/"}>Scissor.io</LinkDesignLogo>
        </Logo>
        <LogoText>
          The Shortner project is a platform that helps you shorten your long
          links for easy sharing. We ensure that your links are concise and easy
          to share. Join us to simplify your sharing experience.
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
          Stay in the loop with our latest news and updates! 
        </LogoText>

        <InputBrace>
          <Input type="text" placeholder="Email Here" />
          <Btn>B</Btn>
        </InputBrace>
      </FooterTextBracePlusInput>
    </Container>
  );
}
