import React from "react";
import styled from "styled-components";
import img1 from "../../Assets/frame.png";
import img2 from "../../Assets/apple.png";
import img3 from "../../Assets/googleplay.png";
import img5 from "../../Assets/vector.png";
import img4 from "../../Assets/group-header.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftDiv>
            <TitleDiv>
              <Blue>We are</Blue>
              <Green>Beyond Banking</Green>
            </TitleDiv>
            <ImgSlash src={img5} />
            <ContentDiv>
              OPay gives you the freedom to get more. Our solutions make
              payments easier, transfers free, savings more rewarding and gives
              you cashback on airtime and data top-ups. With 100% network
              uptime, you can make payments in seconds without transaction
              failure. Enjoy a better life with OPay.
            </ContentDiv>
            <LicenseDiv>
              <DivI src={img1} />
            </LicenseDiv>
            <InstallDiv>
              <Div src={img2} />
              <Div1 src={img3} />
            </InstallDiv>
          </LeftDiv>
          <RightDiv>
            <Img src={img4} />
          </RightDiv>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1243px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(178, 255, 178);
  background: linear-gradient(
    180deg,
    rgba(178, 255, 178, 1) 0%,
    rgba(241, 241, 241, 1) 42%,
    rgba(255, 255, 255, 1) 100%
  );
  flex-wrap: wrap;
`;

const LeftDiv = styled.div``;

const TitleDiv = styled.div`
  display: flex;
  font-size: 50px;

  @media screen and (max-width: 1243px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  
  @media screen and (max-width: 515px) {
    font-size: 30px;
  }
`;

const ContentDiv = styled.div`
  font-size: 20px;
  color: #085b77;
  width: 500px;
  font-weight: 500;

  @media screen and (max-width: 1243px) {
    text-align: center;
    width: 670px;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
    width: 500px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 400px;
  }

  @media screen and (max-width: 515px) {
    width: 350px;
    font-size: 15px;
  }
`;

const LicenseDiv = styled.div`
  display: flex;
  width: 450px;
  height: 50px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1243px) {
    margin-left: 150px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const InstallDiv = styled.div`
  width: 340px;
  height: 45px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1243px) {
    margin-left: 170px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 515px) {
    width: 220px;
    margin-top: 20px;
    height: 35px;
  }
`;

const Blue = styled.div`
  margin-right: 10px;
  color: #085b77;
  font-weight: 700;
`;

const Green = styled.div`
  color: #00f100b9;
  font-weight: 700;
`;

const DivI = styled.img`
  margin-top: 50px;

  @media screen and (max-width: 515px) {
    width: 300px;
    margin-top: 20px;
  }
`;

const Div = styled.img`
  width: 150px;
  height: 100%;
  border: 1px solid silver;
  border-radius: 10px;

  @media screen and (max-width: 515px) {
    width: 100px;
    height: 100%;
  }
`;

const Div1 = styled.img`
  width: 150px;
  height: 100%;
  border: 1px solid silver;
  border-radius: 10px;

  @media screen and (max-width: 515px) {
    width: 100px;
    height: 100%;
  }
`;

const RightDiv = styled.div`
  @media screen and (max-width: 1243px) {
    width: 600px;
    height: 600px;
  }
  @media screen and (max-width: 768px) {
    width: 350x;
    height: 500px;
  }

  @media screen and (max-width: 565px) {
    width: 400px;
    height: 400px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgSlash = styled.img`
  width: 300px;
  margin-left: 220px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 1243px) {
    margin-left: 270px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 180px;
    width: 250px;
  }

  @media screen and (max-width: 515px) {
    width: 160px;
    margin-left: 150px;
  }
`;
