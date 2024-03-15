import {
  MainContainer,
  HeroBrace,
  BtnLinkDisaplay,
  BtnLinkDisaplayAds,
  HeaderText1,
  HeaderTextAds1,
  HeaderText2,
  HeaderTextAds2,
  ImageBrace,
  Image,
  MainContainer2,
  Btn,
} from "./BioPages.styled";
import img from "../../../public/Images/BioPages.png";
import img1 from "../../../public/Images/oneLink.jpeg";
import img2 from "../../../public/Images/map.jpeg";
import Market from "../../component/Market/Market";

export default function BioPages() {
  return (
    <>
      <MainContainer>
        <HeroBrace>
          <BtnLinkDisaplay>Bio Pages</BtnLinkDisaplay>

          <HeaderText1>Bio Pages</HeaderText1>
          <HeaderText2>
            Convert your followers by creating beautiful pages that group all of
            your important links on the single page.
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
          <Btn>Get Started</Btn>
        </HeroBrace>
      </MainContainer2>

      <MainContainer2>
        <HeroBrace>
          <BtnLinkDisaplayAds>Trackable</BtnLinkDisaplayAds>

          <HeaderTextAds1>Track and optimize</HeaderTextAds1>
          <HeaderTextAds2>
            Profile are fully trackable and you can find out exactly how many
            people have visited your profile or clicked links on your profile
            and where they are from.
          </HeaderTextAds2>

          <Btn>Get Started</Btn>
        </HeroBrace>

        <ImageBrace>
          <Image src={img2} alt="Image" />
        </ImageBrace>
      </MainContainer2>
      <Market />
    </>
  );
}
