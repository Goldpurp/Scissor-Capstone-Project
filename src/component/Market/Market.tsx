import {
  Container,
  HeaderText,
  HeaderText2,
  Btn,
  LinkDesign,
} from "./Market.styled";

export default function Market() {
  return (
    <Container>
      <HeaderText>Market with confidence</HeaderText>
      <HeaderText2>
        Start your marketing campaign now and reach your customers efficiently
      </HeaderText2>

      <LinkDesign to={"/sign-up"}>
        <Btn href="#">Get Started</Btn>
      </LinkDesign>
    </Container>
  );
}
