import img from "../../../public/Images/register.png";
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
  CheckboxInput,
  Btn,
  PngImages,
  Ancor,
  RegisterBtn,
  FormEdit,
  LinkDesign,
  DangerText,
  ErrorTextLabel
} from "./Register.styled";
import { useState } from "react";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    isAgreed: false,
  });

  const [errorMsg, setErrorMsg] = useState({
    username: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    success: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;

    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errorMsg[name as keyof typeof errorMsg]) {
      setErrorMsg({
        ...errorMsg,
        [name]: "",
      });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errorMsgDisplay = {
      username: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      success: "",
    };

    if (
      !registerData.username &&
      !registerData.phoneNumber &&
      !registerData.emailAddress &&
      !registerData.password
    ) {
      setErrorMsg({
        ...errorMsgDisplay,

        username: "required",
        phoneNumber: "required",
        emailAddress: "required",
        password: "required",
      });
    } else if (!registerData.username) {
      setErrorMsg({
        ...errorMsgDisplay,
        username: "Enter your full name please",
      });
    } else if (!registerData.phoneNumber) {
      setErrorMsg({
        ...errorMsgDisplay,
        phoneNumber: "Enter valid phone number",
      });
    } else if (!registerData.emailAddress) {
      setErrorMsg({
        ...errorMsgDisplay,
        emailAddress: "Enter a valid email address",
      });
    } else if (!registerData.password) {
      setErrorMsg({
        ...errorMsgDisplay,
        password: "Password should not be empty",
      });
    } else if (registerData.password.length < 5) {
      setErrorMsg({
        ...errorMsgDisplay,
        password: "Password is too short",
      });
    } else if (registerData.password.search(/[0-9]/) < 0) {
      setErrorMsg({
        ...errorMsgDisplay,
        password: "include at least one number",
      });
    } else if (registerData.password.search(/[A-Z]/) < 0) {
      setErrorMsg({
        ...errorMsgDisplay,
        password: "include at least one uppercase",
      });
    } else if (registerData.password.search(/[!@#$*?]/) < 0) {
      setErrorMsg({
        ...errorMsgDisplay,
        password: "include at least one character",
      });
    } else {
      setErrorMsg({
        ...errorMsgDisplay,
        success: "successfully Sign up",
      });
    }
  }

  return (
    <>
      <MainContainer>
        <ImageBrace>
          <Image src={img} alt="Image" />
        </ImageBrace>

        <LoginBrace>
          <FormEdit onSubmit={handleSubmit}>
            <HeaderText>Register</HeaderText>
            <p>{errorMsg.success}</p>

            <div>
              <ErrorTextLabel>
                <Label>Username</Label>
                <DangerText>{errorMsg.username}</DangerText>
              </ErrorTextLabel>
              <Input
                type="text"
                name="username"
                value={registerData.username}
                placeholder="Full Name Here"
                onChange={handleChange}
              />
            </div>

            <div>
              <ErrorTextLabel>
                <Label>Phone Number</Label>
                <DangerText>{errorMsg.phoneNumber}</DangerText>
              </ErrorTextLabel>
              <Input
                type="text"
                name="phoneNumber"
                value={registerData.phoneNumber}
                placeholder="Enter Your Phone Number"
                onChange={handleChange}
              />
            </div>

            <div>
              <ErrorTextLabel>
                <Label>Email Address</Label>
                <DangerText>{errorMsg.emailAddress}</DangerText>
              </ErrorTextLabel>
              <Input
                type="email"
                name="emailAddress"
                value={registerData.emailAddress}
                placeholder="Enter Email Address"
                onChange={handleChange}
              />
            </div>

            <div>
              <ErrorTextLabel>
                <Label>Password</Label>
                <DangerText>{errorMsg.password}</DangerText>
              </ErrorTextLabel>
              <Input
                type="password"
                name="password"
                value={registerData.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <div>
              <CheckboxBrace>
                <CheckboxInput
                  type="checkbox"
                  name="isAgreed"
                  checked={registerData.isAgreed}
                  onChange={() => {
                    setRegisterData({
                      ...registerData,
                      isAgreed: !registerData.isAgreed,
                    });
                  }}
                />

                <CheckboxLabel>
                  I accept the terms od service and privacy policy
                </CheckboxLabel>
              </CheckboxBrace>
            </div>

            <Btn type="submit">Register</Btn>
          </FormEdit>

          <p>--------------Or--------------</p>

          <div>
            <PngImages src={fb} alt="fb" />
            <PngImages src={x} alt="X" />
            <PngImages src={Google} alt="Google" />
          </div>

          <RegisterBtn>
            Already have an account?
            <LinkDesign to={"/login"}>
              <Ancor href="#">Log in</Ancor>
            </LinkDesign>
          </RegisterBtn>
        </LoginBrace>
      </MainContainer>
    </>
  );
}
