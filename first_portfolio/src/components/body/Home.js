import React, { useState } from "react";
import styled, { css } from "styled-components";

const HomeStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
`;
const Hello = styled.div`
  margin: 0;
  font-size: 65px;
  font-weight: 500;
  color: white;
  display: none;
  text-align: center;
  ${(props) =>
    !props.open2 &&
    css`
      display: block;
    `}
  .customer {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;
const InputForm = styled.form`
  width: 50%;
  ${(props) =>
    !props.open &&
    css`
      .Hello {
        color: red;
      }
      display: none;
    `}
`;
const InputNick = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 24px;
  box-sizing: border-box;
`;

function Home() {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen2(false);
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
      <Hello open2={open2}>
        <div class="customer">{text}&nbsp;님 안녕하세요!</div>
        Developer 이준형의 포트폴리오입니다.
      </Hello>
    </HomeStyle>
  );
}

export default Home;
