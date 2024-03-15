import {
  MainContainer,
  HeroBrace,
  BtnLinkDisaplay,
  HeaderText1,
  ImageBrace,
  Image,
} from "./Faqs.styled";
import img from "../../../public/Images/faqs.jpeg";

export default function Faqs() {
  return (
    <>

      <MainContainer>
        <HeroBrace>
          <BtnLinkDisaplay>FAQs</BtnLinkDisaplay>

          <HeaderText1>Frequently Asked Questions</HeaderText1>
  
        </HeroBrace>

        <ImageBrace>
          <Image src={img} alt="Image" />
        </ImageBrace>

   
      </MainContainer>

    </>
  );
}
