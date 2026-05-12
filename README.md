# 윤형덕 ♥ 장예나 모바일 청첩장 (버전 2)

2026년 8월 8일 토요일 오후 5시 · 양재 엘블레스 (스포타임 건물 지하 1층)

- 템플릿 출처: [S-jooyoung/WEDDING_INVITATION](https://github.com/S-jooyoung/WEDDING_INVITATION) (Gatsby + React)
- 배포: **Netlify** (이 레포를 Netlify에 연결하면 `netlify.toml` 설정대로 자동 빌드·배포). 빌드는 Node 18 필요 — `netlify.toml`에 명시됨.
- 본가 버전(다른 디자인): https://zyn0331.github.io

## 내용 수정하는 곳

| 무엇 | 파일 |
| --- | --- |
| 신랑신부·부모님 이름, 예식 일시·장소, 계좌번호, 카카오 공유 키/이미지 | `config.js` |
| 인사말 문구 | `src/components/greeting.jsx` |
| 오시는 길 약도 이미지 / 주소·교통 안내 텍스트 | `src/assets/LocationMap.png`, `src/components/location.jsx` |
| 갤러리 사진 (20장) | `src/assets/Gallery_Photo_1.jpg` ~ `Gallery_Photo_20.jpg` (`src/components/gallery.jsx`) |
| 상단 대표 사진 | `src/components/title.jsx` 의 `HeroPhoto` import |
| 시(詩) 인용구 | `src/components/quote.jsx` |
| 페이지 제목·공유 미리보기(og 태그), 폰트(Noto Serif KR) | `gatsby-ssr.js` |
| 배경 음악 | `src/assets/song.mp3` (현재 템플릿 기본곡 — 브라우저 자동재생 정책상 보통 사용자가 화면 터치해야 재생됨) |

## 로컬 실행 (Node 18 필요)

```bash
npm install
npm start          # http://localhost:8000
npm run build      # public/ 생성
```

> Node 20+ 에서는 옛 네이티브 모듈(`lmdb`) 빌드가 깨질 수 있어 Node 18 권장. Netlify는 `netlify.toml`로 Node 18 고정됨.
