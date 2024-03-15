import img from "../../../public/Images/loginImg.png";
import fb from "../../../public/Images/fb.png";
import x from "../../../public/Images/X.png";
import Google from "../../../public/Images/google.png";
import {
  MainContainer,
  ImageBrace,
  Image,
  LoginBrace,
  HeaderText,
  Input,
  Label,
  CheckboxBrace,
  CheckboxLabel,
  Btn,
  PngImages,
  SignUp,
  Ancor,
  LinkDesign,
  ErrorTextLabel,
  DangerText,
} from "./Login.styled";
import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    isAgreed: false,
  });

  const [errorText, setErrorText] = useState({
    username: "",
    password: "",
    success: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { type, name, value, checked } = event.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errorText[name as keyof typeof errorText]) {
      setErrorText({ ...errorText, [name]: "" });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errorDisplay = {
      username: "",
      password: "",
      success: "",
    };

    if (!loginData.username && !loginData.password) {
      setErrorText({
        ...errorDisplay,
        username: "field empty",
        password: "field empty",
      });
    } else if (!loginData.username) {
      setErrorText({
        ...errorDisplay,
        username: "enter your username",
      });
    } else if (!loginData.password) {
      setErrorText({
        ...errorDisplay,
        password: "please enter password",
      });
    } else {
      setErrorText({
        ...errorDisplay,
        success: "Login successful",
      });
    }
  }

  return (
    <>
      <MainContainer>
        <ImageBrace>
          <Image src={img} alt="Image" />
        </ImageBrace>

        <LoginBrace onSubmit={handleSubmit}>
          <HeaderText>Login</HeaderText>
          <p>{errorText.success}</p>

            <div>

          <ErrorTextLabel>
            <Label>Username</Label>
            <DangerText>{errorText.username}</DangerText>
          </ErrorTextLabel>
          <Input
            type="text"
            placeholder="Email address or username"
            value={loginData.username}
            name="username"
            onChange={handleChange}
            />
            </div>


          <div>

          <ErrorTextLabel>
          <Label>Password</Label>
          <DangerText>{errorText.password}</DangerText>
          </ErrorTextLabel>
          <Input
            type="password"
            placeholder="Password"
            value={loginData.password}
            name="password"
            onChange={handleChange}
            />
            </div>

          <CheckboxBrace>
            <div>
              <input
                type="checkbox"
                checked={loginData.isAgreed}
                name="isAgreed"
                onClick={() =>
                  setLoginData({
                    ...loginData,
                    isAgreed: !loginData.isAgreed,
                  })
                }
              />
              <CheckboxLabel>Remember me</CheckboxLabel>
            </div>

            <div>
              <Ancor>Forget password</Ancor>
            </div>
          </CheckboxBrace>

          <Btn>Login</Btn>

          <p>--------------Or--------------</p>

          <div>
            <PngImages src={fb} alt="fb" />
            <PngImages src={x} alt="X" />
            <PngImages src={Google} alt="Google" />
          </div>

          <SignUp>
            Don't have an account?
            <LinkDesign to={"/sign-up"}>
              <Ancor href="#">Sign up</Ancor>
            </LinkDesign>
          </SignUp>
        </LoginBrace>
      </MainContainer>
    </>
  );
}
