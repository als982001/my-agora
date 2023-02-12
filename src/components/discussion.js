import styled from "styled-components";

const Disc = styled.a`
  width: 100%;
  height: 80px;
  color: #e5e5cb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border-top: 1px solid white;
`;

const ExceptDate = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AvatarAndTitle = styled.div`
  height: 80%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center center;
  margin-right: 10px;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Author = styled.h4`
  font-weight: bold;
`;

const CreatedAt = styled.h4`
  display: flex;
  align-items: end;
  font-weight: bold;
`;

export default function Discussion({ discussion }) {
  return (
    <Disc href={discussion.url} target="_blank">
      <ExceptDate>
        <AvatarAndTitle>
          <Avatar
            style={{
              backgroundImage: `url(${discussion.avatarUrl})`,
            }}
          />
          <Title>{discussion.title}</Title>
        </AvatarAndTitle>
        <Author>{discussion.author}</Author>
      </ExceptDate>
      <CreatedAt>{discussion.createdAt}</CreatedAt>
    </Disc>
  );
}
