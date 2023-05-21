import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../../Assets/opay.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Main>
          <DivLogo>
            <Logo src={img1} />
          </DivLogo>
          <DivNavs>
            <GreenNav>Personal</GreenNav>
            <Navs>Business</Navs>
            <Navs>Documentation</Navs>
            <Navs>Company</Navs>
            <Navs>Join Us</Navs>
          </DivNavs>
          <Icons />
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivLogo = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
`;

const DivNavs = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 18px;
  margin-right: 20px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const GreenNav = styled.div`
  margin: 0 20px;
  color: lightgreen;

  transition: all 300ms;

  :hover {
    cursor: pointer;
    color: grey;
  }
`;

const Navs = styled.div`
  margin: 0 20px;
  color: grey;
  transition: all 300ms;

  :hover {
    cursor: pointer;
    color: lightgreen;
  }
`;

const Icons = styled(AiOutlineMenu)`
  display: none;

  @media screen and (max-width: 1000px) {
    color: black;
    font-size: 40px;
    display: flex;
    margin-right: 50px;
  }
`;
