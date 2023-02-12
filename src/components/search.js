import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchIdAtom } from "../atoms";
import { getDiscussionOfId } from "../api.js";
import Discussion from "./discussion";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SearchLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const Announcement = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  padding-left: 10px;
  width: 70%;
  font-size: 20px;
  background-color: #03001c;
  color: white;
`;

const Btn = styled.div`
  width: 60px;
  height: 40px;
  font-size: 20px;
  background-color: #6b728e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 2px 2px white, -2px 2px 2px white;

  &:hover {
    box-shadow: 1px 1px 1px white, -1px 1px 1px white;
  }

  &:active {
    box-shadow: none;
  }
`;

const didFind = (discussion) => {
  return Object.keys(discussion).length !== 0;
};

export default function Search() {
  const [searchId, setSearchId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState({});

  const handleInputId = (event) => {
    setSearchId((prev) => event.target.value);
  };

  const handleBtnClick = async () => {
    setIsLoading((prev) => true);

    if (isNaN(Number(searchId)) === false) {
      const data = await getDiscussionOfId(searchId);
      setSearched((prev) => data);
    }

    setIsLoading((prev) => false);
  };

  return (
    <Wrapper>
      <SearchLine>
        <Announcement>Id: </Announcement>
        <Input
          placeholder="검색할 Id를 입력하세요."
          type="text"
          value={searchId}
          onChange={handleInputId}
        />
        <Btn onClick={handleBtnClick}>검색</Btn>
      </SearchLine>
      {searchId && isLoading === false && didFind(searched) ? (
        <Discussion discussion={searched} />
      ) : null}
    </Wrapper>
  );
}
