import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>예비집사판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            src={ResultData[0].image}
            width={350}
            height={350}
            className='rounded-circle'
          />
        </LogoImage>
        <Desc>
          예비 집사님과 찰떵궁합인 고양이는 {ResultData[0].name}입니다.
        </Desc>
        <Button
          style={{ fontFamily: "SimKyungha" }}
          onClick={() => navigate("/")}
        >
          테스트 다시하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SimKyungha";
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
  font-family: "SimKyungha";
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
  font-family: "SimKyungha";
`;
