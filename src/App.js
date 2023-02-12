import { useEffect, useState } from "react";
import styled from "styled-components";
import Make from "./components/make-discussion";
import { getDiscussions } from "./api";
import Discussions from "./components/discussions";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  bgColorAtom,
  compBgColorAtom,
  discIdAtom,
  fontColorAtom,
  searchIdAtom,
} from "./atoms";
import Utils from "./components/utils";

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 700px;
`;

const Title = styled.h1`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

const Loader = styled.h1``;

const notice = "[notice] ";

function App() {
  const discId = useRecoilValue(discIdAtom);
  const bgColor = useRecoilValue(bgColorAtom);
  const compBgColor = useRecoilValue(compBgColorAtom);
  const fontColor = useRecoilValue(fontColorAtom);
  // useSetRecoilState => setter 함수

  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussons] = useState([]);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading((prev) => true);

      setDiscussons([]);

      const allDiscussions = await getDiscussions();

      allDiscussions.map((discussion) => {
        const isNotice = discussion.title.indexOf(notice);

        if (isNotice === 0) {
          setNotices((prev) => [...prev, discussion]);
        } else {
          setDiscussons((prev) => [...prev, discussion]);
        }
      });

      setIsLoading((prev) => false);
    }
    fetchData();
  }, [discId]);

  return (
    <Wrapper style={{ backgroundColor: "#03001C" }}>
      <Title style={{ backgroundColor: compBgColor, color: fontColor }}>
        Agora States
      </Title>
      <Utils notices={notices} />
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Discussions discussions={discussions} />
      )}
    </Wrapper>
  );
}

export default App;
