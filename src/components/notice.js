import styled from "styled-components";

const Wrapper = styled.a`
  width: 100%;
  background-color: #03001c;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 1px solid white;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  background-size: cover;
  background-position: center center;
`;

const Title = styled.h3`
  color: white;
  font-size: 30px;
  margin-left: 20px;
`;

export default function Notice({ notice }) {
  return (
    <Wrapper href={notice.url} target="_blank">
      <Avatar style={{ backgroundImage: `url(${notice.avatarUrl})` }} />
      <Title>{notice.title}</Title>
    </Wrapper>
  );
}
