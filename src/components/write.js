import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const WriteLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Btn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #474e68;
  color: white;

  box-shadow: 2px 2px 2px white, -2px 2px 2px white;

  &:hover {
    box-shadow: 1px 1px 1px white, -1px 1px 1px white;
  }

  &:active {
    box-shadow: none;
  }
`;

const Announcement = styled.h3`
  font-weight: bold;
  font-size: 15px;
`;

const Input = styled.input`
  width: 300px;
  margin-right: 50px;
  background-color: #03001c;
  color: white;
  padding-left: 10px;
`;

export default function Write() {
  const { register, handleSubmit, watch } = useForm();

  // console.log(watch());

  const onValid = (data) => {
    console.log(data);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onValid)}>
      <WriteLine style={{ marginBottom: "1px" }}>
        <Announcement>Your name: </Announcement>
        <Input
          style={{ height: "30px" }}
          {...register("name", { required: true })}
          placeholder="이름을 입력하세요."
        />
      </WriteLine>
      <WriteLine style={{ marginBottom: "1px" }}>
        <Announcement>Your title: </Announcement>
        <Input
          style={{ height: "30px" }}
          {...register("title", { required: true })}
          placeholder="제목을 입력하세요."
        />
      </WriteLine>
      <WriteLine style={{ marginBottom: "1px" }}>
        <Announcement>Your question: </Announcement>
        <Input
          style={{ height: "100px" }}
          {...register("question", { required: true })}
          placeholder="질문을 입력하세요."
        />
      </WriteLine>
      <WriteLine style={{ justifyContent: "center", marginTop: "10px" }}>
        <Btn>질문하기</Btn>
      </WriteLine>
    </Wrapper>
  );
}
