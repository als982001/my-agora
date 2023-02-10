import { useEffect } from "react";
import styled from "styled-components";
import Make from "./components/make-discussion";
import { getDiscussions } from "./api";
import Discussions from "./components/discussions";
import { useRecoilValue } from "recoil";
import { bgColorAtom, compBgColorAtom, fontColorAtom } from "./atoms";

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 50px;
  min-width: 1000px;
`;

const Title = styled.h1`
  width: 50%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  font-size: 60px;
  font-weight: bold;
`;

function App() {
  const bgColor = useRecoilValue(bgColorAtom);
  const compBgColor = useRecoilValue(compBgColorAtom);
  const fontColor = useRecoilValue(fontColorAtom);
  // useSetRecoilState => setter 함수

  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <Title style={{ backgroundColor: compBgColor, color: fontColor }}>
        Agora States
      </Title>
      <Make />
      <Discussions />
    </Wrapper>
  );
}

export default App;
