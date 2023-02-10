import styled from "styled-components";
import { useState, useEffect } from "react";
import { getDiscussions } from "../api";
import { useRecoilValue } from "recoil";
import { compBgColorAtom, fontColorAtom } from "../atoms";

const testImgUrl =
  "https://pbs.twimg.com/media/FomANxYacAUS1Wf?format=jpg&name=900x900";

const notice = "[notice] ";

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Discussion = styled.div`
  width: 90%;
  height: 100px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 15px;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  background-size: cover;
  background-position: center center;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Answered = styled.div`
  font-size: 25px;
`;

const Loader = styled.h1``;

export default function Discussions() {
  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussons] = useState([]);
  const [notices, setNotices] = useState([]);
  const compBgColor = useRecoilValue(compBgColorAtom);
  const fontColor = useRecoilValue(fontColorAtom);

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

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : discussions.length === 0 ? (
        <Loader>No Discussons</Loader>
      ) : (
        discussions.map((discussion) => (
          <Discussion
            key={discussion.id}
            style={{ backgroundColor: compBgColor }}
          >
            <Avatar
              style={{ backgroundImage: `url(${discussion.avatarUrl})` }}
            />
            <Title style={{ color: fontColor }}>{discussion.title}</Title>
            <Answered>{discussion.answer ? "☑️" : "❌"}</Answered>
          </Discussion>
        ))
      )}
    </Wrapper>
  );
}
