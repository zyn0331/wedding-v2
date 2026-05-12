import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <title key="title">윤형덕 ♥ 장예나, 결혼합니다</title>,
    <meta
      key="desc"
      name="description"
      content="2026년 8월 8일 토요일 오후 5시 · 양재 엘블레스 (스포타임 건물 지하 1층)"
    />,
    <meta key="og-type" property="og:type" content="website" />,
    <meta
      key="og-title"
      property="og:title"
      content="윤형덕 ♥ 장예나, 결혼합니다"
    />,
    <meta
      key="og-desc"
      property="og:description"
      content="2026년 8월 8일 토요일 오후 5시 · 양재 엘블레스 (스포타임 건물 지하 1층)"
    />,
    <meta
      key="og-image"
      property="og:image"
      content="https://zyn0331.github.io/thumbnail.jpg"
    />,
    <link
      key="gf-pre1"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="gf-pre2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="gf-noto-serif"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700&display=swap"
    />,
  ]);
};
