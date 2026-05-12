import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";
import LocationMap from "../assets/LocationMap.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.95;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const MapImage = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
`;

const Content = styled.p`
  font-size: 0.9rem;
  line-height: 1.85;
  opacity: 0.92;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Location = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <MapImage src={LocationMap} alt="양재 엘블레스 약도" />
      <Content>
        서울특별시 서초구 강남대로 213
        <br />
        스포타임 건물 지하 1층 · 양재 엘블레스
        <br />
        ☎ 02-526-0300
        <br />
        <br />
        <Title>지하철</Title>
        <br />
        <br />
        3호선 · 신분당선 양재역 9번 출구와 바로 연결
        <br />
        <br />
        <Title>주차</Title>
        <br />
        <br />
        엘블레스 옆 양재주차장 이용 · 하객 2시간 무료주차
      </Content>
    </Wrapper>
  );
};

export default Location;
