import React from "react";
import styled from "styled-components";
import img from "../../Assets/blackStar.png";
import imgs from "../../Assets/phone1.png";
import imgss from "../../Assets/phone2.png";
import imgsss from "../../Assets/phone3.png";
import imgssss from "../../Assets/phone4.png";

const HoverSide = () => {
  return (
    <div>
      <Container>
        <Main>
          <ParentDiv>
            <Star src={img} />
            <Image src={imgs} />
            <Context>
              <Bold>Bank Transfers</Bold>
              <Light>
                Fast Transfers with 100% success rate to all banks across
                Nigeria, anytime for free.
              </Light>
            </Context>
          </ParentDiv>
          <ParentDiv>
            <Star src={img} />
            <Image src={imgss} />
            <Context>
              <Bold>Flexible Savings</Bold>
              <Light>
                Up to 15% to annual interest on flexible savings with daily
                interest and unlimited withdrawals at no cost(Powered by
                Blueridge MFB);
              </Light>
            </Context>
          </ParentDiv>
          <ParentDiv>
            <Star src={img} />
            <Image src={imgsss} />
            <Context>
              <Bold>Instant and Free Debit Cards</Bold>
              <Light>
                Apply and Get a Card Instantly at select Opay Agent or Apply Via
                the Opay App. Enjoy 10 free ATM withdrawals monthly and Zero
                maintenance fee.
              </Light>
            </Context>
          </ParentDiv>
          <ParentDiv>
            <Star src={img} />
            <Image src={imgssss} />
            <Context>
              <Bold>Amazing Bonuses</Bold>
              <Light>
                All new users can enjoy an amazing welcome bonus while all users
                can enjoy cashback on every airtime and data recharge.
              </Light>
            </Context>
          </ParentDiv>
        </Main>
      </Container>
    </div>
  );
};

export default HoverSide;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;

  @media screen and (max-width: 980px) {
    width: 70%;
    margin: 0;
  }
  @media screen and (max-width: 550px) {
    width: 70%;
    margin: 0;
  }
`;

const ParentDiv = styled.div`
  width: 350px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 200ms;
  margin-top: 300px;

  :hover {
    cursor: pointer;
    background-color: lightgreen;
    color: white;
  }

  @media screen and (max-width: 1150px) {
    width: 300px;
    border-radius: 15px;
  }
`;

const Star = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (max-width: 1150px) {
    width: 40px;
    height: 40px;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 120px;
  left: 80px;
  width: 400px;
  height: 600px;

  @media screen and (max-width: 1150px) {
    left: 50px;
  }

  @media screen and (max-width: 650px) {
    width: 350px;
  }
`;

const Context = styled.div`
  width: 300px;
  margin-left: 20px;

  :hover {
    cursor: pointer;
    color: white;
  }
  @media screen and (max-width: 1150px) {
    width: 250px;
  }
`;

const Bold = styled.div`
  font-size: 20px;
  color: #085b77;
  font-weight: 700;
`;

const Light = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 17px;
  color: grey;

  :hover {
    cursor: pointer;
    color: white;
  }
`;
