import {
  MainContainer,
  HeroBrace,
  BtnLinkDisaplay,
  HeaderText1,
  HeaderText2,
  LoginBrace,
  LoginBraceInner,
  HeaderText,
  Input,
  Comment,
  Btn,
  InfoBrace,
  Info,
  InfoData
} from "./ContactUs.styled";

export default function ContactUs() {
  return (
    <>


    <MainContainer>
      <HeroBrace>
        <BtnLinkDisaplay>Contact Us</BtnLinkDisaplay>

        <HeaderText1>We're here to help</HeaderText1>
        <HeaderText2>
          If you have any questions,feel free to contact us so we can help you.
        </HeaderText2>
        <InfoBrace>
          <Info href="#">Call Us</Info>
         <InfoData>+234 810 967 5377</InfoData>
        </InfoBrace>
        <InfoBrace>
          <Info href="#">Email Us</Info>
          <InfoData>lilswatch112@gmail.com</InfoData>
        </InfoBrace>
      </HeroBrace>

      <LoginBrace>
        <LoginBraceInner>

        <HeaderText>Get in touch</HeaderText>

        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Email Address" />
        <Input type="text" placeholder="Phone Number" />
        <Comment
          name=""
          id=""
          placeholder="Type your message here....."
          ></Comment>

        <Btn>Submit</Btn>
          </LoginBraceInner>
      </LoginBrace>
    </MainContainer>

      </>
  );
}
