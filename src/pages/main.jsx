import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 1000px;
  background: #902443;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 269px;
  height: 500px;
  top: 149px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
  margin: auto;
`;

const Logo = styled.div`
  position: absolute;
  width: 81px;
  left: 94px;
  height: 81px;
  margin: auto;
  top: 43px;
`;

const Title = styled.div`
  position: absolute;
  width: 251px;
  height: 48px;
  top: 134px;
  left: 9px;
  margin: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #5e162b;
`;

const Name = styled.div`
  position: absolute;
  width: 36px;
  left: 50px;
  height: 26px;
  top: 218px;
`;

const NameBox = styled.input`
  position: absolute;
  width: 210px;
  height: 35px;
  top: 241px;
  left: 32px;
  background: #cd99a6;
  border-radius: 50px;
  border: 0;
  outline: none;
`;

const Phone = styled.div`
  position: absolute;
  width: 74px;
  left: 50px;
  height: 26px;
  top: 294px;
`;

const PhoneBox = styled.input`
  position: absolute;
  width: 210px;
  height: 35px;
  top: 320px;
  left: 32px;
  background: #cd99a6;
  border-radius: 50px;
  border: 0;
  outline: none;
`;

const Button = styled.div`
  position: absolute;
  width: 93px;
  height: 36px;
  top: 389px;
  left: 90px;
  background: #902443;
  border-radius: 10px;
`;

const BtnLetter = styled.div`
  position: absolute;
  height: 26px;
  top: 5px;
  left: 26px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;

const Footer = styled.div`
  position: relative;
  width: 248px;
  height: 29px;
  top: 530px;
  margin: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`;

const Rec = styled.div`
  position: absolute;
  width: 10px;
  top: 222px;
  left: 32px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
`;

const Rec2 = styled.div`
  position: absolute;
  width: 10px;
  top: 298.5px;
  left: 32px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
`;

const main = () => {
  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo.png`}
            width="81px"
          />
        </Logo>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br /> 11기 아기사자 합격자 발표
        </Title>
        <Rec />
        <Name>성함</Name>
        <NameBox></NameBox>
        <Rec2 />
        <Phone>전화번호</Phone>
        <PhoneBox placeholder="010-xxxx-xxxx"></PhoneBox>
        <Button>
          <BtnLetter>입력</BtnLetter>
        </Button>
        <Footer>DONGDUK X LIKELION</Footer>
      </WhiteBox>
    </Background>
  );
};

export default main;
