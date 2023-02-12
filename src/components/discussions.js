import { useScroll, AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getDiscussions } from "../api";
import { useRecoilValue } from "recoil";
import { compBgColorAtom, fontColorAtom } from "../atoms";
import Discussion from "./discussion";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 5;
`;

export default function Discussions({ discussions }) {
  /*
  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussons] = useState([]);
  const [notices, setNotices] = useState([]);
  const [clicked, setClicked] = useState(null);
  const [clickedLayoutId, setClickedLayoutId] = useState("");
  */
  /*
  const onDiscussionClick = (idx, layoutId) => {
    setClickedLayoutId((prev) => layoutId);
    setClicked((prev) => discussions[idx]);
  };

  const onOverlayClick = () => {
    setClickedLayoutId((prev) => "");
    setClicked((prev) => null);
  };
  */

  /*
  useEffect(() => {
    async function fetchData() {
      // const response = await MyAPI.getData(someId);
      setIsLoading((prev) => true);

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
  }, []);
  */

  return (
    <Wrapper>
      {discussions.map((discussion) => (
        <Discussion key={discussion.id} discussion={discussion}></Discussion>
      ))}
    </Wrapper>
  );
}
