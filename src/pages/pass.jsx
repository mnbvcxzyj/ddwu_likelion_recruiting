import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fae4ea;
  margin: 0 auto;
  height: 1000px;
`;

const WhiteDiv = styled.div`
  position: relative;
  width: 327px;
  height: 700px;
  top: 30px;
  margin: 0 auto;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const LogoImg = styled.img`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 134px;
  top: 40px;
`;

const PassText = styled.p`
  padding-top: 110px;
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

const PassNameDiv = styled.div`
  padding-top: 35px;
  padding-bottom: 15px;
  margin-left: 113px;
  text-align: center;
  font-family: "Pretendard";
  display: flex;

  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  color: #000000;
`;

const PassName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #0075ff;
`;

const PassNameSub = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

const TextDiv = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.01em;
`;

const LetterImg = styled.img`
  height: 252.41px;
  margin-top: -30px;
  margin-left: -30px;
`;

const pass = () => {
  return (
    <Container>
      <WhiteDiv>
        <LogoImg src="../images/ddwu_logo.png" />
        <PassText>
          합격을
          <br />
          축하합니다!
        </PassText>
        <PassNameDiv>
          <PassName>어쩌고</PassName>
          <PassNameSub>님</PassNameSub>은
        </PassNameDiv>
        <TextDiv>
          동덕여대 멋사 11기에 최종합격 하셨습니다 🎉
          <br />긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br /> 자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          <a href="https://discord.gg/BSHH7mck" target={"_blank"}>
            https://discord.gg/BSHH7mck
          </a>
          <br />
          <br />
          3월 17일까지 디스코드에 들어와주세요 🦁
          <br />
          <br /> 3/26(일) 동덕 멋사 OT에서 만나요~ <br />
          *장소 추후 안내 예정
        </TextDiv>
        <LetterImg src="../images/envelope.png" />
      </WhiteDiv>
    </Container>
  );
};

export default pass;
