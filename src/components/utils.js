import { useScroll, AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { fontColorAtom } from "../atoms";
import Notice from "./notice";
import Search from "./search";
import Write from "./write";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: #404258;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const Btn = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: #6b728e;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.1;
  }
`;

const BtnIcon = styled.h4`
  font-size: 30px;
`;

const BtnText = styled.h4`
  font-size: 15px;
  font-weight: bold;
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

const BigDisplay = styled(motion.div)`
  position: fixed;
  width: 500px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid #f8ede3;
  overflow: hidden;
  background-color: #474e68;
  box-shadow: 5px 5px 20px 10px black;
  z-index: 10;
`;

export default function Utils({ notices }) {
  const { scrollY } = useScroll();
  const [layoutID, setLayoutId] = useState("");
  const fontColor = useRecoilValue(fontColorAtom);
  const [noticeClick, setNoticeClick] = useState(false);
  const [writeClick, setWriteClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);

  const onNoticeClick = () => {
    setNoticeClick((prev) => true);
    setLayoutId((prev) => "notice");
  };

  const onWriteClick = () => {
    setWriteClick((prev) => true);
    setLayoutId((prev) => "write");
  };

  const onSearchClick = () => {
    setSearchClick((prev) => true);
    setLayoutId((prev) => "search");
  };

  const onOverlayClick = () => {
    setNoticeClick((prev) => false);
    setWriteClick((prev) => false);
    setSearchClick((prev) => false);
    setLayoutId((prev) => "");
  };

  return (
    <Nav>
      <AnimatePresence>
        <Btn onClick={onNoticeClick} layoutId="notice">
          <BtnIcon>📣</BtnIcon>
          <BtnText style={{ color: fontColor }}>공지</BtnText>
        </Btn>
        <Btn onClick={onWriteClick} layoutId="write">
          <BtnIcon>🖊️</BtnIcon>
          <BtnText style={{ color: fontColor }}>작성</BtnText>
        </Btn>
        <Btn onClick={onSearchClick} layoutId="search">
          <BtnIcon>🔍</BtnIcon>
          <BtnText style={{ color: fontColor }}>검색</BtnText>
        </Btn>
        {noticeClick || writeClick || searchClick ? (
          <>
            <Overlay onClick={onOverlayClick} />
            <BigDisplay
              layoutId={layoutID}
              style={{ top: scrollY.get() + 100 }}
            >
              {noticeClick ? (
                <>
                  {notices.map((notice) => (
                    <Notice key={notice.id} notice={notice} />
                  ))}
                </>
              ) : null}
              {writeClick ? <Write /> : null}
              {searchClick ? <Search /> : null}
            </BigDisplay>
          </>
        ) : null}
      </AnimatePresence>
    </Nav>
  );
}
