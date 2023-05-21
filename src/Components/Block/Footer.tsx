import React from "react";
import styled from "styled-components";
import img1 from "../../Assets/facebook image.png";
import img2 from "../../Assets/M image.png";
import img3 from "../../Assets/instagram image.png";
import img4 from "../../Assets/twitter image.png";

const Footer = () => {
  return (
    <div>
      <Container>
        {/* <HolderBig> */}
        <Main>
          <Blocks>
            <Holder>
              <Header>Company</Header>
              <Content>About Us</Content>
              <Content>The Opay Blog</Content>
              <Content>Join our team</Content>
              <Content>Press & media</Content>
              <Content>Contact Us</Content>
            </Holder>
          </Blocks>
          <Blocks>
            <Holder>
              <Header>Resources</Header>
              <Content>Privacy Policy</Content>
              <Content>Terms of Service</Content>
              <Content>Service Level Agreement</Content>
              <Content>Service Catalog</Content>
              <Content>Documentation</Content>
              <Content>Security</Content>
            </Holder>
          </Blocks>
          <Blocks>
            <Holder>
              <Header>Discover</Header>
              <Content>Personal</Content>
              <Content>Bussiness</Content>
            </Holder>
          </Blocks>
          <Blocks>
            <Holder>
              <Header>Adress</Header>
              <Contents>
                Alexander House, Otunba Jobi Fele Way, Alausa, Ikeja, Lagos.{" "}
              </Contents>
            </Holder>
          </Blocks>
          <Blocks>
            <Holder>
              <Header>Socials</Header>
              <Contents>
                <SocialIcons>
                  <Img src={img1} />
                  <Img src={img2} />
                  <Img src={img3} />
                  <Img src={img4} />
                </SocialIcons>
              </Contents>
            </Holder>
          </Blocks>
        </Main>
        {/* </HolderBig> */}
      </Container>
    </div>
  );
};

export default Footer;

const SocialIcons = styled.div`
  display: flex;
`;

// const WriteUp = styled.div``

const Img = styled.img`
  height: 37px;
  margin-left: 5px;

  :hover {
    cursor: pointer;
    transform: scale(1);
  }
`;

const Contents = styled.div`
  margin-bottom: 15px;
  color: white;
  width: 159px;
`;
const Content = styled.div`
  margin-bottom: 15px;
  color: white;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
`;

const Header = styled.div`
  margin-bottom: 30px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 25px;
`;

const Blocks = styled.div`
  width: 180px;
  height: 100%;
  margin-left: 70px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(29, 207, 159);
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(29, 207, 159);
`;

