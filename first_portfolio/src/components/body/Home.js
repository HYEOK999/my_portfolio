import React, { useState } from "react";
import styled, { css } from "styled-components";

const HomeStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  .Hello {
    margin: 0;
    font-size: 40px;
  }
`;
const InputForm = styled.form`
  width: 50%;
`;
const InputNick = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 24px;
  box-sizing: border-box;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:active {
        background: #fa5252;
      }
    `}
`;

function Home() {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    setOpen(false);
  };

  return (
    <HomeStyle>
      <InputForm onSubmit={onSubmit} open={open}>
        <InputNick
          autoFocus
          onChange={onChange}
          value={text}
          placeholder="닉네임 입력 후 Enter를 눌려주세요!"
        />
      </InputForm>
      <div className="Hello">{text}</div>
    </HomeStyle>
  );
}

export default Home;
