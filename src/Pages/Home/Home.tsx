import Market from "../../component/Market/Market";
import { useState } from "react";
import FileSaver from "file-saver";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  MainContainer,
  Container,
  HeroBrace,
  BtnLinkDisaplay,
  HeaderText,
  HeaderText2,
  ImageBrace,
  Image,
  InputBrace,
  Input,
  Btn,
  MainContainer2,
  BtnLinkDisaplayAds,
  HeaderTextAds1,
  HeaderTextAds2,
  Btn2,
  Icon,
  IconBrace,
  Span,
  Div,
  MainContainer3,
  BtnLinkDisaplayAds2,
  Btn3,
  HeaderTextAdsBlue,
  HeaderTextAdsBlue2,
  MainContainer4,
  Btn4,
  AppIcon,
  AppIconBrace,
  HeaderTextApp1,
  HeaderTextApp2,
  ShortenedUrl,
  CopyBtn,
  NewUrl,
  QrCode,
  InputBraceResultUrl,
} from "./Home.styled";
import img from "../../../public/Images/heroImage.png";
import img1 from "../../../public/Images/sales.jpeg";
import img2 from "../../../public/Images/privacy.jpeg";
import img3 from "../../../public/Images/qrCampaign.jpeg";
import img4 from "../../../public/Images/pinLocation.jpeg";
import icon1 from "../../../public/Images/flash.png";
import icon2 from "../../../public/Images/stats.jpeg";
import icon3 from "../../../public/Images/profile.png";
import icon4 from "../../../public/Images/link.png";
import icon5 from "../../../public/Images/control.png";
import icon6 from "../../../public/Images/dashboard.png";
import appIcon1 from "../../../public/Images/wordpress.jpeg";
import appIcon2 from "../../../public/Images/slack.jpeg";
import appIcon3 from "../../../public/Images/linked in.jpeg";
import appIcon4 from "../../../public/Images/Xx.jpeg";
import appIcon5 from "../../../public/Images/facebook.jpeg";
import appIcon6 from "../../../public/Images/google.jpeg";
import appIcon7 from "../../../public/Images/zapier.jpeg";
import appIcon8 from "../../../public/Images/tiktok.jpeg";
import appIcon9 from "../../../public/Images/google tag manager.jpeg";
import appIcon10 from "../../../public/Images/Quora.jpeg";
import appIcon11 from "../../../public/Images/reddit.jpeg";
import appIcon12 from "../../../public/Images/google analiyics.jpeg";
import appIcon13 from "../../../public/Images/shortcuts.jpeg";
import appIcon14 from "../../../public/Images/printerest.jpeg";
import appIcon15 from "../../../public/Images/snapchat.jpeg";

