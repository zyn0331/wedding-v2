import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import P1 from "../assets/Gallery_Photo_1.jpg";
import P2 from "../assets/Gallery_Photo_2.jpg";
import P3 from "../assets/Gallery_Photo_3.jpg";
import P4 from "../assets/Gallery_Photo_4.jpg";
import P5 from "../assets/Gallery_Photo_5.jpg";
import P6 from "../assets/Gallery_Photo_6.jpg";
import P7 from "../assets/Gallery_Photo_7.jpg";
import P8 from "../assets/Gallery_Photo_8.jpg";
import P9 from "../assets/Gallery_Photo_9.jpg";
import P10 from "../assets/Gallery_Photo_10.jpg";
import P11 from "../assets/Gallery_Photo_11.jpg";
import P12 from "../assets/Gallery_Photo_12.jpg";
import P13 from "../assets/Gallery_Photo_13.jpg";
import P14 from "../assets/Gallery_Photo_14.jpg";
import P15 from "../assets/Gallery_Photo_15.jpg";
import P16 from "../assets/Gallery_Photo_16.jpg";
import P17 from "../assets/Gallery_Photo_17.jpg";
import P18 from "../assets/Gallery_Photo_18.jpg";
import P19 from "../assets/Gallery_Photo_19.jpg";
import P20 from "../assets/Gallery_Photo_20.jpg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const sources = [
  P1, P2, P3, P4, P5, P6, P7, P8, P9, P10,
  P11, P12, P13, P14, P15, P16, P17, P18, P19, P20,
];

const images = sources.map((src) => ({ original: src, thumbnail: src }));

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={false}
        showIndex={true}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
