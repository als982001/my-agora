import { useScroll, AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import {
  bgColorAtom,
  btnColorAtom,
  compBgColorAtom,
  fontColorAtom,
} from "../atoms";

const Wrapper = styled.div`
  width: 50%;
  margin-top: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  background-color: #3c2a21;
  border-radius: 15px;
`;

const Btn = styled(motion.div)`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 20px;
  background-color: #404258;
  color: #e5e5cb;
  border: #000000 1px solid;
  box-shadow: 2px 2px 2px white, -2px 2px 2px white;

  &:hover {
    box-shadow: 1px 1px 1px white, -1px 1px 1px white;
  }

  &:active {
    box-shadow: none;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: 20px;
`;

const IdSpace = styled.input`
  height: 60%;
  margin-right: 10px;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #d8d8d8;
  color: #404258;
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

const MakeDiscussion = styled(motion.form)`
  position: fixed;
  width: 300px;
  height: 300px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #f8ede3;
  background-color: #3c2a21;
  box-shadow: 5px 5px 20px 10px black;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputLine = styled.div`
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #e5e5cb;
  margin-bottom: 10px;
`;

const InputValue = styled.input`
  border-radius: 10px;
  padding-left: 10px;
  background-color: #d8d8d8;
  color: #404258;
  height: 30px;
`;

const MakeBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 20px;
  background-color: #404258;
  color: #e5e5cb;
  border: #000000 1px solid;
  box-shadow: 2px 2px 2px white, -2px 2px 2px white;

  &:hover {
    box-shadow: 1px 1px 1px white, -1px 1px 1px white;
  }

  &:active {
    box-shadow: none;
  }
`;

export default function Make() {
  const { scrollY } = useScroll();
  const { register, handleSubmit, watch } = useForm();
  const bgColor = useRecoilValue(bgColorAtom);
  const compBgColor = useRecoilValue(compBgColorAtom);
  const fontColor = useRecoilValue(fontColorAtom);
  const btnColor = useRecoilValue(btnColorAtom);

  const [making, setMaking] = useState(false);
  const [id, setId] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const onMakeBtnClick = () => {
    setMaking((prev) => true);
  };

  const onOverlayClick = () => {
    setMaking((prev) => false);
  };

  const onValid = (data) => {
    console.log(data);
  };

  // console.log(watch());

  return (
    <Wrapper style={{ backgroundColor: compBgColor }}>
      <AnimatePresence>
        <Btn
          style={{ backgroundColor: btnColor }}
          layoutId={"make__discussion"}
          onClick={onMakeBtnClick}
        >
          Make
        </Btn>
        <SearchForm>
          <IdSpace
            placeholder={"ID 입력"}
            type="text"
            value={id}
            onChange={handleIdChange}
          ></IdSpace>
          <Btn style={{ backgroundColor: btnColor }}>Search</Btn>
        </SearchForm>
        {making ? (
          <>
            <Overlay onClick={onOverlayClick} />
            <MakeDiscussion
              layoutId={"make__discussion"}
              onSubmit={handleSubmit(onValid)}
              style={{ top: scrollY.get() + 100, backgroundColor: compBgColor }}
            >
              <InputLine>
                <span>Your name: </span>
                <InputValue
                  {...register("name", { required: true })}
                  placeholder="이름을 입력하세요."
                />
              </InputLine>
              <InputLine>
                <span>Your title: </span>
                <InputValue
                  {...register("title", { required: true })}
                  placeholder="제목을 입력하세요."
                />
              </InputLine>
              <InputLine>
                <span>Your question: </span>
                <InputValue
                  style={{ height: "100px" }}
                  {...register("question", { required: true })}
                  placeholder="질문을 입력하세요."
                />
              </InputLine>
              <MakeBtn style={{ backgroundColor: btnColor }}>Make</MakeBtn>
            </MakeDiscussion>
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