export default function Home() {
  type ShortenedLink = {
    link: string;
    qr_code: string;
  };

  const [, setActive] = useState(false);
  const [userInput, setUserInput] = useState<string>();
  const [shortenedLink, setShortenedLink] = useState<ShortenedLink>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer 20aa82372821f4370dca3250bf2b4a568c52e1a7`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: userInput,
        domain: "bit.ly",
        group_guid: `Bo2qgTYASv3`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const new_link = data.link.replace("https://", "");
        fetch(
          `    https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
          {
            mode: "cors",
            headers: {
              Authorization: `Bearer 20aa82372821f4370dca3250bf2b4a568c52e1a7`,
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            setShortenedLink(result);
            setActive(true);
          });
      });
      setUserInput("");
      
        FileSaver.saveAs(`https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`, "image.jpg");
  }

  return (
    <>
      <MainContainer>
        <Container>
          <HeroBrace>
            <BtnLinkDisaplay>Easy Link Shortning </BtnLinkDisaplay>

            <HeaderText>Scissor short URL & QR code generator</HeaderText>
            <HeaderText2>
              a short link allow you to collect so much data about your
              customers & their behaviors.
            </HeaderText2>

            <InputBrace onSubmit={handleSubmit}>
              <Input
                type="text"
                value={userInput}
                placeholder="paste a link to shorten it"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUserInput(event.target.value)
                }
              />

              <Btn type="submit">Shorten</Btn>
            </InputBrace>

            <InputBraceResultUrl>
              {shortenedLink && (
                <ShortenedUrl>
                  <NewUrl> {shortenedLink.link} </NewUrl>

                  <CopyToClipboard text={shortenedLink.link}>
                    <CopyBtn
                      onClick={() => {
                        alert("Copied to clipboard");
                      }}
                    >
                      <FaCopy />
                    </CopyBtn>
                  </CopyToClipboard>

                  <QrCode
                    src={shortenedLink.qr_code}
                    alt="Qr code"
                    className="qr_img"
                  />
                </ShortenedUrl>
              )}
            </InputBraceResultUrl>
          </HeroBrace>

          <ImageBrace>
            <Image src={img} alt="Image" />
          </ImageBrace>
        </Container>
      </MainContainer>

      <MainContainer2>
        <ImageBrace>
          <Image src={img1} alt="Image" />
        </ImageBrace>

        <HeroBrace>
          <BtnLinkDisaplayAds>Sales & marketing</BtnLinkDisaplayAds>

          <HeaderTextAds1>Perfect for sales & marketing</HeaderTextAds1>
          <HeaderTextAds2>
            Understanding your users and customers will help you increase your
            conversion. Our system allows you to track everything. Whether it is
            the amount of clicks, the country or the referrer, the data is there
            for you to analyze it.
          </HeaderTextAds2>

          <IconBrace>
            <Div>
              <Icon src={icon1} alt="Redirection Tools image" />
              <Span>Redirection Tools</Span>
            </Div>

            <Div>
              <Icon src={icon2} alt="" />
              <Span>Powerful Statistics</Span>
            </Div>

            <Div>
              <Icon src={icon3} alt="" />
              <Span>Beautiful Profile</Span>
            </Div>
          </IconBrace>

          <Btn2>Get Started</Btn2>
        </HeroBrace>
      </MainContainer2>

      <MainContainer2>
        <HeroBrace>
          <BtnLinkDisaplayAds>Sales & marketing</BtnLinkDisaplayAds>

          <HeaderTextAds1>Powerful tools that work</HeaderTextAds1>
          <HeaderTextAds2>
            Our product lets your target your users to better understand their
            behavior and provide them a better overall experience through smart
            re-targeting. We provide you many powerful tools to reach them
            better.
          </HeaderTextAds2>

          <IconBrace>
            <Div>
              <Icon src={icon4} alt="Redirection Tools image" />
              <Span>Redirection Tools</Span>
            </Div>

            <Div>
              <Icon src={icon5} alt="" />
              <Span>Powerful Statistics</Span>
            </Div>

            <Div>
              <Icon src={icon6} alt="" />
              <Span>Beautiful Profile</Span>
            </Div>
          </IconBrace>

          <Btn2>Get Started</Btn2>
        </HeroBrace>

        <ImageBrace>
          <Image src={img2} alt="Image" />
        </ImageBrace>
      </MainContainer2>

      <MainContainer2>
        <ImageBrace>
          <Image src={img3} alt="Image" />
        </ImageBrace>

        <HeroBrace>
          <BtnLinkDisaplayAds>QR Code</BtnLinkDisaplayAds>

          <HeaderTextAds1>QR Codes</HeaderTextAds1>
          <HeaderTextAds2>
            Easy to use, dynamic and customizable QR codes for your marketing
            campaigns. Analyze statistics and optimize your marketing strategy
            and increase engagement.
          </HeaderTextAds2>
          <Btn2>Get Started</Btn2>
        </HeroBrace>
      </MainContainer2>

      <MainContainer3>
        <HeroBrace>
          <BtnLinkDisaplayAds2>Marketing Strategy</BtnLinkDisaplayAds2>

          <HeaderTextAdsBlue>
            Optimize your marketing strategy
          </HeaderTextAdsBlue>
          <HeaderTextAdsBlue2>
            Understanding your users and customers will help you increase your
            conversion. Our system allows you to track everything. Whether it is
            the amount of clicks, the country or the referrer, the data is there
            for you to analyze it.
          </HeaderTextAdsBlue2>

          <Btn3>Get Started </Btn3>
        </HeroBrace>

        <ImageBrace>
          <Image src={img4} alt="Image" />
        </ImageBrace>
      </MainContainer3>

      <MainContainer4>
        <HeroBrace>
          <HeaderTextApp1>Integrations</HeaderTextApp1>
          <HeaderTextApp2>
            connect with popular tools and boost your productivity.
          </HeaderTextApp2>

          <AppIconBrace>
            <AppIcon src={appIcon1} alt="" />
            <AppIcon src={appIcon2} alt="" />
            <AppIcon src={appIcon3} alt="" />
            <AppIcon src={appIcon4} alt="" />
            <AppIcon src={appIcon5} alt="" />
            <AppIcon src={appIcon6} alt="" />
            <AppIcon src={appIcon7} alt="" />
            <AppIcon src={appIcon8} alt="" />
            <AppIcon src={appIcon9} alt="" />
            <AppIcon src={appIcon10} alt="" />
            <AppIcon src={appIcon11} alt="" />
            <AppIcon src={appIcon12} alt="" />
            <AppIcon src={appIcon13} alt="" />
            <AppIcon src={appIcon14} alt="" />
            <AppIcon src={appIcon15} alt="" />
          </AppIconBrace>

          <Btn4>Get Started</Btn4>
        </HeroBrace>
      </MainContainer4>

      <Market />
    </>
  );
}
