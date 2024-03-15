
import {
  MainContainer,
  HeroBrace,
  BtnLinkDisaplay,
  HeaderText1,
  HeaderText2,
  ImageBrace,
  Image,
} from "./Pricing.styled";
import img from "../../../public/Images/Pricing.png";
import Market from "../../component/Market/Market";

export default function Pricing() {
  return (
    <>

      <MainContainer>
        <HeroBrace>
          <BtnLinkDisaplay>Pricing</BtnLinkDisaplay>

          <HeaderText1>Simple Pricing</HeaderText1>
          <HeaderText2>
            Transparent pricing for everyone. Always know what you will pay.
          </HeaderText2>
  
        </HeroBrace>

        <ImageBrace>
          <Image src={img} alt="Image" />
        </ImageBrace>

   
      </MainContainer>

      <Market/>

    </>
  );
}
