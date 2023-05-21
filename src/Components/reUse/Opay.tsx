import React from "react";
import styled from "styled-components";
import Image1 from "../../Assets/service2.png";
import Image2 from "../../Assets/service1.png";

const Opay = () => {
  const props = [
    {
      id: 1,
      img: Image1,
      BigText: `Fund your Account, 
  Make Transfers, Pay Bills`,
      SmallText: `    Live life on your own terms!
  Add money to your OPay wallet and
   transfer to other bank accounts for free. 
   Enjoy bonuses on airtime & data top-ups and 
   fast bill payments at no extra charge`,
      rotate: "",
    },
    {
      id: 2,
      img: Image2,
      BigText: `Flexible Savings`,
      SmallText: `Need a better way to save? Enjoy up to 15% annual 
      interest paid daily when you save with OPay and spend without 
      paying withdrawal charges.`,
      rotate: "yes",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Image src={Image1} />
          <Div>
            <BigText>Flexible Savings</BigText>
            <SmallText>
              {" "}
              Live life on your own terms! Add money to your OPay wallet and
              transfer to other bank accounts for free. Enjoy bonuses on airtime
              & data top-ups and fast bill payments at no extra charge
            </SmallText>
          </Div>
          <Image src={Image2} />
          <Div>
            <BigText>Fund your Account</BigText>
            <SmallText>
              {" "}
              Need a better way to save? Enjoy up to 15% annual interest paid
              daily when you save with OPay and spend without paying withdrawal
              charges.
            </SmallText>
          </Div>
        </Main>
      </Container>
    </div>
  );
};

export default Opay;

const BigText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 35px;
  /* line-height: 1.5; */
  /* margin: 50px 0; */
  /* background-color: blue; */
`;
const Image = styled.img`
  width: 450px;
  height: 500px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Div = styled.div``;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SmallText = styled.div`
  width: 400px;
  text-align: center;
  line-height: 1.9;
`;
