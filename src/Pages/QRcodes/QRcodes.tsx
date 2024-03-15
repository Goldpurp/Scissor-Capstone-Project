
import {
  MainContainer,
  HeroBrace,
  BtnLinkDisaplay,
  HeaderText1,
  HeaderText2,
  ImageBrace,
  Image,

  MainContainer2,
  BtnLinkDisaplayAds,
  HeaderTextAds1,
  HeaderTextAds2,
  Btn2
} from "./QRcodes.styled";
import img from "../../../public/Images/qrCode.png";
import img1 from "../../../public/Images/QrScan.png";
import img2 from "../../../public/Images/mapQR.jpeg";
import Market from "../../component/Market/Market";

export default function QRcodes() {
  return (
    <>

      <MainContainer>
        <HeroBrace>
          <BtnLinkDisaplay>QR Codes</BtnLinkDisaplay>

          <HeaderText1>QR Codes</HeaderText1>
          <HeaderText2>
            Easy to use, dynamic and customizable QR codes for your marketing
            campaigns. Analyze statistics and optimize your marketing strategy
            and increase engagement.
          </HeaderText2>
  
        </HeroBrace>

        <ImageBrace>
          <Image src={img} alt="Image" />
        </ImageBrace>

      </MainContainer>


      <MainContainer2>
        <ImageBrace>
          <Image src={img1} alt="Image" />
        </ImageBrace>

        <HeroBrace>
          <BtnLinkDisaplayAds>One Link</BtnLinkDisaplayAds>

          <HeaderTextAds1>One link to rule them all</HeaderTextAds1>
          <HeaderTextAds2>
            Create beautiful profile and add contents like links, donation,
            videos and more for your social media users. Share a single on your
            social media profiles so your users can easily find all of your
            important links on a single page.
          </HeaderTextAds2>
          <Btn2>Get Started</Btn2>
        </HeroBrace>
      </MainContainer2>

      <MainContainer2>
        <HeroBrace>
          <BtnLinkDisaplayAds>Trackable</BtnLinkDisaplayAds>

          <HeaderTextAds1>Track and optimize</HeaderTextAds1>
          <HeaderTextAds2>
            Profile are fully trackable and you can find out exactly how many
            people have visited your profile or clicked links on your profile
            and where they are from.</HeaderTextAds2>

          <Btn2>Get Started</Btn2>
        </HeroBrace>

        <ImageBrace>
          <Image src={img2} alt="Image" />
        </ImageBrace>

      </MainContainer2>

      <Market/>
    </>
  );
}
