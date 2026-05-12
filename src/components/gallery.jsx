import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import G01 from "../assets/g01.jpg";
import G02 from "../assets/g02.jpg";
import G03 from "../assets/g03.jpg";
import G04 from "../assets/g04.jpg";
import G05 from "../assets/g05.jpg";
import G06 from "../assets/g06.jpg";
import G07 from "../assets/g07.jpg";
import G08 from "../assets/g08.jpg";
import G09 from "../assets/g09.jpg";
import G10 from "../assets/g10.jpg";
import G11 from "../assets/g11.jpg";
import G12 from "../assets/g12.jpg";
import G13 from "../assets/g13.jpg";
import G14 from "../assets/g14.jpg";
import G15 from "../assets/g15.jpg";
import G16 from "../assets/g16.jpg";
import G17 from "../assets/g17.jpg";
import G18 from "../assets/g18.jpg";
import G19 from "../assets/g19.jpg";
import G20 from "../assets/g20.jpg";

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
  G01, G02, G03, G04, G05, G06, G07, G08, G09, G10,
  G11, G12, G13, G14, G15, G16, G17, G18, G19, G20,
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
